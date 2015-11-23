using System.ComponentModel.DataAnnotations;

namespace IdentityAdmin.Core.Client
{
    public class ClientScopeValue : BaseClientValue
    {
        [Required]
        public string Scope { get; set; }
    }
}