using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http;
using IdentityAdmin.Api.Models;
using IdentityAdmin.Core;
using IdentityAdmin.Core.Client;
using IdentityAdmin.Resources;

namespace Core.Tests.Api
{
    [TestClass]
    public class ClientControllerTests : WebApiTestBase
    {
        [TestMethod]
        public void GetClientsAsync_NoParams_CallsIdentityManager()
        {
            Get("api/Clients");
            IdentityAdminImpl.VerifyQueryClientsAsync();
        }
        [TestMethod]
        public void GetClientsAsync_WithParams_PassesParamsToIdentityManager()
        {
            Get("api/Clients?filter=foo&start=7&count=25");
            IdentityAdminImpl.VerifyQueryClientsAsync("foo", 7, 25);
        }
        [TestMethod]
        public void GetClientsAsync_SuccessfulResult_ReturnsResults()
        {
            ConfigureQueryClients(53);
            var result = Get<QueryResult<ClientSummary>>("api/Clients");
            Assert.AreEqual(53, result.Items.Count());
        }        
        [TestMethod]
        public void GetClientsAsync_IdentityManagerFails_ReturnsErrors()
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
        public void GetClientsAsync_IdentityManagerThrows_ReturnsErrors()
        {
            IdentityAdminImpl.SetupQueryClientsAsync(new Exception("Boom"));
            var response = Get("api/Clients");
            Assert.AreEqual(HttpStatusCode.InternalServerError, response.StatusCode);
        }


        //[TestMethod]
        //public void CreateClientAsync_ValidModel_CallsIdentityManager()
        //{
        //    Post("api/Clients", new CreateClientModel() { Clientname = "Client", Password = "pass" });
        //    IdentityAdminImpl.VerifyCreateClientAsync("Client", "pass");
        //}
        //[TestMethod]
        //public void CreateClientAsync_IdentityManagerReturnsSuccess_CorrectResults()
        //{
        //    IdentityAdminImpl.SetupCreateClientAsync(new CreateResult { Subject = "123" });
        //    var response = Post("api/Clients", new CreateClientModel() { Clientname = "Client", Password = "pass" });
        //    Assert.AreEqual(HttpStatusCode.Created, response.StatusCode);
        //    Assert.AreEqual(Url("api/Clients/123"), response.Headers.Location.AbsoluteUri);
        //}
        //[TestMethod]
        //public void CreateClientAsync_InvalidModel_DoesNotCallIdentityManager()
        //{
        //    Post("api/Clients", new CreateClientModel() { Clientname = "", Password = "pass" });
        //    Post("api/Clients", new CreateClientModel() { Clientname = "Client", Password = "" });
        //    Post("api/Clients", (CreateClientModel)null);
        //    IdentityAdminImpl.VerifyCreateClientAsyncNotCalled();
        //}

        //[TestMethod]
        //public void CreateClientAsync_MissingModel_ReturnsError()
        //{
        //    var response = Post("api/Clients", (CreateClientModel)null);
        //    Assert.AreEqual(HttpStatusCode.BadRequest, response.StatusCode);
        //    var error = response.Content.ReadAsAsync<ErrorModel>().Result;
        //    CollectionAssert.Contains(error.Errors, Messages.ClientDataRequired);
        //}
        //[TestMethod]
        //public void CreateClientAsync_MissingClientname_ReturnsError()
        //{
        //    var response = Post("api/Clients", new CreateClientModel { Clientname = "", Password = "pass" });
        //    Assert.AreEqual(HttpStatusCode.BadRequest, response.StatusCode);
        //    var error = response.Content.ReadAsAsync<ErrorModel>().Result;
        //    CollectionAssert.Contains(error.Errors, Messages.ClientnameRequired);
        //}
        //[TestMethod]
        //public void CreateClientAsync_MissingPassword_ReturnsError()
        //{
        //    var response = Post("api/Clients", new CreateClientModel { Clientname = "Client", Password = "" });
        //    Assert.AreEqual(HttpStatusCode.BadRequest, response.StatusCode);
        //    var error = response.Content.ReadAsAsync<ErrorModel>().Result;
        //    CollectionAssert.Contains(error.Errors, Messages.PasswordRequired);
        //}
        //[TestMethod]
        //public void CreateClientAsync_IdentityManagerReturnsErrors_ReturnsErrors()
        //{
        //    IdentityAdminImpl.SetupCreateClientAsync("foo", "bar");
        //    var response = Post("api/Clients", new CreateClientModel() { Clientname="Client", Password="pass" });
        //    Assert.AreEqual(HttpStatusCode.BadRequest, response.StatusCode);
        //    var error = response.Content.ReadAsAsync<ErrorModel>().Result;
        //    Assert.AreEqual(2, error.Errors.Length);
        //    CollectionAssert.Contains(error.Errors, "foo");
        //    CollectionAssert.Contains(error.Errors, "bar");
        //}
        //[TestMethod]
        //public void CreateClientAsync_IdentityManagerThrows_ReturnsErrors()
        //{
        //    IdentityAdminImpl.SetupCreateClientAsync(new Exception("Boom"));
        //    var response = Post("api/Clients", new CreateClientModel() { Clientname = "Client", Password = "pass" });
        //    Assert.AreEqual(HttpStatusCode.InternalServerError, response.StatusCode);
        //}



