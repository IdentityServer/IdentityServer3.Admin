using System;
using System.Collections.Generic;
using System.Web.Http.Routing;
using IdentityAdmin.Core;
using IdentityAdmin.Core.Scope;

namespace IdentityAdmin.Api.Models.Scope
{
    public class ScopeQueryResultResourceData : QueryResult<ScopeSummary>
    {
        static ScopeQueryResultResourceData()
        {
            AutoMapper.Mapper.CreateMap<QueryResult<ScopeSummary>, ScopeQueryResultResourceData>()
                .ForMember(x => x.Items, opts => opts.MapFrom(x => x.Items));
            AutoMapper.Mapper.CreateMap<ScopeSummary, ScopeResultResource>()
                .ForMember(x => x.Data, opts => opts.MapFrom(x => x));
        }

        public ScopeQueryResultResourceData(QueryResult<ScopeSummary> result, UrlHelper url, ScopeMetaData meta)
        {
            if (result == null) throw new ArgumentNullException("result");
            if (url == null) throw new ArgumentNullException("url");
            if (meta == null) throw new ArgumentNullException("meta");

            AutoMapper.Mapper.Map(result, this);

            foreach (var scope in this.Items)
            {
                var links = new Dictionary<string, string> { {"detail", url.Link(Constants.RouteNames.GetScope, new { subject = scope.Data.Subject })}
                };
                if (meta.SupportsDelete)
                {
                    links.Add("delete", url.Link(Constants.RouteNames.DeleteScope, new { subject = scope.Data.Subject }));
                }
                scope.Links = links;
            }
        }

        public new IEnumerable<ScopeResultResource> Items { get; set; }
    }
}