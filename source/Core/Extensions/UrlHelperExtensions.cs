using System;
using System.Web.Http.Routing;

namespace IdentityAdmin.Extensions
{
    internal static class UrlHelperExtensions
    {
        public static string RelativeLink(this UrlHelper urlHelper, string routeName)
        {
            return urlHelper.RelativeLink(routeName, null);
        }

        public static string RelativeLink(this UrlHelper urlHelper, string routeName, object routeValues)
        {
            var absoluteUrl = urlHelper.Link(routeName, routeValues);
            var authority = urlHelper.Request.RequestUri.Authority;
            var authorityIndex = absoluteUrl.IndexOf(authority, StringComparison.Ordinal);
            var relativePath = absoluteUrl.Substring(authorityIndex + authority.Length, absoluteUrl.Length - authorityIndex - authority.Length);
            return relativePath;
        }
    }
}
