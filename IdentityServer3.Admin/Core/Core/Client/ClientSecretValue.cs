using System.ComponentModel.DataAnnotations;

namespace IdentityAdmin.Core.Client
{
    public class ClientSecretValue : BaseClientValue
    {
        [Required]
        public string Type { get; set; }
        [Required]
        public virtual string Value { get; set; }
    }
}