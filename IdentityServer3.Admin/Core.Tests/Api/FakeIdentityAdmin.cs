using Moq;
using System;
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
            this.SetupGetMetadataAsync(new IdentityAdminMetadata());
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



        //public void SetupCreateClientAsync(CreateResult result)
        //{
        //    Setup(x => x.CreateClientAsync(It.IsAny<string>(), It.IsAny<string>(), It.IsAny<IEnumerable<ClientClaim>>()))
        //       .Returns(Task.FromResult(new IdentityAdminResult<CreateResult>(result)));
        //}
        //public void SetupCreateClientAsync(params string[] errors)
        //{
        //    Setup(x => x.CreateClientAsync(It.IsAny<string>(), It.IsAny<string>(), It.IsAny<IEnumerable<ClientClaim>>()))
        //       .Returns(Task.FromResult(new IdentityAdminResult<CreateResult>(errors)));
        //}
        //public void SetupCreateClientAsync(Exception ex)
        //{
        //    Setup(x => x.CreateClientAsync(It.IsAny<string>(), It.IsAny<string>(), It.IsAny<IEnumerable<ClientClaim>>()))
        //        .Throws(ex);
        //}
        //public void VerifyCreateClientAsync(string Clientname, string password)
        //{
        //    Verify(x => x.CreateClientAsync(Clientname, password, null));
        //}
        //public void VerifyCreateClientAsyncNotCalled()
        //{
        //    Verify(x => x.CreateClientAsync(It.IsAny<string>(), It.IsAny<string>(), It.IsAny<IEnumerable<ClientClaim>>()), Times.Never());
        //}

        
        internal void VerifyGetClientAsync(string subject)
        {
            Verify(x => x.GetClientAsync(subject));
        }
        internal void SetupGetClientAsync(ClientDetail ClientResult)
        {
            Setup(x => x.GetClientAsync(It.IsAny<string>()))
                .Returns(Task.FromResult(new IdentityAdminResult<ClientDetail>(ClientResult)));
        }
        internal void SetupGetClientAsync(params string[] errors)
        {
            Setup(x => x.GetClientAsync(It.IsAny<string>()))
                .Returns(Task.FromResult(new IdentityAdminResult<ClientDetail>(errors)));
        }
        public void SetupGetClientAsync(Exception ex)
        {
            Setup(x => x.GetClientAsync(It.IsAny<string>()))
                .Throws(ex);
        }

        
        internal void VerifyDeleteClientAsync(string subject)
        {
            Verify(x => x.DeleteClientAsync(subject));
        }
        internal void SetupDeleteClientAsync(params string[] errors)
        {
            Setup(x => x.DeleteClientAsync(It.IsAny<string>()))
                .Returns(Task.FromResult(new IdentityAdminResult(errors)));
        }
        public void SetupDeleteClientAsync(Exception ex)
        {
            Setup(x => x.DeleteClientAsync(It.IsAny<string>()))
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
        //        .Returns(Task.FromResult(new IdentityAdminResult(errors)));
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
        //        .Returns(Task.FromResult(new IdentityAdminResult(errors)));
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
        //        .Returns(Task.FromResult(new IdentityAdminResult(errors)));
        //}
        //public void SetupSetPhoneAsync(Exception ex)
        //{
        //    Setup(x => x.SetPhoneAsync(It.IsAny<string>(), It.IsAny<string>()))
        //        .Throws(ex);
        //}

        internal void VerifyAddClaimAsync(string subject, string type, string value)
        {
            Verify(x => x.AddClientClaimAsync(subject, type, value));
        }
        internal void VerifyAddClaimAsyncNotCalled()
        {
            Verify(x => x.AddClientClaimAsync(It.IsAny<string>(), It.IsAny<string>(), It.IsAny<string>()), Times.Never());
        }
        internal void SetupAddClaimAsync(params string[] errors)
        {
            Setup(x => x.AddClientClaimAsync(It.IsAny<string>(), It.IsAny<string>(), It.IsAny<string>()))
                .Returns(Task.FromResult(new IdentityAdminResult(errors)));
        }
        public void SetupAddClaimAsync(Exception ex)
        {
            Setup(x => x.AddClientClaimAsync(It.IsAny<string>(), It.IsAny<string>(), It.IsAny<string>()))
                .Throws(ex);
        }

        internal void VerifyRemoveClaimAsync(string subject, string id)
        {
            Verify(x => x.RemoveClientClaimAsync(subject, id));
        }
        internal void VerifyRemoveClaimAsyncNotCalled()
        {
            Verify(x => x.RemoveClientClaimAsync(It.IsAny<string>(), It.IsAny<string>()), Times.Never());
        }
        internal void SetupRemoveClaimAsync(params string[] errors)
        {
            Setup(x => x.RemoveClientClaimAsync(It.IsAny<string>(), It.IsAny<string>()))
                .Returns(Task.FromResult(new IdentityAdminResult(errors)));
        }
        public void SetupRemoveClaimAsync(Exception ex)
        {
            Setup(x => x.RemoveClientClaimAsync(It.IsAny<string>(), It.IsAny<string>()))
                .Throws(ex);
        }
         

        internal void GetMetadataAsync()
        {
            this.Verify(x => x.GetMetadataAsync());
        }
        internal void SetupGetMetadataAsync(IdentityAdminMetadata data)
        {
             this.Setup(x => x.GetMetadataAsync())
                .Returns(Task.FromResult(data));
        }
    }
}
