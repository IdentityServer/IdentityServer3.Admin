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
using System.Web.Http.Routing;
using IdentityAdmin.Core;
using IdentityAdmin.Core.Client;

namespace IdentityAdmin.Api.Models.Client
{
    public class ClientQueryResultResourceData : QueryResult<ClientSummary>
    {
        static ClientQueryResultResourceData()
        {
            AutoMapper.Mapper.CreateMap<QueryResult<ClientSummary>, ClientQueryResultResourceData>()
                .ForMember(x => x.Items, opts => opts.MapFrom(x => x.Items));
            AutoMapper.Mapper.CreateMap<ClientSummary, ClientResultResource>()
                .ForMember(x => x.Data, opts => opts.MapFrom(x => x));
        }

        /// <summary>
        /// Needed for Unit Testing
        /// </summary>
        public ClientQueryResultResourceData()
        {
            
        }

        public ClientQueryResultResourceData(QueryResult<ClientSummary> result, UrlHelper url, ClientMetaData meta)
        {
            if (result == null) throw new ArgumentNullException("result");
            if (url == null) throw new ArgumentNullException("url");
            if (meta == null) throw new ArgumentNullException("meta");

            AutoMapper.Mapper.Map(result, this);

            foreach (var client in this.Items)
            {
                var links = new Dictionary<string, string> {
                    {"detail", url.Link(Constants.RouteNames.GetClient, new { subject = client.Data.Subject })}
                };
                if (meta.SupportsDelete)
                {
                    links.Add("delete", url.Link(Constants.RouteNames.DeleteClient, new { subject = client.Data.Subject }));
                }
                client.Links = links;
            }
        }

        public new IEnumerable<ClientResultResource> Items { get; set; }
    }
}