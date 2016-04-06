using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using IdentityAdmin.Core.Client;
using IdentityAdmin.Core.Metadata;
using IdentityAdmin.Core.Scope;

namespace IdentityAdmin.Core
{
    public interface IIdentityAdminService
    {
        Task<IdentityAdminMetadata> GetMetadataAsync();
        Task<IdentityAdminResult<ScopeDetail>> GetScopeAsync(string subject);
        Task<IdentityAdminResult<QueryResult<ScopeSummary>>> QueryScopesAsync(string filter, int start, int count);
        Task<IdentityAdminResult<CreateResult>> CreateScopeAsync(IEnumerable<PropertyValue> properties);
        Task<IdentityAdminResult> SetScopePropertyAsync(string subject, string type, string value);
        Task<IdentityAdminResult> DeleteScopeAsync(string subject);
        Task<IdentityAdminResult> AddScopeSecretAsync(string subject, string type, string value, string description, DateTime? expiration);
        Task<IdentityAdminResult> UpdateScopeSecret(string subject, string scopeSecretSubject, string type, string value, string description, DateTime? expiration);
        Task<IdentityAdminResult> RemoveScopeSecretAsync(string subject, string id);
        Task<IdentityAdminResult> AddScopeClaimAsync(string subject, string name, string description,bool alwaysIncludeInIdToken);
        Task<IdentityAdminResult> RemoveScopeClaimAsync(string subject, string id);
        Task<IdentityAdminResult> UpdateScopeClaim(string subject, string scopeClaimSubject, string name,string description, bool alwaysIncludeInIdToken);
        Task<IdentityAdminResult<ClientDetail>> GetClientAsync(string subject);       
        Task<IdentityAdminResult> DeleteClientAsync(string subject);
        Task<IdentityAdminResult> AddClientClaimAsync(string subject, string type, string value);
        Task<IdentityAdminResult> RemoveClientClaimAsync(string subject, string id);
        Task<IdentityAdminResult> AddClientSecretAsync(string subject, string type, string value);
        Task<IdentityAdminResult> RemoveClientSecretAsync(string subject, string id);
        Task<IdentityAdminResult> AddClientIdPRestrictionAsync(string subject, string provider);
        Task<IdentityAdminResult> RemoveClientIdPRestrictionAsync(string subject, string id);
        Task<IdentityAdminResult> AddPostLogoutRedirectUriAsync(string subject, string uri);
        Task<IdentityAdminResult> RemovePostLogoutRedirectUriAsync(string subject, string id);
        Task<IdentityAdminResult> AddClientRedirectUriAsync(string subject, string uri);
        Task<IdentityAdminResult> RemoveClientRedirectUriAsync(string subject, string id);
        Task<IdentityAdminResult> AddClientCorsOriginAsync(string subject, string origin);
        Task<IdentityAdminResult> RemoveClientCorsOriginAsync(string subject, string id);
        Task<IdentityAdminResult> AddClientCustomGrantTypeAsync(string subject, string grantType);
        Task<IdentityAdminResult> RemoveClientCustomGrantTypeAsync(string subject, string id);
        Task<IdentityAdminResult> AddClientScopeAsync(string subject, string scope);
        Task<IdentityAdminResult> RemoveClientScopeAsync(string subject, string id);
        Task<IdentityAdminResult<QueryResult<ClientSummary>>> QueryClientsAsync(string filter, int start, int count);
        Task<IdentityAdminResult<CreateResult>> CreateClientAsync(IEnumerable<PropertyValue> properties);
        Task<IdentityAdminResult> SetClientPropertyAsync(string subject, string type, string value);
    }
}