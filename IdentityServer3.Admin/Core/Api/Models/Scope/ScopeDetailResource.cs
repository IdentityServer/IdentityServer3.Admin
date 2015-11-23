using System;
using System.Collections.Generic;
using System.Web.Http.Routing;
using IdentityAdmin.Core.Metadata;
using IdentityAdmin.Core.Scope;

namespace IdentityAdmin.Api.Models.Scope
{
    public class ScopeDetailResource
    {
        public ScopeDetailResource(ScopeDetail scope, UrlHelper url, IdentityAdminManagerMetadata idmAdminMeta)
        {
            if (scope == null) throw new ArgumentNullException("scope");
            if (url == null) throw new ArgumentNullException("url");
            if (idmAdminMeta == null) throw new ArgumentNullException("idmAdminMeta");

            Data = new ScopeDetailDataResource(scope, url, idmAdminMeta);

            var links = new Dictionary<string, string>();
            if (idmAdminMeta.ClientMetaData.SupportsDelete)
            {
                links["Delete"] = url.Link(Constants.RouteNames.DeleteScope, new { subject = scope.Subject });
            }
            Links = links;
        }

        public ScopeDetailDataResource Data { get; set; }
        public object Links { get; set; }
    }
}