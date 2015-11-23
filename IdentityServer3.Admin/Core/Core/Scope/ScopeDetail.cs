using System.Collections.Generic;

namespace IdentityAdmin.Core.Scope
{
    public class ScopeDetail : ScopeSummary
    {
        public IEnumerable<PropertyValue> Properties { get; set; }
        public IEnumerable<ScopeClaimValue> ScopeClaimValues { get; set; }
    }
}