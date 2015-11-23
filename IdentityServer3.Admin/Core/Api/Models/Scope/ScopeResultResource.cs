using IdentityAdmin.Core.Scope;

namespace IdentityAdmin.Api.Models.Scope
{
    public class ScopeResultResource
    {
        public ScopeSummary Data { get; set; }
        public object Links { get; set; }
    }
}