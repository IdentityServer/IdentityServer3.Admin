using System.ComponentModel.DataAnnotations;

namespace IdentityAdmin.Core.Scope
{
    public class ScopeClaimValue: BaseScopeValue
    {
        [Required]
        public string Name { get; set; }
        public string Description { get; set; }
        public bool AlwaysIncludeInIdToken { get; set; }
    }
}
