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
using System.Collections.Generic;

namespace IdentityAdmin.Core.Client
{
    public class ClientDetail : ClientSummary
    {
        public IEnumerable<PropertyValue> Properties { get; set; }
        public ICollection<ClientClaimValue> Claims { get; set; }
        public ICollection<ClientSecretValue> ClientSecrets { get; set; }
        public ICollection<ClientIdPRestrictionValue> IdentityProviderRestrictions { get; set; }
        public ICollection<ClientPostLogoutRedirectUriValue> PostLogoutRedirectUris { get; set; }
        public ICollection<ClientRedirectUriValue> RedirectUris { get; set; }
        public ICollection<ClientCorsOriginValue> AllowedCorsOrigins { get; set; }
        public ICollection<ClientCustomGrantTypeValue> AllowedCustomGrantTypes { get; set; }
        public ICollection<ClientScopeValue> AllowedScopes { get; set; }
    }
}