using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace Core.Tests.Api
{
    [TestClass]
    public class MetadataControllerTests : WebApiTestBase
    {
        [TestMethod]
        public void GetMetadata_CallsClientManager()
        {
            Get("api/metadata");
            IdentityAdminImpl.GetMetadataAsync();
        }
    }
}
