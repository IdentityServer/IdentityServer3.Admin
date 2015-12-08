using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using IdentityAdmin.Api.Models;
using IdentityAdmin.Api.Models.Client;
using IdentityAdmin.Core;
using IdentityAdmin.Core.Client;
using IdentityAdmin.Resources;

namespace Core.Tests.Api
{
    [TestClass]
    public class ClientControllerTests : WebApiTestBase
    {
        [TestMethod]
        public void GetClientsAsync_NoParams_CallsIdentityAdmin()
        {
            Get("api/Clients");
            IdentityAdminImpl.VerifyQueryClientsAsync();
        }

        [TestMethod]
        public void GetClientsAsync_WithParams_PassesParamsToIdentityAdmin()
        {
            Get("api/Clients?filter=foo&start=7&count=25");
            IdentityAdminImpl.VerifyQueryClientsAsync("foo", 7, 25);
        }

        [TestMethod]
        public void GetClientsAsync_SuccessfulResult_ReturnsResults()
        {
            ConfigureQueryClients(53);
            var result = Get<ClientQueryResultResource>("api/Clients");
            Assert.AreEqual(53, result.Data.Items.Count());
        }        

        [TestMethod]
        public void GetClientsAsync_IdentityAdminFails_ReturnsErrors()
        {
            IdentityAdminImpl.SetupQueryClientsAsync("foo", "bar", "baz");

            var response = Get("api/Clients");

            Assert.AreEqual(HttpStatusCode.BadRequest, response.StatusCode);
            
            var error = response.Content.ReadAsAsync<ErrorModel>().Result;
            Assert.AreEqual(3, error.Errors.Length);
            CollectionAssert.Contains(error.Errors, "foo");
            CollectionAssert.Contains(error.Errors, "bar");
            CollectionAssert.Contains(error.Errors, "baz");
        }

        [TestMethod]
        public void GetClientsAsync_IdentityAdminThrows_ReturnsErrors()
        {
            IdentityAdminImpl.SetupQueryClientsAsync(new Exception("Boom"));
            var response = Get("api/Clients");
            Assert.AreEqual(HttpStatusCode.InternalServerError, response.StatusCode);
        }
        
        [TestMethod]
        public void CreateClientAsync_ValidModel_CallsIdentityAdmin()
        {
            IdentityAdminImpl.SetupCreateClientAsync(new CreateResult { Subject = "123" });
            var propertyValues = new List<PropertyValue>
            {
                new PropertyValue {Type = "ClientName", Value = "testName"},
                new PropertyValue {Type = "ClientId", Value = "testId"}
            };
            Post("api/Clients", propertyValues);
            IdentityAdminImpl.VerifyCreateClientAsync();
        }

        [TestMethod]
        public void CreateClientAsync_IdentityAdminReturnsSuccess_CorrectResults()
        {
            IdentityAdminImpl.SetupCreateClientAsync(new CreateResult { Subject = "123" });
            var propertyValues = new List<PropertyValue>
            {
                new PropertyValue {Type = "ClientName", Value = "testName"},
                new PropertyValue {Type = "ClientId", Value = "testId"}
            };
            var response = Post("api/Clients", propertyValues);
            Assert.AreEqual(HttpStatusCode.Created, response.StatusCode);
            Assert.AreEqual(Url("api/clients/123"), response.Headers.Location.AbsoluteUri);
        }

        [TestMethod]
        public void CreateClientAsync_InvalidModel_DoesNotCallIdentityAdmin()
        {
            var propertyValuesNoName = new List<PropertyValue>
            {
                new PropertyValue {Type = "ClientName", Value = ""},
                new PropertyValue {Type = "ClientId", Value = "testId"}
            };

            var propertyValuesNoId = new List<PropertyValue>
            {
                new PropertyValue {Type = "ClientName", Value = "testName"},
                new PropertyValue {Type = "ClientId", Value = ""}
            };
            Post("api/Clients", propertyValuesNoName);
            Post("api/Clients", propertyValuesNoId);
            Post("api/Clients", (IEnumerable<PropertyValue>)null);
            IdentityAdminImpl.VerifyCreateClientAsyncNotCalled();
        }

