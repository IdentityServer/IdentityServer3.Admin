/*
 * Copyright 2014 Dominick Baier, Brock Allen
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
using IdentityAdmin.Configuration;
using IdentityAdmin.Core;
using IdentityAdmin.Core.Metadata;

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

        private IdentityAdminManagerMetadata _metadata;

        private async Task<IdentityAdminManagerMetadata> GetMetadataAsync()
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
            var meta = await GetMetadataAsync();
            var coreMeta = await GetMetadataAsync();
            var data = new Dictionary<string, object>();

            var cp = (ClaimsPrincipal) User;
            var name = cp.Identity.Name;
            data.Add("currentUser", new
            {
                username = name
            });

            var links = new Dictionary<string, object>();

            links["clients"] = Url.Link(Constants.RouteNames.GetClients, null);
            if (coreMeta.ClientMetaData.SupportsCreate)
            {
                links["createClient"] = new CreateClientLink(Url, coreMeta.ClientMetaData);
            }

            links["scopes"] = Url.Link(Constants.RouteNames.GetScopes, null);
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