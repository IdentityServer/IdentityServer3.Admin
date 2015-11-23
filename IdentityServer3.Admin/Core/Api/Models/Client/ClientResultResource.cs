using IdentityAdmin.Core.Client;

namespace IdentityAdmin.Api.Models.Client
{
    public class ClientResultResource
    {
        public ClientSummary Data { get; set; }
        public object Links { get; set; }
    }
}