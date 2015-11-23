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