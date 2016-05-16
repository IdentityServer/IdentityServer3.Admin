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
using System.Security.Claims;
using System.Threading.Tasks;
using System.Web.Http;
using IdentityAdmin.Api.Filters;
using IdentityAdmin.Api.Models.Client;
using IdentityAdmin.Api.Models.Scope;
using IdentityAdmin.Core;
using IdentityAdmin.Core.Metadata;
using IdentityAdmin.Extensions;

namespace IdentityAdmin.Api.Controllers
{
    [NoCache]
    [RoutePrefix(Constants.MetadataRoutePrefix)]
    public class MetaController : ApiController
    {
        private readonly IIdentityAdminService _identityAdminService;

        public MetaController(IIdentityAdminService identityAdminService)
        {
            if (identityAdminService == null) throw new ArgumentNullException("identityAdminService");

            this._identityAdminService = identityAdminService;
        }

        private IdentityAdminMetadata _metadata;

        private async Task<IdentityAdminMetadata> GetMetadataAsync()
        {
            if (_metadata == null)
            {
                _metadata = await this._identityAdminService.GetMetadataAsync();
                if (_metadata == null) throw new InvalidOperationException("GetMetadataAsync returned null");
                _metadata.Validate();
            }

            return _metadata;
        }

        [Route("")]
        public async Task<IHttpActionResult> Get()
        {
            var coreMeta = await GetMetadataAsync();
            var data = new Dictionary<string, object>();

            var cp = (ClaimsPrincipal) User;
            var name = cp.Identity.Name;
            data.Add("currentUser", new
            {
                username = name
            });
        
            var links = new Dictionary<string, object>();
                        
            links["clients"] = Url.RelativeLink(Constants.RouteNames.GetClients);
            if (coreMeta.ClientMetaData.SupportsCreate)
            {
                links["createClient"] = new CreateClientLink(Url, coreMeta.ClientMetaData);
            }

            links["scopes"] = Url.RelativeLink(Constants.RouteNames.GetScopes);
            if (coreMeta.ScopeMetaData.SupportsCreate)
            {
                links["createScope"] = new CreateScopeLink(Url, coreMeta.ScopeMetaData);
            }
            
            return Ok(new
            {
                Data = data,
                Links = links
            });
        }
    }
}