/*
 * Copyright 2014 Dominick Baier, Brock Allen, Bert Hoorne
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Reflection;
using IdentityAdmin.Extensions;

namespace IdentityAdmin.Core.Metadata
{    
    public class PropertyMetadata
    {
        public string Type { get; set; }
        public string Name { get; set; }
        public PropertyDataType DataType { get; set; }
        public bool Required { get; set; }
        public string[] EnumOptions { get; set; }

        internal void Validate()
        {
            if (string.IsNullOrWhiteSpace(Type))
                throw new InvalidOperationException("PropertyMetadata Type is not assigned");
            if (string.IsNullOrWhiteSpace(Name))
                throw new InvalidOperationException("PropertyMetadata Name is not assigned");
        }

        public static PropertyMetadata FromFunctions<TContainer, TProperty>(
            string type,
            Func<TContainer, TProperty> get,
            Func<TContainer, TProperty, IdentityAdminResult> set,
            string name = null,
            PropertyDataType? dataType = null,
            bool? required = null)
        {
            if (string.IsNullOrWhiteSpace(type)) throw new ArgumentNullException("type");
            if (get == null) throw new ArgumentNullException("get");
            if (set == null) throw new ArgumentNullException("set");

            var meta = new ExpressionPropertyMetadata<TContainer, TProperty>(type, get, set);
            if (name != null) meta.Name = name;
            if (dataType != null) meta.DataType = dataType.Value;
            if (required != null) meta.Required = required.Value;

            return meta;
        }

        public static PropertyMetadata FromProperty<TContainer>(
            Expression<Func<TContainer, object>> expression,
            string type = null,
            string name = null,
            PropertyDataType? dataType = null,
            bool? required = null)
        {
            if (expression == null) throw new ArgumentNullException("expression");

            if (expression.Body.NodeType != ExpressionType.MemberAccess)
            {
                throw new ArgumentException("Expression must be a member property expression.");
            }

            var memberExpression = (MemberExpression) expression.Body;
            var property = memberExpression.Member as PropertyInfo;
            if (property == null)
            {
                throw new ArgumentException("Expression must be a member property expression.");
            }

            return FromPropertyInfo(property, type, name, dataType, required);
        }

        public static PropertyMetadata FromPropertyName<T>(
            string propertyName,
            string type = null,
            string name = null,
            PropertyDataType? dataType = null,
            bool? required = null)
        {
            if (string.IsNullOrWhiteSpace(propertyName)) throw new ArgumentNullException("propertyName");

            var property = typeof (T).GetProperty(propertyName);
            if (property == null)
            {
                throw new ArgumentException(propertyName + " is invalid property on " + typeof (T).FullName);
            }

            return FromPropertyInfo(property, type, name, dataType, required);
        }

        public static PropertyMetadata FromPropertyInfo(
            PropertyInfo property,
            string type = null,
            string name = null,
            PropertyDataType? dataType = null,
            bool? required = null)
        {
            if (property == null) throw new ArgumentNullException("property");

            if (!property.IsValidAsPropertyMetadata())
            {
                throw new InvalidOperationException(property.Name +
                                                    " is an invalid property for use as PropertyMetadata");
            }

            var propertyMetaData = new ReflectedPropertyMetadata(property)
            {
                Type = type ?? property.Name,
                Name = name ?? property.GetName(),
                DataType = dataType ?? property.GetPropertyDataType(),
                Required = required ?? property.IsRequired()
            };

            switch (propertyMetaData.DataType)
            {
                case PropertyDataType.Enum:
                    propertyMetaData.EnumOptions = property.GetEnumValues();
                    break;
            }

            return propertyMetaData;
        }

        public static PropertyMetadata FromPropertyInfoWithType(
            PropertyInfo property,
            Type type,
            string name = null,
            PropertyDataType? dataType = null,
            bool? required = null)
        {
            if (property == null) throw new ArgumentNullException("property");

            if (!property.IsValidAsPropertyMetadata())
            {
                throw new InvalidOperationException(property.Name +
                                                    " is an invalid property for use as PropertyMetadata");
            }

            var propertyMetaData = new ReflectedPropertyMetadata(property)
            {
                Name = name ?? property.GetName(),
                DataType = dataType ?? property.GetPropertyDataType(),
                Required = required ?? property.IsRequired(),
                Type = property.Name
            };
            if (propertyMetaData.Name == "Id"){return null;}
            switch (propertyMetaData.DataType)
            {
                case PropertyDataType.Enum:
                    propertyMetaData.EnumOptions = property.GetEnumValues();
                    break;
            }

            return propertyMetaData;
        }

        protected static List<PropertyMetadata> GetProperties(PropertyMetadata propMetadata, Type type)
        {
            var returnValue = new List<PropertyMetadata>();
            var clientProperties = type.GetProperties(BindingFlags.Public | BindingFlags.Instance);
            var currentClientProperty = clientProperties.FirstOrDefault(p => p.Name == propMetadata.Name);
            if (currentClientProperty != null)
            {
                var genericArguments = currentClientProperty.PropertyType.GetGenericArguments();
                Type currentType;
                if (genericArguments.Length == 1)
                {
                    currentType = genericArguments[0];
                }
                else
                {
                    // Could be null if implements two IEnumerable
                    currentType = currentClientProperty.PropertyType.GetInterfaces().Where(t => t.IsGenericType)
                        .Where(t => t.GetGenericTypeDefinition() == typeof (ICollection<>))
                        .SingleOrDefault().GetGenericArguments()[0];
                }

                foreach (var currentTypeProp in currentType.GetProperties())
                {
                    if (currentTypeProp.IsValidAsPropertyMetadata())
                    {
                        returnValue.Add(new PropertyMetadata
                            {
                                Type = currentTypeProp.Name,
                                Name = currentTypeProp.GetName(),
                                DataType =currentTypeProp.GetType().GetPropertyDataType(),
                                Required = currentTypeProp.IsRequired()     
                        });
                    }
                }
            }

            return returnValue;
        }

        public static IEnumerable<PropertyMetadata> FromType<T>()
        {
            return FromType(typeof (T));
        }

        public static IEnumerable<PropertyMetadata> FromType<T>(params string[] propertiesToExclude)
        {
            return FromType(typeof (T), propertiesToExclude);
        }

        public static IEnumerable<PropertyMetadata> FromType<T>(
            params Expression<Func<T, object>>[] propertyExpressionsToExclude)
        {
            var propertiesToExclude = new List<string>();
            foreach (var expression in propertyExpressionsToExclude)
            {
                if (expression.Body.NodeType != ExpressionType.MemberAccess)
                {
                    throw new ArgumentException("Expression must be a member property expression.");
                }

                var memberExpression = (MemberExpression) expression.Body;
                var property = memberExpression.Member as PropertyInfo;
                if (property == null)
                {
                    throw new ArgumentException("Expression must be a member property expression.");
                }

                propertiesToExclude.Add(property.Name);
            }

            return FromType(typeof (T), propertiesToExclude.ToArray());
        }

        public static IEnumerable<PropertyMetadata> FromType(Type type, params string[] propertiesToExclude)
        {
            if (type == null) throw new ArgumentNullException("type");

            var props = new List<PropertyMetadata>();

            var properties =
                type.GetProperties(BindingFlags.Public | BindingFlags.Instance | BindingFlags.IgnoreCase |
                                   BindingFlags.DeclaredOnly);
            foreach (var property in properties)
            {
                if (!propertiesToExclude.Contains(property.Name, StringComparer.OrdinalIgnoreCase))
                {
                    if (property.IsValidAsPropertyMetadata())
                    {
                        var propMeta = FromPropertyInfoWithType(property, type);
                        if(propMeta != null)props.Add(propMeta);
                    }
                }
            }

            return props;
        }
    }
}