        [TestMethod]
        public void CreateClientAsync_MissingModel_ReturnsError()
        {
            var response = Post("api/Clients", (IEnumerable<PropertyValue>)null);
            Assert.AreEqual(HttpStatusCode.BadRequest, response.StatusCode);
            var error = response.Content.ReadAsAsync<ErrorModel>().Result;
            CollectionAssert.Contains(error.Errors, Messages.ClientDataRequired);
        }

        [TestMethod]
        public void CreateClientAsync_MissingClientname_ReturnsError()
        {
            var propertyValuesNoName = new List<PropertyValue>
            {
                new PropertyValue {Type = "ClientName", Value = ""},
                new PropertyValue {Type = "ClientId", Value = "testId"}
            };
            var response = Post("api/Clients", propertyValuesNoName);
            Assert.AreEqual(HttpStatusCode.BadRequest, response.StatusCode);
            var error = response.Content.ReadAsAsync<ErrorModel>().Result;
            CollectionAssert.Contains(error.Errors, string.Format("{0} is required.", "ClientName"));
        }

        [TestMethod]
        public void CreateClientAsync_IdentityAdminReturnsErrors_ReturnsErrors()
        {
            IdentityAdminImpl.SetupCreateClientAsync("foo", "bar");
                 var propertyValuesNoName = new List<PropertyValue>
            {
                new PropertyValue {Type = "ClientName", Value = "testName"},
                new PropertyValue {Type = "ClientId", Value = "testId"}
            };
            var response = Post("api/Clients",propertyValuesNoName);
            Assert.AreEqual(HttpStatusCode.BadRequest, response.StatusCode);
            var error = response.Content.ReadAsAsync<ErrorModel>().Result;
            Assert.AreEqual(2, error.Errors.Length);
            CollectionAssert.Contains(error.Errors, "foo");
            CollectionAssert.Contains(error.Errors, "bar");
        }

        [TestMethod]
        public void CreateClientAsync_IdentityAdminThrows_ReturnsErrors()
        {
            IdentityAdminImpl.SetupCreateClientAsync(new Exception("Boom"));
            var propertyValuesNoName = new List<PropertyValue>
            {
                new PropertyValue {Type = "ClientName", Value = "testName"},
                new PropertyValue {Type = "ClientId", Value = "testId"}
            };
            var response = Post("api/Clients", propertyValuesNoName);
            Assert.AreEqual(HttpStatusCode.InternalServerError, response.StatusCode);
        }
        
        [TestMethod]
        public void GetClientAsync_CallsIdentityAdmin()
        {
            Get("api/Clients/123");
            IdentityAdminImpl.VerifyGetClientAsync("123");
        }

        [TestMethod]
        public void GetClientAsync_ClientNotFound_ReturnsNotFound()
        {
            IdentityAdminImpl.SetupGetClientAsync((ClientDetail)null);
            var resp = Get("api/Clients/123");
            Assert.AreEqual(HttpStatusCode.NotFound, resp.StatusCode);
        }

        [TestMethod]
        public void GetClientAsync_IdentityAdminReturnsErrors_ReturnsErrors()
        {
            IdentityAdminImpl.SetupGetClientAsync("foo", "bar");
            var response = Get("api/Clients/123");
            Assert.AreEqual(HttpStatusCode.BadRequest, response.StatusCode);
            var error = response.Content.ReadAsAsync<ErrorModel>().Result;
            Assert.AreEqual(2, error.Errors.Length);
            CollectionAssert.Contains(error.Errors, "foo");
            CollectionAssert.Contains(error.Errors, "bar");
        }


        [TestMethod]
        public void GetClientAsync_IdentityAdminThrows_ReturnsErrors()
        {
            IdentityAdminImpl.SetupGetClientAsync(new Exception("Boom"));
            var response = Get("api/Clients/123");
            Assert.AreEqual(HttpStatusCode.InternalServerError, response.StatusCode);
        }

        [TestMethod]
        public void GetClient_MissingSubject_ReturnsError()
        {
            var resp = Get("api/Clients/ /");
            Assert.AreEqual(HttpStatusCode.BadRequest, resp.StatusCode);
            var error = resp.Content.ReadAsAsync<ErrorModel>().Result;
            CollectionAssert.Contains(error.Errors, Messages.SubjectRequired);
        }

