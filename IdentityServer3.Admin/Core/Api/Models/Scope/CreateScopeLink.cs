using System.Collections.Generic;
using System.Web.Http.Routing;
using IdentityAdmin.Core.Scope;

namespace IdentityAdmin.Api.Models.Scope
{
    public class CreateScopeLink : Dictionary<string, object>
    {
        public CreateScopeLink(UrlHelper url, ScopeMetaData scopeMetaData)
        {
            this["href"] = url.Link(Constants.RouteNames.CreateScope, null);
            this["meta"] = scopeMetaData.CreateProperties;
        }
    }
}