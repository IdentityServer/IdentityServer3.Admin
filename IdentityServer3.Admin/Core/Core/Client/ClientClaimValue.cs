using System.ComponentModel.DataAnnotations;

namespace IdentityAdmin.Core.Client
{
    public class ClientClaimValue: BaseClientValue
    {
        [Required]
        public string Type { get; set; }
        [Required]
        public string Value { get; set; }
    }
}
