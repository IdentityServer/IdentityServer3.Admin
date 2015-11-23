using System.ComponentModel.DataAnnotations;

namespace IdentityAdmin.Core.Client
{
    public class ClientCustomGrantTypeValue : BaseClientValue
    {
        [Required]
        public string GrantType { get; set; }
    }
}