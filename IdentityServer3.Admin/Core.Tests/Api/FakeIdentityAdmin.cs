using Moq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using IdentityAdmin.Core;
using IdentityAdmin.Core.Client;
using IdentityAdmin.Core.Metadata;


namespace Core.Tests.Api
{
    public class FakeIdentityAdmin : Mock<IIdentityAdminService>
    {
        public FakeIdentityAdmin()
        {
            this.SetReturnsDefault(Task.FromResult(new IdentityAdminResult()));
            this.SetReturnsDefault(Task.FromResult(new IdentityAdminResult<QueryResult<ClientSummary>>(new QueryResult<ClientSummary>())));
            this.SetReturnsDefault(Task.FromResult(new IdentityAdminResult<CreateResult>(new CreateResult())));
            this.SetReturnsDefault(Task.FromResult(new IdentityAdminResult<ClientSummary>(new ClientSummary())));
            this.SetupGetMetadataAsync(new IdentityAdminManagerMetadata());
        }


        public void SetupQueryClientsAsync(QueryResult<ClientSummary> result)
        {
            Setup(x => x.QueryClientsAsync(It.IsAny<string>(), It.IsAny<int>(), It.IsAny<int>()))
                .Returns(Task.FromResult(new IdentityAdminResult<QueryResult<ClientSummary>>(result)));
        }
        public void SetupQueryClientsAsync(params string[] errors)
        {
            Setup(x => x.QueryClientsAsync(It.IsAny<string>(), It.IsAny<int>(), It.IsAny<int>()))
                .Returns(Task.FromResult(new IdentityAdminResult<QueryResult<ClientSummary>>(errors)));
        }
        public void SetupQueryClientsAsync(Exception ex)
        {
            Setup(x => x.QueryClientsAsync(It.IsAny<string>(), It.IsAny<int>(), It.IsAny<int>()))
                .Throws(ex);
        }
        public void VerifyQueryClientsAsync()
        {
            Verify(x=>x.QueryClientsAsync(It.IsAny<string>(), It.IsAny<int>(), It.IsAny<int>()));
        }
        public void VerifyQueryClientsAsync(string filter, int start, int count)
        {
            Verify(x=>x.QueryClientsAsync(filter, start, count));
        }



        //public void SetupCreateUserAsync(CreateResult result)
        //{
        //    Setup(x => x.CreateUserAsync(It.IsAny<string>(), It.IsAny<string>(), It.IsAny<IEnumerable<UserClaim>>()))
        //       .Returns(Task.FromResult(new IdentityManagerResult<CreateResult>(result)));
        //}
        //public void SetupCreateUserAsync(params string[] errors)
        //{
        //    Setup(x => x.CreateUserAsync(It.IsAny<string>(), It.IsAny<string>(), It.IsAny<IEnumerable<UserClaim>>()))
        //       .Returns(Task.FromResult(new IdentityManagerResult<CreateResult>(errors)));
        //}
        //public void SetupCreateUserAsync(Exception ex)
        //{
        //    Setup(x => x.CreateUserAsync(It.IsAny<string>(), It.IsAny<string>(), It.IsAny<IEnumerable<UserClaim>>()))
        //        .Throws(ex);
        //}
        //public void VerifyCreateUserAsync(string username, string password)
        //{
        //    Verify(x => x.CreateUserAsync(username, password, null));
        //}
        //public void VerifyCreateUserAsyncNotCalled()
        //{
        //    Verify(x => x.CreateUserAsync(It.IsAny<string>(), It.IsAny<string>(), It.IsAny<IEnumerable<UserClaim>>()), Times.Never());
        //}

        
        internal void VerifyGetUserAsync(string subject)
        {
            Verify(x => x.GetUserAsync(subject));
        }
        internal void SetupGetUserAsync(UserDetail userResult)
        {
            Setup(x => x.GetUserAsync(It.IsAny<string>()))
                .Returns(Task.FromResult(new IdentityManagerResult<UserDetail>(userResult)));
        }
        internal void SetupGetUserAsync(params string[] errors)
        {
            Setup(x => x.GetUserAsync(It.IsAny<string>()))
                .Returns(Task.FromResult(new IdentityManagerResult<UserDetail>(errors)));
        }
        public void SetupGetUserAsync(Exception ex)
        {
            Setup(x => x.GetUserAsync(It.IsAny<string>()))
                .Throws(ex);
        }

        
        internal void VerifyDeleteUserAsync(string subject)
        {
            Verify(x => x.DeleteUserAsync(subject));
        }
        internal void SetupDeleteUserAsync(params string[] errors)
        {
            Setup(x => x.DeleteUserAsync(It.IsAny<string>()))
                .Returns(Task.FromResult(new IdentityManagerResult(errors)));
        }
        public void SetupDeleteUserAsync(Exception ex)
        {
            Setup(x => x.DeleteUserAsync(It.IsAny<string>()))
                .Throws(ex);
        }


