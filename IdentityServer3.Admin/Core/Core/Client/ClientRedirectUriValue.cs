using System.ComponentModel.DataAnnotations;

namespace IdentityAdmin.Core.Client
{
    public class ClientRedirectUriValue : BaseClientValue
    {
        [Required]
        public string Uri { get; set; }
    }
}