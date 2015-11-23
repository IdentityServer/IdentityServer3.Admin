using System;
using System.Collections.Generic;
using System.Web.Http.Routing;
using IdentityAdmin.Core;
using IdentityAdmin.Core.Client;

namespace IdentityAdmin.Api.Models.Client
{
    public class ClientQueryResultResource
    {
        public ClientQueryResultResource(QueryResult<ClientSummary> result, UrlHelper url, ClientMetaData meta)
        {
            if (result == null) throw new ArgumentNullException("result");
            if (url == null) throw new ArgumentNullException("url");
            if (meta == null) throw new ArgumentNullException("meta");

            Data = new ClientQueryResultResourceData(result, url, meta);
            
            var links = new Dictionary<string, object>();
            if (meta.SupportsCreate)
            {
                links["create"] = new CreateClientLink(url, meta);
            };
            Links = links;
        }

        public ClientQueryResultResourceData Data { get; set; }
        public object Links { get; set; }
    }
}