        [TestMethod]
        public void GetClientAsync_CallsIdentityManager()
        {
            Get("api/Clients/123");
            IdentityAdminImpl.VerifyGetClientAsync("123");
        }
        [TestMethod]
        public void GetClientAsync_ClientFound_ReturnsClient()
        {
            IdentityAdminImpl.SetupGetClientAsync(new ClientDetail { Subject = "foo", ClientName = "Client" });
            var result = Get<ClientSummary>("api/Clients/123");
            Assert.AreEqual("foo", result.Subject);
            Assert.AreEqual("Client", result.ClientName);
        }
        [TestMethod]
        public void GetClientAsync_ClientNotFound_ReturnsNotFound()
        {
            IdentityAdminImpl.SetupGetClientAsync((ClientDetail)null);
            var resp = Get("api/Clients/123");
            Assert.AreEqual(HttpStatusCode.NotFound, resp.StatusCode);
        }
        [TestMethod]
        public void GetClientAsync_IdentityManagerReturnsErrors_ReturnsErrors()
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
        public void GetClientAsync_IdentityManagerThrows_ReturnsErrors()
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
        public void DeleteClientAsync_CallsIdentityManager()
        {
            Delete("api/Clients/123");
            IdentityAdminImpl.VerifyDeleteClientAsync("123");
        }
        [TestMethod]
        public void DeleteClientAsync_IdentityManagerReturnsSuccess_ReturnsNoContent()
        {
            var resp = Delete("api/Clients/123");
            Assert.AreEqual(HttpStatusCode.NoContent, resp.StatusCode);
        }
        [TestMethod]
        public void DeleteClientAsync_IdentityManagerReturnsError_ReturnsError()
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
        public void DeleteClientAsync_IdentityManagerThrows_ReturnsErrors()
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

