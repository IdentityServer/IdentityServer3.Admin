using System;
using System.Collections.Generic;
using System.Web.Http.Routing;
using IdentityAdmin.Core;
using IdentityAdmin.Core.Scope;

namespace IdentityAdmin.Api.Models.Scope
{
    public class ScopeQueryResultResource
    {
        public ScopeQueryResultResource(QueryResult<ScopeSummary> result, UrlHelper url, ScopeMetaData meta)
        {
            if (result == null) throw new ArgumentNullException("result");
            if (url == null) throw new ArgumentNullException("url");
            if (meta == null) throw new ArgumentNullException("meta");

            Data = new ScopeQueryResultResourceData(result, url, meta);

            var links = new Dictionary<string, object>();
            if (meta.SupportsCreate)
            {
                links["create"] = new CreateScopeLink(url, meta);
            };
            Links = links;
        }

        public ScopeQueryResultResourceData Data { get; set; }
        public object Links { get; set; }
    }
}
