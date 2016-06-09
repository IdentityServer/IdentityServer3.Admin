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
using System.Web.Http.Routing;
using IdentityAdmin.Core.Metadata;
using IdentityAdmin.Core.Scope;
using IdentityAdmin.Extensions;

namespace IdentityAdmin.Api.Models.Scope
{
    public class ScopeDetailDataResource : Dictionary<string, object>
    {
        public ScopeDetailDataResource(ScopeDetail scope, UrlHelper url, IdentityAdminMetadata idmAdminMeta)
        {
            if (scope == null) throw new ArgumentNullException("scope");
            if (url == null) throw new ArgumentNullException("url");
            if (idmAdminMeta == null) throw new ArgumentNullException("idmAdminMeta");

            this["Name"] = scope.Name;
            this["Description"] = scope.Description;
            this["Subject"] = scope.Subject;

            if (scope.Properties != null)
            {
                var props =
                    from p in scope.Properties
                    let m =
                        (from m in idmAdminMeta.ScopeMetaData.UpdateProperties where m.Type == p.Type select m).SingleOrDefault
                            ()
                    where m != null
                    select new
                    {
                        Data = m.Convert(p.Value),
                        Meta = m,
                        Links = new
                        {
                            update = url.RelativeLink(Constants.RouteNames.UpdateScopeProperty,
                                new
                                {
                                    subject = scope.Subject,
                                    type = p.Type.ToBase64UrlEncoded()
                                }
                                )
                        }
                    };

                if (props.Any())
                {
                    this["Properties"] = props.ToArray();
                }
            }

            #region Claims
            if (scope.ScopeClaimValues != null)
            {
                var claimValues =
                    from c in scope.ScopeClaimValues.ToArray()
                    select new
                    {
                        Data = c,
                        Links = new
                        {
                            delete = url.RelativeLink(Constants.RouteNames.RemoveScopeClaim, new
                            {
                                subject = scope.Subject,
                                id = c.Id
                            }),
                            update = url.RelativeLink(Constants.RouteNames.UpdateScopeClaim, new
                            {
                                subject = scope.Subject,
                                id = c.Id
                            }),
                        }
                    };

                this["Claims"] = new
                {
                    Data = claimValues.ToArray(),
                    Links = new
                    {
                        create = url.RelativeLink(Constants.RouteNames.AddScopeClaim, new { subject = scope.Subject })
                    }
                };
            }
            if (scope.ScopeSecretValues != null)
            {
                var scopeSecrets =
                    from c in scope.ScopeSecretValues.ToArray()
                    select new
                    {
                        Data = c,
                        Links = new
                        {
                            delete = url.RelativeLink(Constants.RouteNames.RemoveScopeSecret, new
                            {
                                subject = scope.Subject,
                                id = c.Id
                            }),
                            update = url.RelativeLink(Constants.RouteNames.UpdateScopeSecret, new
                            {
                                subject = scope.Subject,
                                id = c.Id
                            }),
                        }
                    };

                this["Secrets"] = new
                {
                    Data = scopeSecrets.ToArray(),
                    Links = new
                    {
                        create = url.RelativeLink(Constants.RouteNames.AddScopeSecret, new { subject = scope.Subject })
                    }
                };
            }
            #endregion

        }
    }
}