        //[TestMethod]
        //public void SetPasswordAsync_CallsIdentityManager()
        //{
        //    Put("api/Clients/123/password", new PasswordModel { Value = "pass" });
        //    IdentityAdminImpl.VerifySetPasswordAsync("123", "pass");
        //}
        //[TestMethod]
        //public void SetPasswordAsync_IdentityManagerReturnsSuccess_ReturnsNoContent()
        //{
        //    var resp = Put("api/Clients/123/password", new PasswordModel { Value = "pass" });
        //    Assert.AreEqual(HttpStatusCode.NoContent, resp.StatusCode);
        //}
        //[TestMethod]
        //public void SetPasswordAsync_IdentityManagerReturnsError_ReturnsError()
        //{
        //    IdentityAdminImpl.SetupSetPasswordAsync("foo", "bar");
        //    var resp = Put("api/Clients/123/password", new PasswordModel { Value = "pass" });
        //    Assert.AreEqual(HttpStatusCode.BadRequest, resp.StatusCode);
        //    var error = resp.Content.ReadAsAsync<ErrorModel>().Result;
        //    Assert.AreEqual(2, error.Errors.Length);
        //    CollectionAssert.Contains(error.Errors, "foo");
        //    CollectionAssert.Contains(error.Errors, "bar");
        //}
        //[TestMethod]
        //public void SetPasswordAsync_IdentityManagerThrows_ReturnsErrors()
        //{
        //    IdentityAdminImpl.SetupSetPasswordAsync(new Exception("Boom"));
        //    var resp = Put("api/Clients/123/password", new PasswordModel { Value = "pass" });
        //    Assert.AreEqual(HttpStatusCode.InternalServerError, resp.StatusCode);
        //}
        //[TestMethod]
        //public void SetPasswordAsync_InvalidModel_DoesNotCallIdentityManager()
        //{
        //    Put("api/Clients/123/password", new PasswordModel { Value = "" });
        //    Put("api/Clients/ /password", new PasswordModel { Value = "pass" });
        //    Put("api/Clients/123/password", (PasswordModel)null);
        //    IdentityAdminImpl.VerifySetPasswordAsyncNotCalled();
        //}
        //[TestMethod]
        //public void SetPasswordAsync_MissingModel_ReturnsError()
        //{
        //    var resp = Put("api/Clients/123/password", (PasswordModel)null);
        //    Assert.AreEqual(HttpStatusCode.BadRequest, resp.StatusCode);
        //    var error = resp.Content.ReadAsAsync<ErrorModel>().Result;
        //    CollectionAssert.Contains(error.Errors, Messages.PasswordDataRequired);
        //}
        //[TestMethod]
        //public void SetPasswordAsync_MissingPassword_ReturnsError()
        //{
        //    var resp = Put("api/Clients/123/password", new PasswordModel { Value = "" });
        //    Assert.AreEqual(HttpStatusCode.BadRequest, resp.StatusCode);
        //    var error = resp.Content.ReadAsAsync<ErrorModel>().Result;
        //    CollectionAssert.Contains(error.Errors, Messages.PasswordRequired);
        //}
        //[TestMethod]
        //public void SetPasswordAsync_MissingSubject_ReturnsError()
        //{
        //    var resp = Put("api/Clients/ /password", new PasswordModel { Value = "pass" });
        //    Assert.AreEqual(HttpStatusCode.BadRequest, resp.StatusCode);
        //    var error = resp.Content.ReadAsAsync<ErrorModel>().Result;
        //    CollectionAssert.Contains(error.Errors, Messages.SubjectRequired);
        //}


        //[TestMethod]
        //public void SetEmailAsync_CallsIdentityManager()
        //{
        //    Put("api/Clients/123/email", new EmailModel { Value = "Client@test.com" });
        //    IdentityAdminImpl.VerifySetEmailAsync("123", "Client@test.com");
        //}
        //[TestMethod]
        //public void SetEmailAsync_IdentityManagerReturnsSuccess_ReturnsNoContent()
        //{
        //    var resp = Put("api/Clients/123/email", new EmailModel { Value = "Client@test.com" });
        //    Assert.AreEqual(HttpStatusCode.NoContent, resp.StatusCode);
        //}
        //[TestMethod]
        //public void SetEmailAsync_IdentityManagerReturnsError_ReturnsError()
        //{
        //    IdentityAdminImpl.SetupSetEmailAsync("foo", "bar");
        //    var resp = Put("api/Clients/123/email", new EmailModel { Value = "Client@test.com" });
        //    Assert.AreEqual(HttpStatusCode.BadRequest, resp.StatusCode);
        //    var error = resp.Content.ReadAsAsync<ErrorModel>().Result;
        //    Assert.AreEqual(2, error.Errors.Length);
        //    CollectionAssert.Contains(error.Errors, "foo");
        //    CollectionAssert.Contains(error.Errors, "bar");
        //}
        //[TestMethod]
        //public void SetEmailAsync_IdentityManagerThrows_ReturnsErrors()
        //{
        //    IdentityAdminImpl.SetupSetEmailAsync(new Exception("Boom"));
        //    var resp = Put("api/Clients/123/email", new EmailModel { Value = "Client@test.com" });
        //    Assert.AreEqual(HttpStatusCode.InternalServerError, resp.StatusCode);
        //}
        //[TestMethod]
        //public void SetEmailAsync_InvalidModel_DoesNotCallIdentityManager()
        //{
        //    Put("api/Clients/123/email", new EmailModel { Value = "" });
        //    Put("api/Clients/ /email", new EmailModel { Value = "Client@test.com" });
        //    Put("api/Clients/123/email", (EmailModel)null);
        //    IdentityAdminImpl.VerifySetEmailAsyncNotCalled();
        //}
        //[TestMethod]
        //public void SetEmailAsync_MissingModel_ReturnsError()
        //{
        //    var resp = Put("api/Clients/123/email", (EmailModel)null);
        //    Assert.AreEqual(HttpStatusCode.BadRequest, resp.StatusCode);
        //    var error = resp.Content.ReadAsAsync<ErrorModel>().Result;
        //    CollectionAssert.Contains(error.Errors, Messages.EmailDataRequired);
        //}
        //[TestMethod]
        //public void SetEmailAsync_MissingEmail_ReturnsError()
        //{
        //    var resp = Put("api/Clients/123/email", new EmailModel { Value = "" });
        //    Assert.AreEqual(HttpStatusCode.BadRequest, resp.StatusCode);
        //    var error = resp.Content.ReadAsAsync<ErrorModel>().Result;
        //    CollectionAssert.Contains(error.Errors, Messages.EmailRequired);
        //}
        //[TestMethod]
        //public void SetEmailAsync_InvalidEmail_ReturnsError()
        //{
        //    var resp = Put("api/Clients/123/email", new EmailModel { Value = "foo" });
        //    Assert.AreEqual(HttpStatusCode.BadRequest, resp.StatusCode);
        //    var error = resp.Content.ReadAsAsync<ErrorModel>().Result;
        //    CollectionAssert.Contains(error.Errors, Messages.InvalidEmail);
        //}
        //[TestMethod]
        //public void SetEmailAsync_MissingSubject_ReturnsError()
        //{
        //    var resp = Put("api/Clients/ /email", new EmailModel { Value = "Client@test.com" });
        //    Assert.AreEqual(HttpStatusCode.BadRequest, resp.StatusCode);
        //    var error = resp.Content.ReadAsAsync<ErrorModel>().Result;
        //    CollectionAssert.Contains(error.Errors, Messages.SubjectRequired);
        //}

