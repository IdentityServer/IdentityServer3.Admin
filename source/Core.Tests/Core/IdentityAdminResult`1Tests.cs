using System;
using System.Linq;
using IdentityAdmin.Core;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace Core.Tests.Core
{
    [TestClass]
    public class IdentityAdminTestResults
    {
        public class FooResult{}

        IdentityAdminResult<FooResult> _subject;

        [TestMethod]
        public void ctor_WithResult_HasResult()
        {
            var r = new FooResult();
            _subject = new IdentityAdminResult<FooResult>(r);
            Assert.AreSame(r, _subject.Result);
        }

        [TestMethod]
        public void ctor_WithErrors_HasNoResult()
        {
            _subject = new IdentityAdminResult<FooResult>("error");
            Assert.IsNull(_subject.Result);
        }
    }
}
