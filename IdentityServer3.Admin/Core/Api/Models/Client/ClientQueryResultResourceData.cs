using System;
using System.Collections.Generic;
using System.Web.Http.Routing;
using IdentityAdmin.Core;
using IdentityAdmin.Core.Client;

namespace IdentityAdmin.Api.Models.Client
{
    public class ClientQueryResultResourceData : QueryResult<ClientSummary>
    {
        static ClientQueryResultResourceData()
        {
            AutoMapper.Mapper.CreateMap<QueryResult<ClientSummary>, ClientQueryResultResourceData>()
                .ForMember(x => x.Items, opts => opts.MapFrom(x => x.Items));
            AutoMapper.Mapper.CreateMap<ClientSummary, ClientResultResource>()
                .ForMember(x => x.Data, opts => opts.MapFrom(x => x));
        }

        public ClientQueryResultResourceData(QueryResult<ClientSummary> result, UrlHelper url, ClientMetaData meta)
        {
            if (result == null) throw new ArgumentNullException("result");
            if (url == null) throw new ArgumentNullException("url");
            if (meta == null) throw new ArgumentNullException("meta");

            AutoMapper.Mapper.Map(result, this);

            foreach (var client in this.Items)
            {
                var links = new Dictionary<string, string> {
                    {"detail", url.Link(Constants.RouteNames.GetClient, new { subject = client.Data.Subject })}
                };
                if (meta.SupportsDelete)
                {
                    links.Add("delete", url.Link(Constants.RouteNames.DeleteClient, new { subject = client.Data.Subject }));
                }
                client.Links = links;
            }
        }

        public new IEnumerable<ClientResultResource> Items { get; set; }
    }
}