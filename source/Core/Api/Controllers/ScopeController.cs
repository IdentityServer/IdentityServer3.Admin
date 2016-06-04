/*
 * Copyright 2014 Dominick Baier, Brock Allen, Bert Hoorne
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using IdentityAdmin.Api.Filters;
using IdentityAdmin.Api.Models.Scope;
using IdentityAdmin.Core;
using IdentityAdmin.Core.Metadata;
using IdentityAdmin.Core.Scope;
using IdentityAdmin.Extensions;
using IdentityAdmin.Resources;

namespace IdentityAdmin.Api.Controllers
{
    [RoutePrefix(Constants.ScopeRoutePrefix)]
    [NoCache]
    public class ScopeController : ApiController
    {
        readonly IIdentityAdminService _identityAdminService;

        public ScopeController(IIdentityAdminService identityAdminService)
        {
            if (identityAdminService == null) throw new ArgumentNullException("identityAdminService");
            _identityAdminService = identityAdminService;
        }

        public IHttpActionResult BadRequest<T>(T data)
        {
            return ResponseMessage(Request.CreateResponse(HttpStatusCode.BadRequest, data));
        }

        public IHttpActionResult NoContent()
        {
            return StatusCode(HttpStatusCode.NoContent);
        }

        public IHttpActionResult MethodNotAllowed()
        {
            return StatusCode(HttpStatusCode.MethodNotAllowed);
        }

        private IdentityAdminMetadata _adminMetadata;

        private async Task<IdentityAdminMetadata> GetCoreMetaDataAsync()
        {
            if (_adminMetadata == null)
            {
                _adminMetadata = await _identityAdminService.GetMetadataAsync();
                if (_adminMetadata == null) throw new InvalidOperationException("coreMetaData returned null");
                var scopeMetaData = _adminMetadata.ScopeMetaData;
                if (scopeMetaData == null) throw new InvalidOperationException("ScopeMetaData returned null");
                scopeMetaData.Validate();

                return _adminMetadata;
            }

            return _adminMetadata;
        }

        #region Scope

        [HttpGet, Route("", Name = Constants.RouteNames.GetScopes)]
        public async Task<IHttpActionResult> GetScopesAsync(string filter = null, int start = 0, int count = 100)
        {
            var result = await _identityAdminService.QueryScopesAsync(filter, start, count);
            if (result.IsSuccess)
            {
                var meta = await GetCoreMetaDataAsync();
                var resource = new ScopeQueryResultResource(result.Result, Url, meta.ScopeMetaData);
                return Ok(resource);
            }

            return BadRequest(result.ToError());
        }

        [HttpGet, Route("{subject}", Name = Constants.RouteNames.GetScope)]
        public async Task<IHttpActionResult> GetScopeAsync(string subject)
        {
            if (String.IsNullOrWhiteSpace(subject))
            {
                ModelState["subject.String"].Errors.Clear();
                ModelState.AddModelError("", Messages.SubjectRequired);
            }

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState.ToError());
            }

            var result = await _identityAdminService.GetScopeAsync(subject);
            if (result.IsSuccess)
            {
                if (result.Result == null)
                {
                    return NotFound();
                }

                var meta = await GetCoreMetaDataAsync();
                return Ok(new ScopeDetailResource(result.Result, Url, meta));
            }

            return BadRequest(result.ToError());
        }

        [HttpPost, Route("", Name = Constants.RouteNames.CreateScope)]
        public async Task<IHttpActionResult> CreateScopeAsync(PropertyValue[] properties)
        {
            var coreMetadata = await GetCoreMetaDataAsync();
            if (!coreMetadata.ClientMetaData.SupportsCreate)
            {
                return MethodNotAllowed();
            }

            var errors = ValidateCreateProperties(coreMetadata.ScopeMetaData, properties);
            foreach (var error in errors)
            {
                ModelState.AddModelError("", error);
            }

            if (ModelState.IsValid)
            {
                var result = await _identityAdminService.CreateScopeAsync(properties);
                if (result.IsSuccess)
                {
                    var url = Url.RelativeLink(Constants.RouteNames.GetScope, new {subject = result.Result.Subject});
                    var resource = new
                    {
                        Data = new {subject = result.Result.Subject},
                        Links = new {detail = url}
                    };
                    return Created(url, resource);
                }

                ModelState.AddErrors(result);
            }

            return BadRequest(ModelState.ToError());
        }

        [HttpDelete, Route("{subject}", Name = Constants.RouteNames.DeleteScope)]
        public async Task<IHttpActionResult> DeleteScopeAsync(string subject)
        {
            var meta = await GetCoreMetaDataAsync();
            if (!meta.ScopeMetaData.SupportsDelete)
            {
                return MethodNotAllowed();
            }

            if (String.IsNullOrWhiteSpace(subject))
            {
                ModelState["subject.String"].Errors.Clear();
                ModelState.AddModelError("", Messages.SubjectRequired);
            }

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState.ToError());
            }

            var result = await _identityAdminService.DeleteScopeAsync(subject);
            if (result.IsSuccess)
            {
                return NoContent();
            }

            return BadRequest(result.ToError());
        }

        [HttpPut, Route("{subject}/properties/{type}", Name = Constants.RouteNames.UpdateScopeProperty)]
        public async Task<IHttpActionResult> SetPropertyAsync(string subject, string type)
        {
            if (String.IsNullOrWhiteSpace(subject))
            {
                ModelState["subject.String"].Errors.Clear();
                ModelState.AddModelError("", Messages.SubjectRequired);
            }

            type = type.FromBase64UrlEncoded();

            string value = await Request.Content.ReadAsStringAsync();
            var meta = await GetCoreMetaDataAsync();
            ValidateUpdateProperty(meta.ScopeMetaData, type, value);

            if (ModelState.IsValid)
            {
                var result = await _identityAdminService.SetScopePropertyAsync(subject, type, value);
                if (result.IsSuccess)
                {
                    return NoContent();
                }

                ModelState.AddErrors(result);
            }

            return BadRequest(ModelState.ToError());
        }

        #region ScopeClaim

        [HttpPost, Route("{subject}/claim", Name = Constants.RouteNames.AddScopeClaim)]
        public async Task<IHttpActionResult> AddScopeClaimAsync(string subject, ScopeClaimValue model)
        {
            if (String.IsNullOrWhiteSpace(subject))
            {
                ModelState["subject.String"].Errors.Clear();
                ModelState.AddModelError("", Messages.SubjectRequired);
            }

            if (model == null)
            {
                ModelState.AddModelError("", Messages.ClaimDataRequired);
            }

            if (ModelState.IsValid)
            {
                var result = await _identityAdminService.AddScopeClaimAsync(subject, model.Name, model.Description, model.AlwaysIncludeInIdToken);
                if (result.IsSuccess)
                {
                    return NoContent();
                }

                ModelState.AddErrors(result);
            }

            return BadRequest(ModelState.ToError());
        }

        [HttpDelete, Route("{subject}/claim/{id}", Name = Constants.RouteNames.RemoveScopeClaim)]
        public async Task<IHttpActionResult> RemoveClaimAsync(string subject, string id)
        {
            if (String.IsNullOrWhiteSpace(subject) ||
                String.IsNullOrWhiteSpace(id))
            {
                return NotFound();
            }

            var result = await _identityAdminService.RemoveScopeClaimAsync(subject, id);
            if (result.IsSuccess)
            {
                return NoContent();
            }

            return BadRequest(result.ToError());
        }

        [HttpPut, Route("{subject}/claim/{id}", Name = Constants.RouteNames.UpdateScopeClaim)]
        public async Task<IHttpActionResult> UpdateScopeClaim(string subject, ScopeClaimValue model)
        {
            if (String.IsNullOrWhiteSpace(subject))
            {
                ModelState["subject.String"].Errors.Clear();
                ModelState.AddModelError("", Messages.SubjectRequired);
            }

            if (model == null)
            {
                ModelState.AddModelError("", Messages.ScopeSecretNeeded);
            }

            if (ModelState.IsValid)
            {
                var result = await _identityAdminService.UpdateScopeClaim(subject, model.Id, model.Name, model.Description, model.AlwaysIncludeInIdToken);
                if (result.IsSuccess)
                {
                    return NoContent();
                }

                ModelState.AddErrors(result);
            }

            return BadRequest(ModelState.ToError());
        }
        #endregion

        #region ScopeSecret

        [HttpPost, Route("{subject}/secret", Name = Constants.RouteNames.AddScopeSecret)]
        public async Task<IHttpActionResult> AddScopeSecretAsync(string subject, ScopeSecretValue model)
        {
            if (String.IsNullOrWhiteSpace(subject))
            {
                ModelState["subject.String"].Errors.Clear();
                ModelState.AddModelError("", Messages.SubjectRequired);
            }

            if (model == null)
            {
                ModelState.AddModelError("", Messages.ScopeSecretNeeded);
            }

            if (ModelState.IsValid)
            {
                var result = await _identityAdminService.AddScopeSecretAsync(subject, model.Type, model.Value, model.Description, model.Expiration);
                if (result.IsSuccess)
                {
                    return NoContent();
                }

                ModelState.AddErrors(result);
            }

            return BadRequest(ModelState.ToError());
        }

        [HttpDelete, Route("{subject}/secret/{id}", Name = Constants.RouteNames.RemoveScopeSecret)]
        public async Task<IHttpActionResult> RemoveScopeSecretAsync(string subject, string id)
        {
            if (String.IsNullOrWhiteSpace(subject) ||
                String.IsNullOrWhiteSpace(id))
            {
                return NotFound();
            }

            var result = await _identityAdminService.RemoveScopeSecretAsync(subject, id);
            if (result.IsSuccess)
            {
                return NoContent();
            }

            return BadRequest(result.ToError());
        }

        [HttpPut, Route("{subject}/secret/{id}", Name = Constants.RouteNames.UpdateScopeSecret)]
        public async Task<IHttpActionResult> UpdateScopeSecret(string subject, ScopeSecretValue model)
        {
            if (String.IsNullOrWhiteSpace(subject))
            {
                ModelState["subject.String"].Errors.Clear();
                ModelState.AddModelError("", Messages.SubjectRequired);
            }

            if (model == null)
            {
                ModelState.AddModelError("", Messages.ScopeSecretNeeded);
            }

            if (ModelState.IsValid)
            {
                var result = await _identityAdminService.UpdateScopeSecret(subject,model.Id, model.Type, model.Value, model.Description, model.Expiration);
                if (result.IsSuccess)
                {
                    return NoContent();
                }

                ModelState.AddErrors(result);
            }

            return BadRequest(ModelState.ToError());
        }

        #endregion

        #endregion

        private void ValidateUpdateProperty(ScopeMetaData scopeMetaData, string type, string value)
        {
            if (scopeMetaData == null) throw new ArgumentNullException("scopeMetaData");

            if (String.IsNullOrWhiteSpace(type))
            {
                ModelState.AddModelError("", Messages.PropertyTypeRequired);
                return;
            }

            var prop = scopeMetaData.UpdateProperties.SingleOrDefault(x => x.Type == type);
            if (prop == null)
            {
                ModelState.AddModelError("", String.Format(Messages.PropertyInvalid, type));
            }
            else
            {
                var error = prop.Validate(value);
                if (error != null)
                {
                    ModelState.AddModelError("", error);
                }
            }
        }

        private IEnumerable<string> ValidateCreateProperties(ScopeMetaData scopeMetaData, IEnumerable<PropertyValue> properties)
        {
            if (scopeMetaData == null) throw new ArgumentNullException("scopeMetaData");
            properties = properties ?? Enumerable.Empty<PropertyValue>();

            var meta = scopeMetaData.CreateProperties;
            return meta.Validate(properties);
        }
    }
}