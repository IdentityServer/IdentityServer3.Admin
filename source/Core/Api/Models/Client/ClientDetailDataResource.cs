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
using IdentityAdmin.Core.Client;
using IdentityAdmin.Core.Metadata;
using IdentityAdmin.Extensions;

namespace IdentityAdmin.Api.Models.Client
{
    public class ClientDetailDataResource : Dictionary<string, object>
    {
        public ClientDetailDataResource(ClientDetail client, UrlHelper url, IdentityAdminMetadata idmAdminMeta)
        {
            if (client == null) throw new ArgumentNullException("client");
            if (url == null) throw new ArgumentNullException("url");
            if (idmAdminMeta == null) throw new ArgumentNullException("idmAdminMeta");

            this["ClientName"] = client.ClientName;
            this["ClientId"] = client.ClientId;
            this["Subject"] = client.Subject;

            if (client.Properties != null)
            {
                var props =
                    from p in client.Properties
                    let m =
                        (from m in idmAdminMeta.ClientMetaData.UpdateProperties where m.Type == p.Type select m).SingleOrDefault
                            ()
                    where m != null
                    select new
                    {
                        Data = m.Convert(p.Value),
                        Meta = m,
                        Links = new
                        {
                            update = url.RelativeLink(Constants.RouteNames.UpdateClientProperty,
                                new
                                {
                                    subject = client.Subject,
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
            if (client.Claims != null)
            {
                var claims =
                    from c in client.Claims.ToArray()
                    select new
                    {
                        Data = c,
                        Links = new
                        {
                            delete = url.RelativeLink(Constants.RouteNames.RemoveClientClaim, new
                            {
                                subject = client.Subject,
                                id = c.Id
                            })
                        }
                    };

                this["Claims"] = new
                {
                    Data = claims.ToArray(),
                    Links = new
                    {
                        create = url.RelativeLink(Constants.RouteNames.AddClientClaim, new { subject = client.Subject })
                    }
                };
            }
            #endregion  
            
            #region ClientSecrets
            if (client.ClientSecrets != null)
            {
                var clientSecrets =
                    from c in client.ClientSecrets.ToArray()
                    select new
                    {
                        Data = c,
                        Links = new
                        {
                            delete = url.RelativeLink(Constants.RouteNames.RemoveClientSecret, new
                            {
                                subject = client.Subject,
                                id = c.Id
                            })
                        }
                    };

                this["ClientSecrets"] = new
                {
                    Data = clientSecrets.ToArray(),
                    Links = new
                    {
                        create = url.RelativeLink(Constants.RouteNames.AddClientSecret, new { subject = client.Subject })
                    }
                };
            }
            #endregion

            #region IdentityProviderRestrictions
            if (client.IdentityProviderRestrictions != null)
            {
                var clientIdentityProviderRestrictions =
                    from c in client.IdentityProviderRestrictions.ToArray()
                    select new
                    {
                        Data = c,
                        Links = new
                        {
                            delete = url.RelativeLink(Constants.RouteNames.RemoveClientIdPRestriction, new
                            {
                                subject = client.Subject,
                                id = c.Id
                            })
                        }
                    };

                this["IdentityProviderRestrictions"] = new
                {
                    Data = clientIdentityProviderRestrictions.ToArray(),
                    Links = new
                    {
                        create = url.RelativeLink(Constants.RouteNames.AddClientIdPRestriction, new { subject = client.Subject })
                    }
                };
            }
            #endregion

            #region PostLogoutRedirectUris
            if (client.PostLogoutRedirectUris != null)
            {
                var postLogoutRedirectUris =
                    from c in client.PostLogoutRedirectUris.ToArray()
                    select new
                    {
                        Data = c,
                        Links = new
                        {
                            delete = url.RelativeLink(Constants.RouteNames.RemoveClientPostLogoutRedirectUri, new
                            {
                                subject = client.Subject,
                                id = c.Id
                            })
                        }
                    };

                this["PostLogoutRedirectUris"] = new
                {
                    Data = postLogoutRedirectUris.ToArray(),
                    Links = new
                    {
                        create = url.RelativeLink(Constants.RouteNames.AddClientPostLogoutRedirectUri, new { subject = client.Subject })
                    }
                };
            }
            #endregion  

            #region RedirectUris
            if (client.RedirectUris != null)
            {
                var redirectUris =
                    from c in client.RedirectUris.ToArray()
                    select new
                    {
                        Data = c,
                        Links = new
                        {
                            delete = url.RelativeLink(Constants.RouteNames.RemoveClientRedirectUri, new
                            {
                                subject = client.Subject,
                                id = c.Id
                            })
                        }
                    };

                this["RedirectUris"] = new
                {
                    Data = redirectUris.ToArray(),
                    Links = new
                    {
                        create = url.RelativeLink(Constants.RouteNames.AddClientRedirectUri, new { subject = client.Subject })
                    }
                };
            }
            #endregion  

            #region AllowedCorsOrigins
            if (client.AllowedCorsOrigins != null)
            {
                var alowedCorsOrigins =
                    from c in client.AllowedCorsOrigins.ToArray()
                    select new
                    {
                        Data = c,
                        Links = new
                        {
                            delete = url.RelativeLink(Constants.RouteNames.RemoveClientCorsOrigin, new
                            {
                                subject = client.Subject,
                                id = c.Id
                            })
                        }
                    };

                this["AllowedCorsOrigins"] = new
                {
                    Data = alowedCorsOrigins.ToArray(),
                    Links = new
                    {
                        create = url.RelativeLink(Constants.RouteNames.AddClientCorsOrigin, new { subject = client.Subject })
                    }
                };
            }
            #endregion 
            
            #region AllowedCustomGrantTypes
            if (client.AllowedCustomGrantTypes != null)
            {
                var allowedCustomGrantTypes =
                    from c in client.AllowedCustomGrantTypes.ToArray()
                    select new
                    {
                        Data = c,
                        Links = new
                        {
                            delete = url.RelativeLink(Constants.RouteNames.RemoveClientCustomGrantType, new
                            {
                                subject = client.Subject,
                                id = c.Id
                            })
                        }
                    };

                this["AllowedCustomGrantTypes"] = new
                {
                    Data = allowedCustomGrantTypes.ToArray(),
                    Links = new
                    {
                        create = url.RelativeLink(Constants.RouteNames.AddClientCustomGrantType, new { subject = client.Subject })
                    }
                };
            }
            #endregion         
            
            #region AllowedScopes
            if (client.AllowedScopes != null)
            {
                var allowedScopes =
                    from c in client.AllowedScopes.ToArray()
                    select new
                    {
                        Data = c,
                        Links = new
                        {
                            delete = url.RelativeLink(Constants.RouteNames.RemoveClientScope, new
                            {
                                subject = client.Subject,
                                id = c.Id
                            })
                        }
                    };

                this["AllowedScopes"] = new
                {
                    Data = allowedScopes.ToArray(),
                    Links = new
                    {
                        create = url.RelativeLink(Constants.RouteNames.AddClientScope, new { subject = client.Subject })
                    }
                };
            }
            #endregion    
            
         
        }
    }
}