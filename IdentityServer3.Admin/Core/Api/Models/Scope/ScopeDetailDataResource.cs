using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http.Routing;
using IdentityAdmin.Core.Metadata;
using IdentityAdmin.Core.Scope;
using IdentityAdmin.Extensions;

namespace IdentityAdmin.Api.Models.Scope
{
    public class ScopeDetailDataResource : Dictionary<string, object>
    {
        public ScopeDetailDataResource(ScopeDetail scope, UrlHelper url, IdentityAdminManagerMetadata idmAdminMeta)
        {
            if (scope == null) throw new ArgumentNullException("scope");
            if (url == null) throw new ArgumentNullException("url");
            if (idmAdminMeta == null) throw new ArgumentNullException("idmAdminMeta");

            this["Name"] = scope.Name;
            this["Description"] = scope.Description;
            this["Subject"] = scope.Subject;

            if (scope.Properties != null)
            {
                var props =
                    from p in scope.Properties
                    let m =
                        (from m in idmAdminMeta.ScopeMetaData.UpdateProperties where m.Type == p.Type select m).SingleOrDefault
                            ()
                    where m != null
                    select new
                    {
                        Data = m.Convert(p.Value),
                        Meta = m,
                        Links = new
                        {
                            update = url.Link(Constants.RouteNames.UpdateScopProperty,
                                new
                                {
                                    subject = scope.Subject,
                                    type = p.Type.ToBase64UrlEncoded()
                                }
                                )
                        }
                    };

                if (props.Any())
                {
                    this["Properties"] = props.ToArray();
                }
            }

            #region Claims
            if (scope.ScopeClaimValues != null)
            {
                var claimValues =
                    from c in scope.ScopeClaimValues.ToArray()
                    select new
                    {
                        Data = c,
                        Links = new
                        {
                            delete = url.Link(Constants.RouteNames.RemoveScopeClaim, new
                            {
                                subject = scope.Subject,
                                id = c.Id
                            })
                        }
                    };

                this["Claims"] = new
                {
                    Data = claimValues.ToArray(),
                    Links = new
                    {
                        create = url.Link(Constants.RouteNames.AddScopeClaim, new { subject = scope.Subject })
                    }
                };
            }
            #endregion    
         
        }
    }
}