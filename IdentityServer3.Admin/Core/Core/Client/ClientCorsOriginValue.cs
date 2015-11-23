using System.ComponentModel.DataAnnotations;

namespace IdentityAdmin.Core.Client
{
    public class ClientCorsOriginValue : BaseClientValue
    {
        [Required]
        public string Origin { get; set; }
    }
}