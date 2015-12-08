using Moq;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using IdentityAdmin.Core;
using IdentityAdmin.Core.Client;
using IdentityAdmin.Core.Metadata;
using IdentityAdmin.Core.Scope;


namespace Core.Tests.Api
{
    public class FakeIdentityAdmin : Mock<IIdentityAdminService>
    {
        public FakeIdentityAdmin()
        {
            SetReturnsDefault(Task.FromResult(new IdentityAdminResult()));
            SetReturnsDefault(Task.FromResult(new IdentityAdminResult<QueryResult<ClientSummary>>(new QueryResult<ClientSummary>())));
            SetReturnsDefault(Task.FromResult(new IdentityAdminResult<CreateResult>(new CreateResult())));
            SetReturnsDefault(Task.FromResult(new IdentityAdminResult<ClientSummary>(new ClientSummary())));

            SetupGetMetadataAsync(new IdentityAdminMetadata
            {
                ClientMetaData = new ClientMetaData
                {
                    SupportsCreate = true,
                    SupportsDelete = true,
                    CreateProperties = new List<PropertyMetadata>
                    {
                        new PropertyMetadata
                        {
                            Type = "ClientId",
                            Name = "ClientId",  
                            DataType = PropertyDataType.String,
                            Required =  true
                        },new PropertyMetadata
                        {
                            Type = "ClientName",
                            Name = "ClientName",  
                            DataType = PropertyDataType.String,
                            Required =  true
                        }
                    }

                },
                ScopeMetaData = new ScopeMetaData
                {
                    SupportsDelete =  true,
                    SupportsCreate = true,
                    CreateProperties = new List<PropertyMetadata>
                    {
                        new PropertyMetadata
                        {
                            Type = "Name",
                            Name = "Name",  
                            DataType = PropertyDataType.String,
                            Required =  true
                        }
                    }
                }
            });
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
        
        public void SetupCreateClientAsync(CreateResult result)
        {
            Setup(x => x.CreateClientAsync(It.IsAny<IEnumerable<PropertyValue>>()))
               .Returns(Task.FromResult(new IdentityAdminResult<CreateResult>(result)));
        }
   
        public void SetupCreateClientAsync(params string[] errors)
        {
            Setup(x => x.CreateClientAsync(It.IsAny<IEnumerable<PropertyValue>>()))
               .Returns(Task.FromResult(new IdentityAdminResult<CreateResult>(errors)));
        }
        public void SetupCreateClientAsync(Exception ex)
        {
            Setup(x => x.CreateClientAsync(It.IsAny<IEnumerable<PropertyValue>>())).Throws(ex);
        }
        public void VerifyCreateClientAsync()
        {
            Verify(x => x.CreateClientAsync(It.IsAny<IEnumerable<PropertyValue>>()));
        }
        public void VerifyCreateClientAsyncNotCalled()
        {
            Verify(x => x.CreateClientAsync(It.IsAny<IEnumerable<PropertyValue>>()), Times.Never());
        }

        
        internal void VerifyGetClientAsync(string subject)
        {
            Verify(x => x.GetClientAsync(subject));
        }
        internal void SetupGetClientAsync(ClientDetail clientResult)
        {
            Setup(x => x.GetClientAsync(It.IsAny<string>()))
                .Returns(Task.FromResult(new IdentityAdminResult<ClientDetail>(clientResult)));
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
            Setup(x => x.AddClientClaimAsync(It.IsAny<string>(), It.IsAny<string>(), It.IsAny<string>())).Throws(ex);
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
            Verify(x => x.GetMetadataAsync());
        }
        internal void SetupGetMetadataAsync(IdentityAdminMetadata data)
        {
             Setup(x => x.GetMetadataAsync())
                .Returns(Task.FromResult(data));
        }
    }
}