        [TestMethod]
        public void DeleteClientAsync_CallsIdentityAdmin()
        {
            Delete("api/Clients/123");
            IdentityAdminImpl.VerifyDeleteClientAsync("123");
        }
        [TestMethod]
        public void DeleteClientAsync_IdentityAdminReturnsSuccess_ReturnsNoContent()
        {
            var resp = Delete("api/Clients/123");
            Assert.AreEqual(HttpStatusCode.NoContent, resp.StatusCode);
        }

        [TestMethod]
        public void DeleteClientAsync_IdentityAdminReturnsError_ReturnsError()
        {
            IdentityAdminImpl.SetupDeleteClientAsync("foo", "bar");
            var resp = Delete("api/Clients/123");
            Assert.AreEqual(HttpStatusCode.BadRequest, resp.StatusCode);
            var error = resp.Content.ReadAsAsync<ErrorModel>().Result;
            Assert.AreEqual(2, error.Errors.Length);
            CollectionAssert.Contains(error.Errors, "foo");
            CollectionAssert.Contains(error.Errors, "bar");
        }

        [TestMethod]
        public void DeleteClientAsync_IdentityAdminThrows_ReturnsErrors()
        {
            IdentityAdminImpl.SetupDeleteClientAsync(new Exception("Boom"));
            var response = Delete("api/Clients/123");
            Assert.AreEqual(HttpStatusCode.InternalServerError, response.StatusCode);
        }

        [TestMethod]
        public void DeleteClient_MissingSubject_ReturnsError()
        {
            var resp = Delete("api/Clients/ /");
            Assert.AreEqual(HttpStatusCode.BadRequest, resp.StatusCode);
            var error = resp.Content.ReadAsAsync<ErrorModel>().Result;
            CollectionAssert.Contains(error.Errors, Messages.SubjectRequired);
        }

       [TestMethod]
        public void AddClaimAsync_CallsIdentityAdmin()
        {
            Post("api/Clients/123/claim", new ClientClaimValue { Type = "color", Value = "blue" });
            IdentityAdminImpl.VerifyAddClaimAsync("123", "color", "blue");
        }
        [TestMethod]
        public void AddClaimAsync_IdentityAdminReturnsSuccess_ReturnsNoContent()
        {
            var resp = Post("api/Clients/123/claim", new ClientClaimValue { Type = "color", Value = "blue" });
            Assert.AreEqual(HttpStatusCode.NoContent, resp.StatusCode);
        }
        [TestMethod]
        public void AddClaimAsync_IdentityAdminReturnsError_ReturnsError()
        {
            IdentityAdminImpl.SetupAddClaimAsync("foo", "bar");
            var resp = Post("api/Clients/123/claim", new ClientClaimValue { Type = "color", Value = "blue" });
            Assert.AreEqual(HttpStatusCode.BadRequest, resp.StatusCode);
            var error = resp.Content.ReadAsAsync<ErrorModel>().Result;
            Assert.AreEqual(2, error.Errors.Length);
            CollectionAssert.Contains(error.Errors, "foo");
            CollectionAssert.Contains(error.Errors, "bar");
        }
        [TestMethod]
        public void AddClaimAsync_IdentityAdminThrows_ReturnsErrors()
        {
            IdentityAdminImpl.SetupAddClaimAsync(new Exception("Boom"));
            var resp = Post("api/Clients/123/claim", new ClientClaimValue { Type = "color", Value = "blue" });
            Assert.AreEqual(HttpStatusCode.InternalServerError, resp.StatusCode);
        }
        [TestMethod]
        public void AddClaimAsync_InvalidModel_DoesNotCallIdentityAdmin()
        {
            Post("api/Clients/123/claim", new ClientClaimValue { Type = "", Value = "blue" });
            Post("api/Clients/123/claim", new ClientClaimValue { Type = "color", Value = "" });
            Post("api/Clients/ /claim", new ClientClaimValue { Type = "color", Value = "blue" });
            Post("api/Clients/123/claim", (ClientClaimValue)null);
            IdentityAdminImpl.VerifyAddClaimAsyncNotCalled();
        }
        [TestMethod]
        public void AddClaimAsync_MissingModel_ReturnsError()
        {
            var resp = Post("api/Clients/123/claim", (ClientClaimValue)null);
            Assert.AreEqual(HttpStatusCode.BadRequest, resp.StatusCode);
            var error = resp.Content.ReadAsAsync<ErrorModel>().Result;
            CollectionAssert.Contains(error.Errors, Messages.ClaimDataRequired);
        }
        [TestMethod]
        public void AddClaimAsync_MissingType_ReturnsError()
        {
            var resp = Post("api/Clients/123/claim", new ClientClaimValue { Type = "", Value = "blue" });
            Assert.AreEqual(HttpStatusCode.BadRequest, resp.StatusCode);
            var error = resp.Content.ReadAsAsync<ErrorModel>().Result;
            CollectionAssert.Contains(error.Errors, "The Type field is required.");
        }