        //[TestMethod]
        //public void SetPhoneAsync_CallsIdentityManager()
        //{
        //    Put("api/Clients/123/phone", new PhoneModel { Value = "555" });
        //    IdentityAdminImpl.VerifySetPhoneAsync("123", "555");
        //}
        //[TestMethod]
        //public void SetPhoneAsync_IdentityManagerReturnsSuccess_ReturnsNoContent()
        //{
        //    var resp = Put("api/Clients/123/phone", new PhoneModel { Value = "555" });
        //    Assert.AreEqual(HttpStatusCode.NoContent, resp.StatusCode);
        //}
        //[TestMethod]
        //public void SetPhoneAsync_IdentityManagerReturnsError_ReturnsError()
        //{
        //    IdentityAdminImpl.SetupSetPhoneAsync("foo", "bar");
        //    var resp = Put("api/Clients/123/phone", new PhoneModel { Value = "555" });
        //    Assert.AreEqual(HttpStatusCode.BadRequest, resp.StatusCode);
        //    var error = resp.Content.ReadAsAsync<ErrorModel>().Result;
        //    Assert.AreEqual(2, error.Errors.Length);
        //    CollectionAssert.Contains(error.Errors, "foo");
        //    CollectionAssert.Contains(error.Errors, "bar");
        //}
        //[TestMethod]
        //public void SetPhoneAsync_IdentityManagerThrows_ReturnsErrors()
        //{
        //    IdentityAdminImpl.SetupSetPhoneAsync(new Exception("Boom"));
        //    var resp = Put("api/Clients/123/phone", new PhoneModel { Value = "555" });
        //    Assert.AreEqual(HttpStatusCode.InternalServerError, resp.StatusCode);
        //}
        //[TestMethod]
        //public void SetPhoneAsync_InvalidModel_DoesNotCallIdentityManager()
        //{
        //    Put("api/Clients/123/phone", new PhoneModel { Value = "" });
        //    Put("api/Clients/ /phone", new PhoneModel { Value = "555" });
        //    Put("api/Clients/123/phone", (PhoneModel)null);
        //    IdentityAdminImpl.VerifySetPhoneAsyncNotCalled();
        //}
        //[TestMethod]
        //public void SetPhoneAsync_MissingModel_ReturnsError()
        //{
        //    var resp = Put("api/Clients/123/phone", (PhoneModel)null);
        //    Assert.AreEqual(HttpStatusCode.BadRequest, resp.StatusCode);
        //    var error = resp.Content.ReadAsAsync<ErrorModel>().Result;
        //    CollectionAssert.Contains(error.Errors, Messages.PhoneDataRequired);
        //}
        //[TestMethod]
        //public void SetPhoneAsync_MissingPhone_ReturnsError()
        //{
        //    var resp = Put("api/Clients/123/phone", new PhoneModel { Value = "" });
        //    Assert.AreEqual(HttpStatusCode.BadRequest, resp.StatusCode);
        //    var error = resp.Content.ReadAsAsync<ErrorModel>().Result;
        //    CollectionAssert.Contains(error.Errors, Messages.PhoneRequired);
        //}
        //[TestMethod]
        //public void SetPhoneAsync_MissingSubject_ReturnsError()
        //{
        //    var resp = Put("api/Clients/ /phone", new PhoneModel { Value = "555" });
        //    Assert.AreEqual(HttpStatusCode.BadRequest, resp.StatusCode);
        //    var error = resp.Content.ReadAsAsync<ErrorModel>().Result;
        //    CollectionAssert.Contains(error.Errors, Messages.SubjectRequired);
        //}


