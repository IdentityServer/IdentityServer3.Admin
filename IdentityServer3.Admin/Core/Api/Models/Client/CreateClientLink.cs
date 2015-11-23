using System.Collections.Generic;
using System.Web.Http.Routing;
using IdentityAdmin.Core.Client;

namespace IdentityAdmin.Api.Models.Client
{
    public class CreateClientLink : Dictionary<string, object>
    {
        public CreateClientLink(UrlHelper url, ClientMetaData clientMetaData)
        {
            this["href"] = url.Link(Constants.RouteNames.CreateClient, null);
            this["meta"] = clientMetaData.CreateProperties;
        }
    }
}