        [TestMethod]
        public void AddClaimAsync_MissingValue_ReturnsError()
        {
            var resp = Post("api/Clients/123/claim", new ClientClaimValue { Type = "color", Value = "" });
            Assert.AreEqual(HttpStatusCode.BadRequest, resp.StatusCode);
            var error = resp.Content.ReadAsAsync<ErrorModel>().Result;
            CollectionAssert.Contains(error.Errors, "The Value field is required.");
        }

        [TestMethod]
        public void AddClaimAsync_MissingSubject_ReturnsError()
        {
            var resp = Post("api/Clients/ /claim", new ClientClaimValue { Type = "color", Value = "blue" });
            Assert.AreEqual(HttpStatusCode.BadRequest, resp.StatusCode);
            var error = resp.Content.ReadAsAsync<ErrorModel>().Result;
            CollectionAssert.Contains(error.Errors, Messages.SubjectRequired);
        }

        [TestMethod]
        public void RemoveClaimAsync_CallsIdentityAdmin()
        {
            Delete("api/Clients/123/claim/123");
            IdentityAdminImpl.VerifyRemoveClaimAsync("123", "123");
        }

        [TestMethod]
        public void RemoveClaimAsync_IdentityAdminReturnsSuccess_ReturnsNoContent()
        {
            var resp = Delete("api/Clients/123/claim/123");
            Assert.AreEqual(HttpStatusCode.NoContent, resp.StatusCode);
        }

        [TestMethod]
        public void RemoveClaimAsync_IdentityAdminReturnsError_ReturnsError()
        {
            IdentityAdminImpl.SetupRemoveClaimAsync("foo", "bar");
            var resp = Delete("api/Clients/123/claim/123");
            Assert.AreEqual(HttpStatusCode.BadRequest, resp.StatusCode);
            var error = resp.Content.ReadAsAsync<ErrorModel>().Result;
            Assert.AreEqual(2, error.Errors.Length);
            CollectionAssert.Contains(error.Errors, "foo");
            CollectionAssert.Contains(error.Errors, "bar");
        }
        
        [TestMethod]
        public void RemoveClaimAsync_IdentityAdminThrows_ReturnsErrors()
        {
            IdentityAdminImpl.SetupRemoveClaimAsync(new Exception("Boom"));
            var resp = Delete("api/Clients/123/claim/123");
            Assert.AreEqual(HttpStatusCode.InternalServerError, resp.StatusCode);
        }

        [TestMethod]
        public void RemoveClaimAsync_InvalidModel_DoesNotCallIdentityAdmin()
        {
            Delete("api/Clients/ /claims/color/blue");
            Delete("api/Clients/123/claims/ /blue");
            Delete("api/Clients/123/claims/color/ ");
            IdentityAdminImpl.VerifyRemoveClaimAsyncNotCalled();
        }

       
        [TestMethod]
        public void RemoveClaimAsync_MissingSubject_ReturnsError()
        {
            var resp = Delete("api/Clients/ /claim/123");
            Assert.AreEqual(HttpStatusCode.BadRequest, resp.StatusCode);
            var error = resp.Content.ReadAsAsync<ErrorModel>().Result;
            CollectionAssert.Contains(error.Errors, Messages.SubjectRequired);
        }
    }
}
