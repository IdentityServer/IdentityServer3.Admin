using System;
using Microsoft.Owin.Testing;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Net.Http;
using IdentityAdmin.Configuration;
using IdentityAdmin.Core;
using IdentityAdmin.Core.Client;
using Owin;

namespace Core.Tests.Api
{
    public class WebApiTestBase
    {
        protected FakeIdentityAdmin IdentityAdminImpl;
        protected TestServer Server;
        protected HttpClient Client;

        [TestInitialize]
        public void Init()
        {
            IdentityAdminImpl = new FakeIdentityAdmin();
            Server = TestServer.Create(adminApp =>
            {
                var factory = new IdentityAdminServiceFactory
                {
                    IdentityAdminService = new Registration<IIdentityAdminService>(IdentityAdminImpl.Object)
                };
                adminApp.UseIdentityAdmin(new IdentityAdminOptions(true)
                {
                    Factory = factory,
                });
            });
            Client = Server.HttpClient;
        }

        [TestCleanup]
        public void Cleanup()
        {
            Server.Dispose();
        }

        protected string Url(string path)
        {
            return "https://foo/" + path;
        }

        protected void ConfigureQueryClients(int number)
        {
            var clients = new ClientSummary[number];
            for (var i = 0; i < number; i++)
            {
                clients[i] = new ClientSummary { Subject = i.ToString() , ClientName = string.Format("name{0}", i) , ClientId = string.Format("id{0}", i)};
            }
            IdentityAdminImpl.SetupQueryClientsAsync(new QueryResult<ClientSummary> { Items = clients });
        }

        protected HttpResponseMessage Get(string path)
        {
            return Client.GetAsync(Url(path)).Result;
        }
        
        protected T Get<T>(string path)
        {
            var result = Get(path);
            Assert.IsTrue(result.IsSuccessStatusCode);
            return result.Content.ReadAsAsync<T>().Result;
        }

        protected HttpResponseMessage Post<T>(string path, T value)
        {
            return Client.PostAsJsonAsync(Url(path), value).Result;
        }
        
        protected HttpResponseMessage Put<T>(string path, T value)
        {
            return Client.PutAsJsonAsync(Url(path), value).Result;
        }

        protected HttpResponseMessage Delete(string path)
        {
            return Client.DeleteAsync(Url(path)).Result;
        }
    }
}