        [TestMethod]
        public void AddClaimAsync_CallsIdentityManager()
        {
            Post("api/Clients/123/claims", new ClientClaimValue { Type = "color", Value = "blue" });
            IdentityAdminImpl.VerifyAddClaimAsync("123", "color", "blue");
        }
        [TestMethod]
        public void AddClaimAsync_IdentityManagerReturnsSuccess_ReturnsNoContent()
        {
            var resp = Post("api/Clients/123/claims", new ClientClaimValue { Type = "color", Value = "blue" });
            Assert.AreEqual(HttpStatusCode.NoContent, resp.StatusCode);
        }
        [TestMethod]
        public void AddClaimAsync_IdentityManagerReturnsError_ReturnsError()
        {
            IdentityAdminImpl.SetupAddClaimAsync("foo", "bar");
            var resp = Post("api/Clients/123/claims", new ClientClaimValue { Type = "color", Value = "blue" });
            Assert.AreEqual(HttpStatusCode.BadRequest, resp.StatusCode);
            var error = resp.Content.ReadAsAsync<ErrorModel>().Result;
            Assert.AreEqual(2, error.Errors.Length);
            CollectionAssert.Contains(error.Errors, "foo");
            CollectionAssert.Contains(error.Errors, "bar");
        }
        [TestMethod]
        public void AddClaimAsync_IdentityManagerThrows_ReturnsErrors()
        {
            IdentityAdminImpl.SetupAddClaimAsync(new Exception("Boom"));
            var resp = Post("api/Clients/123/claims", new ClientClaimValue { Type = "color", Value = "blue" });
            Assert.AreEqual(HttpStatusCode.InternalServerError, resp.StatusCode);
        }
        [TestMethod]
        public void AddClaimAsync_InvalidModel_DoesNotCallIdentityManager()
        {
            Post("api/Clients/123/claims", new ClientClaimValue { Type = "", Value = "blue" });
            Post("api/Clients/123/claims", new ClientClaimValue { Type = "color", Value = "" });
            Post("api/Clients/ /claims", new ClientClaimValue { Type = "color", Value = "blue" });
            Post("api/Clients/123/claims", (ClientClaimValue)null);
            IdentityAdminImpl.VerifyAddClaimAsyncNotCalled();
        }
        [TestMethod]
        public void AddClaimAsync_MissingModel_ReturnsError()
        {
            var resp = Post("api/Clients/123/claims", (ClientClaimValue)null);
            Assert.AreEqual(HttpStatusCode.BadRequest, resp.StatusCode);
            var error = resp.Content.ReadAsAsync<ErrorModel>().Result;
            CollectionAssert.Contains(error.Errors, Messages.ClaimDataRequired);
        }
        [TestMethod]
        public void AddClaimAsync_MissingType_ReturnsError()
        {
            var resp = Post("api/Clients/123/claims", new ClientClaimValue { Type = "", Value = "blue" });
            Assert.AreEqual(HttpStatusCode.BadRequest, resp.StatusCode);
            var error = resp.Content.ReadAsAsync<ErrorModel>().Result;
            CollectionAssert.Contains(error.Errors, Messages.ClaimTypeRequired);
        }
        [TestMethod]
        public void AddClaimAsync_MissingValue_ReturnsError()
        {
            var resp = Post("api/Clients/123/claims", new ClientClaimValue { Type = "color", Value = "" });
            Assert.AreEqual(HttpStatusCode.BadRequest, resp.StatusCode);
            var error = resp.Content.ReadAsAsync<ErrorModel>().Result;
            CollectionAssert.Contains(error.Errors, Messages.ClaimValueRequired);
        }
        [TestMethod]
        public void AddClaimAsync_MissingSubject_ReturnsError()
        {
            var resp = Post("api/Clients/ /claims", new ClientClaimValue { Type = "color", Value = "blue" });
            Assert.AreEqual(HttpStatusCode.BadRequest, resp.StatusCode);
            var error = resp.Content.ReadAsAsync<ErrorModel>().Result;
            CollectionAssert.Contains(error.Errors, Messages.SubjectRequired);
        }