        //internal void VerifySetPasswordAsync(string subject, string password)
        //{
        //    Verify(x => x.SetPasswordAsync(subject, password));
        //}
        //internal void VerifySetPasswordAsyncNotCalled()
        //{
        //    Verify(x => x.SetPasswordAsync(It.IsAny<string>(), It.IsAny<string>()), Times.Never());
        //}
        //internal void SetupSetPasswordAsync(params string[] errors)
        //{
        //    Setup(x=>x.SetPasswordAsync(It.IsAny<string>(), It.IsAny<string>()))
        //        .Returns(Task.FromResult(new IdentityManagerResult(errors)));
        //}
        //public void SetupSetPasswordAsync(Exception ex)
        //{
        //    Setup(x => x.SetPasswordAsync(It.IsAny<string>(), It.IsAny<string>()))
        //        .Throws(ex);
        //}


        //internal void VerifySetEmailAsync(string subject, string email)
        //{
        //    Verify(x => x.SetEmailAsync(subject, email));
        //}
        //internal void VerifySetEmailAsyncNotCalled()
        //{
        //    Verify(x => x.SetEmailAsync(It.IsAny<string>(), It.IsAny<string>()), Times.Never());
        //}
        //internal void SetupSetEmailAsync(params string[] errors)
        //{
        //    Setup(x => x.SetEmailAsync(It.IsAny<string>(), It.IsAny<string>()))
        //        .Returns(Task.FromResult(new IdentityManagerResult(errors)));
        //}
        //public void SetupSetEmailAsync(Exception ex)
        //{
        //    Setup(x => x.SetEmailAsync(It.IsAny<string>(), It.IsAny<string>()))
        //        .Throws(ex);
        //}

        //internal void VerifySetPhoneAsync(string subject, string phone)
        //{
        //    Verify(x => x.SetPhoneAsync(subject, phone));
        //}
        //internal void VerifySetPhoneAsyncNotCalled()
        //{
        //    Verify(x => x.SetPhoneAsync(It.IsAny<string>(), It.IsAny<string>()), Times.Never());
        //}
        //internal void SetupSetPhoneAsync(params string[] errors)
        //{
        //    Setup(x => x.SetPhoneAsync(It.IsAny<string>(), It.IsAny<string>()))
        //        .Returns(Task.FromResult(new IdentityManagerResult(errors)));
        //}
        //public void SetupSetPhoneAsync(Exception ex)
        //{
        //    Setup(x => x.SetPhoneAsync(It.IsAny<string>(), It.IsAny<string>()))
        //        .Throws(ex);
        //}

        internal void VerifyAddClaimAsync(string subject, string type, string value)
        {
            Verify(x => x.AddUserClaimAsync(subject, type, value));
        }
        internal void VerifyAddClaimAsyncNotCalled()
        {
            Verify(x => x.AddUserClaimAsync(It.IsAny<string>(), It.IsAny<string>(), It.IsAny<string>()), Times.Never());
        }
        internal void SetupAddClaimAsync(params string[] errors)
        {
            Setup(x => x.AddUserClaimAsync(It.IsAny<string>(), It.IsAny<string>(), It.IsAny<string>()))
                .Returns(Task.FromResult(new IdentityManagerResult(errors)));
        }
        public void SetupAddClaimAsync(Exception ex)
        {
            Setup(x => x.AddUserClaimAsync(It.IsAny<string>(), It.IsAny<string>(), It.IsAny<string>()))
                .Throws(ex);
        }

        internal void VerifyRemoveClaimAsync(string subject, string type, string value)
        {
            Verify(x => x.RemoveUserClaimAsync(subject, type, value));
        }
        internal void VerifyRemoveClaimAsyncNotCalled()
        {
            Verify(x => x.RemoveUserClaimAsync(It.IsAny<string>(), It.IsAny<string>(), It.IsAny<string>()), Times.Never());
        }
        internal void SetupRemoveClaimAsync(params string[] errors)
        {
            Setup(x => x.RemoveUserClaimAsync(It.IsAny<string>(), It.IsAny<string>(), It.IsAny<string>()))
                .Returns(Task.FromResult(new IdentityManagerResult(errors)));
        }
        public void SetupRemoveClaimAsync(Exception ex)
        {
            Setup(x => x.RemoveUserClaimAsync(It.IsAny<string>(), It.IsAny<string>(), It.IsAny<string>()))
                .Throws(ex);
        }


        internal void GetMetadataAsync()
        {
            Verify(x => x.GetMetadataAsync());
        }
        internal void SetupGetMetadataAsync(IdentityAdminManagerMetadata data)
        {
            Setup(x => x.GetMetadataAsync())
                .Returns(Task.FromResult(data));
        }
    }
}
