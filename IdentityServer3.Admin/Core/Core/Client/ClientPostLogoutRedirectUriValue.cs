using System.ComponentModel.DataAnnotations;

namespace IdentityAdmin.Core.Client
{
    public class ClientPostLogoutRedirectUriValue : BaseClientValue
    {
        [Required]
        public string Uri { get; set; }
    }
}