        [TestMethod]
        public void RemoveClaimAsync_CallsIdentityManager()
        {
            Delete("api/Clients/123/claims/color/blue");
            IdentityAdminImpl.VerifyRemoveClaimAsync("123", "123");
        }
        [TestMethod]
        public void RemoveClaimAsync_IdentityManagerReturnsSuccess_ReturnsNoContent()
        {
            var resp = Delete("api/Clients/123/claims/color/blue");
            Assert.AreEqual(HttpStatusCode.NoContent, resp.StatusCode);
        }
        [TestMethod]
        public void RemoveClaimAsync_IdentityManagerReturnsError_ReturnsError()
        {
            IdentityAdminImpl.SetupRemoveClaimAsync("foo", "bar");
            var resp = Delete("api/Clients/123/claims/color/blue");
            Assert.AreEqual(HttpStatusCode.BadRequest, resp.StatusCode);
            var error = resp.Content.ReadAsAsync<ErrorModel>().Result;
            Assert.AreEqual(2, error.Errors.Length);
            CollectionAssert.Contains(error.Errors, "foo");
            CollectionAssert.Contains(error.Errors, "bar");
        }
        [TestMethod]
        public void RemoveClaimAsync_IdentityManagerThrows_ReturnsErrors()
        {
            IdentityAdminImpl.SetupRemoveClaimAsync(new Exception("Boom"));
            var resp = Delete("api/Clients/123/claims/color/blue");
            Assert.AreEqual(HttpStatusCode.InternalServerError, resp.StatusCode);
        }
        [TestMethod]
        public void RemoveClaimAsync_InvalidModel_DoesNotCallIdentityManager()
        {
            Delete("api/Clients/ /claims/color/blue");
            Delete("api/Clients/123/claims/ /blue");
            Delete("api/Clients/123/claims/color/ ");
            IdentityAdminImpl.VerifyRemoveClaimAsyncNotCalled();
        }
        [TestMethod]
        public void RemoveClaimAsync_MissingType_ReturnsError()
        {
            var resp = Delete("api/Clients/123/claims/ /blue"); 
            Assert.AreEqual(HttpStatusCode.BadRequest, resp.StatusCode);
            var error = resp.Content.ReadAsAsync<ErrorModel>().Result;
            CollectionAssert.Contains(error.Errors, Messages.ClaimTypeRequired);
        }
        [TestMethod]
        public void RemoveClaimAsync_MissingValue_ReturnsError()
        {
            var resp = Delete("api/Clients/123/claims/color/ /");
            Assert.AreEqual(HttpStatusCode.BadRequest, resp.StatusCode);
            var error = resp.Content.ReadAsAsync<ErrorModel>().Result;
            CollectionAssert.Contains(error.Errors, Messages.ClaimValueRequired);
        }
        [TestMethod]
        public void RemoveClaimAsync_MissingSubject_ReturnsError()
        {
            var resp = Delete("api/Clients/ /claims/color/blue");
            Assert.AreEqual(HttpStatusCode.BadRequest, resp.StatusCode);
            var error = resp.Content.ReadAsAsync<ErrorModel>().Result;
            CollectionAssert.Contains(error.Errors, Messages.SubjectRequired);
        }
    }
}
