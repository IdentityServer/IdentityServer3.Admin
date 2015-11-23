using System.ComponentModel.DataAnnotations;

namespace IdentityAdmin.Core.Client
{
    public class ClientIdPRestrictionValue : BaseClientValue
    {
        [Required]
        public string Provider { get; set; }
    }
}