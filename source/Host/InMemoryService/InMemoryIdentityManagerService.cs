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
using System.Threading.Tasks;
using AutoMapper;
using IdentityAdmin.Core;
using IdentityAdmin.Core.Client;
using IdentityAdmin.Core.Metadata;
using IdentityAdmin.Core.Scope;
using IdentityAdmin.Extensions;
using Thinktecture.IdentityServer.Core.Models;

namespace IdentityAdmin.Host.InMemoryService
{
    internal class InMemoryIdentityManagerService : IIdentityAdminService
    {
        private ICollection<InMemoryClient> _clients;
        private ICollection<InMemoryScope> _scopes;
        public static MapperConfiguration Config;
        public static IMapper Mapper;
        public InMemoryIdentityManagerService(ICollection<InMemoryScope> scopes, ICollection<InMemoryClient> clients)
        {
            this._clients = clients;
            this._scopes = scopes;
            Config = new MapperConfiguration(cfg => {
                cfg.CreateMap<InMemoryClientClaim, ClientClaimValue>();
                cfg.CreateMap<ClientClaimValue, InMemoryClientClaim>();
                cfg.CreateMap<InMemoryClientSecret, ClientSecretValue>();
                cfg.CreateMap<ClientSecretValue, InMemoryClientSecret>();
                cfg.CreateMap<InMemoryClientIdPRestriction, ClientIdPRestrictionValue>();
                cfg.CreateMap<ClientIdPRestrictionValue, InMemoryClientIdPRestriction>();
                cfg.CreateMap<InMemoryClientPostLogoutRedirectUri, ClientPostLogoutRedirectUriValue>();
                cfg.CreateMap<ClientPostLogoutRedirectUriValue, InMemoryClientPostLogoutRedirectUri>();
                cfg.CreateMap<InMemoryClientRedirectUri, ClientRedirectUriValue>();
                cfg.CreateMap<ClientRedirectUriValue, InMemoryClientRedirectUri>();
                cfg.CreateMap<InMemoryClientCorsOrigin, ClientCorsOriginValue>();
                cfg.CreateMap<ClientCorsOriginValue, InMemoryClientCorsOrigin>();
                cfg.CreateMap<InMemoryClientCustomGrantType, ClientCustomGrantTypeValue>();
                cfg.CreateMap<ClientCustomGrantTypeValue, InMemoryClientCustomGrantType>();
                cfg.CreateMap<InMemoryClientScope, ClientScopeValue>();
                cfg.CreateMap<ClientScopeValue, InMemoryClientScope>();
                cfg.CreateMap<InMemoryScopeClaim, ScopeClaimValue>();
                cfg.CreateMap<ScopeClaimValue, InMemoryScopeClaim>();
                cfg.CreateMap<InMemoryScopeSecret, ScopeSecretValue>();
                cfg.CreateMap<ScopeSecretValue, InMemoryScopeSecret>();
                cfg.CreateMap<InMemoryScope, Scope>();
                cfg.CreateMap<Scope, InMemoryScope>();
            });
            Mapper = Config.CreateMapper();
        }


        private IdentityAdminMetadata _metadata;

        private IdentityAdminMetadata GetMetadata()
        {
            if (_metadata == null)
            {
                var updateClient = new List<PropertyMetadata>();
                updateClient.AddRange(PropertyMetadata.FromType<InMemoryClient>());

                var createClient = new List<PropertyMetadata>
                {
                    PropertyMetadata.FromProperty<InMemoryClient>(x => x.ClientName, "ClientName", required: true),
                    PropertyMetadata.FromProperty<InMemoryClient>(x => x.ClientId, "ClientId", required: true),
                };

                var client = new ClientMetaData
                {
                    SupportsCreate = true,
                    SupportsDelete = true,
                    CreateProperties = createClient,
                    UpdateProperties = updateClient
                };


                var updateScope = new List<PropertyMetadata>();
                updateScope.AddRange(PropertyMetadata.FromType<InMemoryScope>());

                var createScope = new List<PropertyMetadata>
                {
                    PropertyMetadata.FromProperty<InMemoryScope>(x => x.Name, "ScopeName", required: true),
                };

                var scope = new ScopeMetaData
                {
                    SupportsCreate = true,
                    SupportsDelete = true,
                    CreateProperties = createScope,
                    UpdateProperties = updateScope
                };


                _metadata = new IdentityAdminMetadata
                {
                    ClientMetaData = client,
                    ScopeMetaData = scope
                };
            }
            return _metadata;
        }

        #region scopes

        public Task<IdentityAdminResult<ScopeDetail>> GetScopeAsync(string subject)
        {
            int parsedId;
            if (int.TryParse(subject, out parsedId))
            {
                var inMemoryScope = _scopes.FirstOrDefault(p => p.Id == parsedId);
                if (inMemoryScope == null)
                {
                    return Task.FromResult(new IdentityAdminResult<ScopeDetail>((ScopeDetail) null));
                }
            
                var result = new ScopeDetail
                {
                    Subject = subject,
                    Name = inMemoryScope.Name,
                    Description = inMemoryScope.Description,
                };

                var metadata = GetMetadata();
                var props = from prop in metadata.ScopeMetaData.UpdateProperties
                    select new PropertyValue
                    {
                        Type = prop.Type,
                        Value = GetScopeProperty(prop, inMemoryScope),
                    };

                result.Properties = props.ToArray();
                result.ScopeClaimValues = new List<ScopeClaimValue>();
                Mapper.Map(inMemoryScope.ScopeClaims.ToList(), result.ScopeClaimValues);
                result.ScopeSecretValues = new List<ScopeSecretValue>();
                Mapper.Map(inMemoryScope.ScopeSecrets.ToList(), result.ScopeSecretValues);
                return Task.FromResult(new IdentityAdminResult<ScopeDetail>(result));
            }
            return Task.FromResult(new IdentityAdminResult<ScopeDetail>((ScopeDetail) null));
        }

        public Task<IdentityAdminResult<QueryResult<ScopeSummary>>> QueryScopesAsync(string filter, int start, int count)
        {
            var query = from scope in _scopes orderby scope.Name select scope;

            if (!String.IsNullOrWhiteSpace(filter))
            {
                query =
                    from scope in query
                    where scope.Name.Contains(filter)
                    orderby scope.Name
                    select scope;
            }

            int total = query.Count();
            var scopes = query.Skip(start).Take(count).ToArray();

            var result = new QueryResult<ScopeSummary>
            {
                Start = start,
                Count = count,
                Total = total,
                Filter = filter,
                Items = scopes.Select(x =>
                {
                    var scope = new ScopeSummary
                    {
                        Subject = x.Id.ToString(),
                        Name = x.Name,
                        Description = x.Name
                    };

                    return scope;
                }).ToArray()
            };

            return Task.FromResult(new IdentityAdminResult<QueryResult<ScopeSummary>>(result));
        }

        public Task<IdentityAdminResult<CreateResult>> CreateScopeAsync(IEnumerable<PropertyValue> properties)
        {
            var errors = ValidateRoleProperties(properties);
            if (errors.Any())
            {
                return Task.FromResult(new IdentityAdminResult<CreateResult>(errors.ToArray()));
            }

            var scope = new InMemoryScope();
            var createPropsMeta = GetMetadata().ScopeMetaData.CreateProperties;
            foreach (var prop in properties)
            {
                var result = SetScopeProperty(createPropsMeta, scope, prop.Type, prop.Value);
                if (!result.IsSuccess)
                {
                    return Task.FromResult(new IdentityAdminResult<CreateResult>(result.Errors.ToArray()));
                }
            }

            if (_scopes.Any(x => x.Name.Equals(scope.Name, StringComparison.OrdinalIgnoreCase)))
            {
                return Task.FromResult(new IdentityAdminResult<CreateResult>("Role name already in use."));
            }

            _scopes.Add(scope);

            return
                Task.FromResult(new IdentityAdminResult<CreateResult>(new CreateResult {Subject = scope.Id.ToString()}));
        }

        public Task<IdentityAdminResult> SetScopePropertyAsync(string subject, string type, string value)
        {
            int parsedSubject;
            if (int.TryParse(subject, out parsedSubject))
            {
                var inMemoryScope = _scopes.FirstOrDefault(p => p.Id == parsedSubject);
                if (inMemoryScope == null)
                {
                    return Task.FromResult(new IdentityAdminResult("Invalid subject"));
                }
                var meta = GetMetadata();

                SetScopeProperty(meta.ScopeMetaData.UpdateProperties, inMemoryScope, type, value);


                return Task.FromResult(IdentityAdminResult.Success);
            }
            return Task.FromResult(new IdentityAdminResult("Invalid subject"));
        }

        public Task<IdentityAdminResult> DeleteScopeAsync(string subject)
        {
            int parsedSubject;
            if (int.TryParse(subject, out parsedSubject))
            {
                var inMemoryScope = _scopes.FirstOrDefault(p => p.Id == parsedSubject);
                if (inMemoryScope == null)
                {
                    return Task.FromResult(new IdentityAdminResult("Invalid subject"));
                }
                _scopes.Remove(inMemoryScope);
                return Task.FromResult(IdentityAdminResult.Success);
            }

            return Task.FromResult(new IdentityAdminResult("Invalid subject"));
        }

        public Task<IdentityAdminResult> AddScopeClaimAsync(string subject, string name, string description,bool alwaysIncludeInIdToken)
        {
            int parsedSubject;
            if (int.TryParse(subject, out parsedSubject))
            {
                var inMemoryScope = _scopes.FirstOrDefault(p => p.Id == parsedSubject);
                if (inMemoryScope == null)
                {
                    return Task.FromResult(new IdentityAdminResult("Invalid subject"));
                }
                var existingClaims = inMemoryScope.ScopeClaims;
                if (!existingClaims.Any(x => x.Name == name && x.Description == description))
                {
                    inMemoryScope.ScopeClaims.Add(new InMemoryScopeClaim
                    {
                        Id = inMemoryScope.ScopeClaims.Count + 1,
                        Name = name,
                        Description = description,
                        AlwaysIncludeInIdToken = alwaysIncludeInIdToken
                    });
                }
                return Task.FromResult(IdentityAdminResult.Success);
            }

            return Task.FromResult(new IdentityAdminResult("Invalid subject"));
        }

        public Task<IdentityAdminResult> RemoveScopeClaimAsync(string subject, string id)
        {
            int parsedSubject;
            int parsedScopeId;
            if (int.TryParse(subject, out parsedSubject) && int.TryParse(id, out parsedScopeId))
            {
                var scope = _scopes.FirstOrDefault(p => p.Id == parsedSubject);
                if (scope == null)
                {
                    return Task.FromResult(new IdentityAdminResult("Invalid subject"));
                }
                var existingClaim = scope.ScopeClaims.FirstOrDefault(p => p.Id == parsedScopeId);
                if (existingClaim != null)
                {
                    scope.ScopeClaims.Remove(existingClaim);
                }
                return Task.FromResult(IdentityAdminResult.Success);
            }
            return Task.FromResult(new IdentityAdminResult("Invalid subject"));
        }
          public Task<IdentityAdminResult> AddScopeSecretAsync(string subject, string type, string value, string description, DateTime? expiration)
        {
            int parsedSubject;
            if (int.TryParse(subject, out parsedSubject))
            {
                var inMemoryScope = _scopes.FirstOrDefault(p => p.Id == parsedSubject);
                if (inMemoryScope == null)
                {
                    return Task.FromResult(new IdentityAdminResult("Invalid subject"));
                }
                var existingSecrets = inMemoryScope.ScopeSecrets;
                if (!existingSecrets.Any(x => x.Type == type && x.Value == value))
                {
                    inMemoryScope.ScopeSecrets.Add(new InMemoryScopeSecret
                    {
                        Id = inMemoryScope.ScopeClaims.Count + 1,
                        Type = type,
                        Value = value,
                        Description = description,
                        Expiration = expiration
                    });
                }
                return Task.FromResult(IdentityAdminResult.Success);
            }

            return Task.FromResult(new IdentityAdminResult("Invalid subject"));
        }
          public Task<IdentityAdminResult> UpdateScopeSecret(string subject, string scopeSecretSubject, string type, string value, string description, DateTime? expiration)
          {
            int parsedSubject, parsedScopeSecretSubject;
            if (int.TryParse(subject, out parsedSubject) && int.TryParse(scopeSecretSubject, out parsedScopeSecretSubject))
            {
                var inMemoryScope = _scopes.FirstOrDefault(p => p.Id == parsedSubject);
                if (inMemoryScope == null)
                {
                    return Task.FromResult(new IdentityAdminResult("Invalid subject"));
                }
                var existingSecret = inMemoryScope.ScopeSecrets.FirstOrDefault(p => p.Id == parsedScopeSecretSubject);
                if (existingSecret != null)
                {
                    existingSecret.Value = value;
                    existingSecret.Type = type;
                    existingSecret.Description = description;
                    if (expiration.HasValue)
                    {
                        //Save as new DateTimeOffset(expiration.Value)
                        existingSecret.Expiration = expiration.Value;
                    }
                  
                    return Task.FromResult(IdentityAdminResult.Success);
                }
                return Task.FromResult(new IdentityAdminResult("Not found"));
            }

            return Task.FromResult(new IdentityAdminResult("Invalid subject"));
        }

           public Task<IdentityAdminResult> RemoveScopeSecretAsync(string subject, string id)
        {
            int parsedSubject;
            int parsedScopeId;
            if (int.TryParse(subject, out parsedSubject) && int.TryParse(id, out parsedScopeId))
            {
                var scope = _scopes.FirstOrDefault(p => p.Id == parsedSubject);
                if (scope == null)
                {
                    return Task.FromResult(new IdentityAdminResult("Invalid subject"));
                }
                var existingSecret = scope.ScopeSecrets.FirstOrDefault(p => p.Id == parsedScopeId);
                if (existingSecret != null)
                {
                    scope.ScopeSecrets.Remove(existingSecret);
                }
                return Task.FromResult(IdentityAdminResult.Success);
            }
            return Task.FromResult(new IdentityAdminResult("Invalid subject"));
        }
        #endregion

        #region Clients

        public Task<IdentityAdminResult<ClientDetail>> GetClientAsync(string subject)
        {
            int parsedId;
            if (int.TryParse(subject, out parsedId))
            {
                var inMemoryClient = _clients.FirstOrDefault(p => p.Id == parsedId);
                if (inMemoryClient == null)
                {
                    return Task.FromResult(new IdentityAdminResult<ClientDetail>((ClientDetail) null));
                }

                var result = new ClientDetail
                {
                    Subject = subject,
                    ClientId = inMemoryClient.ClientId,
                    ClientName = inMemoryClient.ClientName,
                };
                result.AllowedCorsOrigins = new List<ClientCorsOriginValue>();
                Mapper.Map(inMemoryClient.AllowedCorsOrigins.ToList(), result.AllowedCorsOrigins);
                result.AllowedCustomGrantTypes = new List<ClientCustomGrantTypeValue>();
                Mapper.Map(inMemoryClient.AllowedCustomGrantTypes.ToList(), result.AllowedCustomGrantTypes);
                result.AllowedScopes = new List<ClientScopeValue>();
                Mapper.Map(inMemoryClient.AllowedScopes.ToList(), result.AllowedScopes);
                result.Claims = new List<ClientClaimValue>();
                Mapper.Map(inMemoryClient.Claims.ToList(), result.Claims);
                result.ClientSecrets = new List<ClientSecretValue>();
                Mapper.Map(inMemoryClient.ClientSecrets.ToList(), result.ClientSecrets);
                result.IdentityProviderRestrictions = new List<ClientIdPRestrictionValue>();
                Mapper.Map(inMemoryClient.IdentityProviderRestrictions.ToList(), result.IdentityProviderRestrictions);
                result.PostLogoutRedirectUris = new List<ClientPostLogoutRedirectUriValue>();
                Mapper.Map(inMemoryClient.PostLogoutRedirectUris.ToList(), result.PostLogoutRedirectUris);
                result.RedirectUris = new List<ClientRedirectUriValue>();
                Mapper.Map(inMemoryClient.RedirectUris.ToList(), result.RedirectUris);

                var metadata = GetMetadata();
                var props = from prop in metadata.ClientMetaData.UpdateProperties
                    select new PropertyValue
                    {
                        Type = prop.Type,
                        Value = GetClientProperty(prop, inMemoryClient),
                    };

                result.Properties = props.ToArray();
                return Task.FromResult(new IdentityAdminResult<ClientDetail>(result));
            }
            return Task.FromResult(new IdentityAdminResult<ClientDetail>((ClientDetail) null));
        }

        public Task<IdentityAdminResult> DeleteClientAsync(string subject)
        {
            int parsedSubject;
            if (int.TryParse(subject, out parsedSubject))
            {
                var client = _clients.FirstOrDefault(p => p.Id == parsedSubject);
                if (client == null)
                {
                    return Task.FromResult(new IdentityAdminResult("Invalid subject"));
                }
                _clients.Remove(client);
                return Task.FromResult(IdentityAdminResult.Success);
            }

            return Task.FromResult(new IdentityAdminResult("Invalid subject"));
        }

        public Task<IdentityAdminResult<QueryResult<ClientSummary>>> QueryClientsAsync(string filter, int start,
            int count)
        {
            var query =
                from client in _clients
                orderby client.ClientName
                select client;

            if (!String.IsNullOrWhiteSpace(filter))
            {
                query =
                    from client in query
                    where client.ClientName.Contains(filter)
                    orderby client.ClientName
                    select client;
            }

            int total = query.Count();
            var clients = query.Skip(start).Take(count).ToArray();

            var result = new QueryResult<ClientSummary>();
            result.Start = start;
            result.Count = count;
            result.Total = total;
            result.Filter = filter;
            result.Items = clients.Select(x =>
            {
                var client = new ClientSummary
                {
                    Subject = x.Id.ToString(),
                    ClientName = x.ClientName,
                    ClientId = x.ClientId
                };

                return client;
            }).ToArray();

            return Task.FromResult(new IdentityAdminResult<QueryResult<ClientSummary>>(result));
        }

        public Task<IdentityAdminResult<CreateResult>> CreateClientAsync(IEnumerable<PropertyValue> properties)
        {
            var clientNameClaim = properties.Single(x => x.Type == "ClientName");
            var clientIdClaim = properties.Single(x => x.Type == "ClientId");

            var clientId = clientNameClaim.Value;
            var clientName = clientIdClaim.Value;

            string[] exclude = new string[] {"ClientName", "ClientId"};
            var otherProperties = properties.Where(x => !exclude.Contains(x.Type)).ToArray();

            var metadata = GetMetadata();
            var createProps = metadata.ClientMetaData.CreateProperties;
            var client  = new Client();
            var inMemoryClient = new InMemoryClient
            {
                ClientId = clientId,
                ClientName = clientName,
                Id = _clients.Count + 1,
                AbsoluteRefreshTokenLifetime = client.AbsoluteRefreshTokenLifetime,
                AccessTokenLifetime = client.AccessTokenLifetime,
                IdentityTokenLifetime = client.IdentityTokenLifetime,
                SlidingRefreshTokenLifetime = client.SlidingRefreshTokenLifetime,
                Enabled =  true,
                EnableLocalLogin =  true,

            };

            foreach (var prop in otherProperties)
            {
                var propertyResult = SetClientProperty(createProps, inMemoryClient, prop.Type, prop.Value);
                if (!propertyResult.IsSuccess)
                {
                    return Task.FromResult(new IdentityAdminResult<CreateResult>(propertyResult.Errors.ToArray()));
                }
            }

            _clients.Add(inMemoryClient);
            return
                Task.FromResult(
                    new IdentityAdminResult<CreateResult>(new CreateResult {Subject = inMemoryClient.Id.ToString()}));
        }

        public Task<IdentityAdminResult> SetClientPropertyAsync(string subject, string type, string value)
        {
            int parsedSubject;
            if (int.TryParse(subject, out parsedSubject))
            {
                var inMemoryClient = _clients.FirstOrDefault(p => p.Id == parsedSubject);
                if (inMemoryClient == null)
                {
                    return Task.FromResult(new IdentityAdminResult("Invalid subject"));
                }
                var meta = GetMetadata();

                SetClientProperty(meta.ClientMetaData.UpdateProperties, inMemoryClient, type, value);
                return Task.FromResult(IdentityAdminResult.Success);
            }
            return Task.FromResult(new IdentityAdminResult("Invalid subject"));
        }

        #region Client claim

        public Task<IdentityAdminResult> AddClientClaimAsync(string subject, string type, string value)
        {
            int parsedSubject;
            if (int.TryParse(subject, out parsedSubject))
            {
                var inMemoryClient = _clients.FirstOrDefault(p => p.Id == parsedSubject);
                if (inMemoryClient == null)
                {
                    return Task.FromResult(new IdentityAdminResult("Invalid subject"));
                }
                var existingClaims = inMemoryClient.Claims;
                if (!existingClaims.Any(x => x.Type == type && x.Value == value))
                {
                    inMemoryClient.Claims.Add(new InMemoryClientClaim()
                    {
                        Type = type,
                        Value = value
                    });
                }
                return Task.FromResult(IdentityAdminResult.Success);
            }
            return Task.FromResult(new IdentityAdminResult("Invalid subject"));
        }

        public Task<IdentityAdminResult> RemoveClientClaimAsync(string subject, string id)
        {
            int parsedSubject;
            int parsedClientId;
            if (int.TryParse(subject, out parsedSubject) && int.TryParse(id, out parsedClientId))
            {
                var client = _clients.FirstOrDefault(p => p.Id == parsedSubject);
                if (client == null)
                {
                    return Task.FromResult(new IdentityAdminResult("Invalid subject"));
                }
                var existingClaim = client.Claims.FirstOrDefault(p => p.Id == parsedClientId);
                if (existingClaim != null)
                {
                    client.Claims.Remove(existingClaim);
                }
                return Task.FromResult(IdentityAdminResult.Success);
            }
            return Task.FromResult(new IdentityAdminResult("Invalid subject"));
        }

        #endregion

        #region Client Secret

        public Task<IdentityAdminResult> AddClientSecretAsync(string subject, string type, string value)
        {
            int parsedSubject;
            if (int.TryParse(subject, out parsedSubject))
            {
                var inMemoryClient = _clients.FirstOrDefault(p => p.Id == parsedSubject);
                if (inMemoryClient == null)
                {
                    return Task.FromResult(new IdentityAdminResult("Invalid subject"));
                }
                var existingSecrets = inMemoryClient.ClientSecrets;
                if (!existingSecrets.Any(x => x.Type == type && x.Value == value))
                {
                    inMemoryClient.ClientSecrets.Add(new InMemoryClientSecret
                    {
                        Type = type,
                        Value = value
                    });
                }
                return Task.FromResult(IdentityAdminResult.Success);
            }
            return Task.FromResult(new IdentityAdminResult("Invalid subject"));
        }

        public Task<IdentityAdminResult> RemoveClientSecretAsync(string subject, string id)
        {
            int parsedSubject;
            int parsedObjectId;
            if (int.TryParse(subject, out parsedSubject) && int.TryParse(id, out parsedObjectId))
            {
                var inMemoryClient = _clients.FirstOrDefault(p => p.Id == parsedSubject);
                if (inMemoryClient == null)
                {
                    return Task.FromResult(new IdentityAdminResult("Invalid subject"));
                }
                var existingClientSecret = inMemoryClient.ClientSecrets.FirstOrDefault(p => p.Id == parsedObjectId);
                if (existingClientSecret != null)
                {
                    inMemoryClient.ClientSecrets.Remove(existingClientSecret);
                }
                return Task.FromResult(IdentityAdminResult.Success);
            }
            return Task.FromResult(new IdentityAdminResult("Invalid subject or secretId"));
        }

        #endregion

        #region ClientIdPRestriction

        public Task<IdentityAdminResult> AddClientIdPRestrictionAsync(string subject, string provider)
        {
            int parsedSubject;
            if (int.TryParse(subject, out parsedSubject))
            {
                var inMemoryClient = _clients.FirstOrDefault(p => p.Id == parsedSubject);
                if (inMemoryClient == null)
                {
                    return Task.FromResult(new IdentityAdminResult("Invalid subject"));
                }
                var existingIdentityProviderRestrictions = inMemoryClient.IdentityProviderRestrictions;
                if (existingIdentityProviderRestrictions.All(x => x.Provider != provider))
                {
                    inMemoryClient.IdentityProviderRestrictions.Add(new InMemoryClientIdPRestriction
                    {
                        Provider = provider,
                    });
                }
                return Task.FromResult(IdentityAdminResult.Success);
            }
            return Task.FromResult(new IdentityAdminResult("Invalid subject"));
        }

        public Task<IdentityAdminResult> RemoveClientIdPRestrictionAsync(string subject, string id)
        {
            int parsedSubject;
            int parsedObjectId;
            if (int.TryParse(subject, out parsedSubject) && int.TryParse(id, out parsedObjectId))
            {
                var inMemoryClient = _clients.FirstOrDefault(p => p.Id == parsedSubject);
                if (inMemoryClient == null)
                {
                    return Task.FromResult(new IdentityAdminResult("Invalid subject"));
                }
                var existingIdentityProviderRestrictions =
                    inMemoryClient.IdentityProviderRestrictions.FirstOrDefault(p => p.Id == parsedObjectId);
                if (existingIdentityProviderRestrictions != null)
                {
                    inMemoryClient.IdentityProviderRestrictions.Remove(existingIdentityProviderRestrictions);
                }
                return Task.FromResult(IdentityAdminResult.Success);
            }
            return Task.FromResult(new IdentityAdminResult("Invalid subject or secretId"));
        }

        #endregion

        #region PostLogoutRedirectUri

        public Task<IdentityAdminResult> AddPostLogoutRedirectUriAsync(string subject, string uri)
        {
            int parsedSubject;
            if (int.TryParse(subject, out parsedSubject))
            {
                var client = _clients.FirstOrDefault(p => p.Id == parsedSubject);
                if (client == null)
                {
                    return Task.FromResult(new IdentityAdminResult("Invalid subject"));
                }
                var existingPostLogoutRedirectUris = client.PostLogoutRedirectUris;
                if (existingPostLogoutRedirectUris.All(x => x.Uri != uri))
                {
                    client.PostLogoutRedirectUris.Add(new InMemoryClientPostLogoutRedirectUri
                    {
                        Uri = uri,
                    });
                }
                return Task.FromResult(IdentityAdminResult.Success);
            }
            return Task.FromResult(new IdentityAdminResult("Invalid subject"));
        }

        public Task<IdentityAdminResult> RemovePostLogoutRedirectUriAsync(string subject, string id)
        {
            int parsedSubject;
            int parsedObjectId;
            if (int.TryParse(subject, out parsedSubject) && int.TryParse(id, out parsedObjectId))
            {
                var inMemoryClient = _clients.FirstOrDefault(p => p.Id == parsedSubject);
                if (inMemoryClient == null)
                {
                    return Task.FromResult(new IdentityAdminResult("Invalid subject"));
                }

                var existingPostLogoutRedirectUris =
                    inMemoryClient.PostLogoutRedirectUris.FirstOrDefault(p => p.Id == parsedObjectId);
                if (existingPostLogoutRedirectUris != null)
                {
                    inMemoryClient.PostLogoutRedirectUris.Remove(existingPostLogoutRedirectUris);
                }
                return Task.FromResult(IdentityAdminResult.Success);
            }
            return Task.FromResult(new IdentityAdminResult("Invalid subject or secretId"));
        }

        #endregion

        #region ClientRedirectUri

        public Task<IdentityAdminResult> AddClientRedirectUriAsync(string subject, string uri)
        {
            int parsedSubject;
            if (int.TryParse(subject, out parsedSubject))
            {
                var client = _clients.FirstOrDefault(p => p.Id == parsedSubject);
                if (client == null)
                {
                    return Task.FromResult(new IdentityAdminResult("Invalid subject"));
                }
                var existingRedirectUris = client.RedirectUris;
                if (existingRedirectUris.All(x => x.Uri != uri))
                {
                    client.RedirectUris.Add(new InMemoryClientRedirectUri
                    {
                        Uri = uri,
                    });
                }
                return Task.FromResult(IdentityAdminResult.Success);
            }
            return Task.FromResult(new IdentityAdminResult("Invalid subject"));
        }

        public Task<IdentityAdminResult> RemoveClientRedirectUriAsync(string subject, string id)
        {
            int parsedSubject;
            int parsedObjectId;
            if (int.TryParse(subject, out parsedSubject) && int.TryParse(id, out parsedObjectId))
            {
                var inMemoryClient = _clients.FirstOrDefault(p => p.Id == parsedSubject);
                if (inMemoryClient == null)
                {
                    return Task.FromResult(new IdentityAdminResult("Invalid subject"));
                }
                var existingRedirectUris = inMemoryClient.RedirectUris.FirstOrDefault(p => p.Id == parsedObjectId);
                if (existingRedirectUris != null)
                {
                    inMemoryClient.RedirectUris.Remove(existingRedirectUris);
                }
                return Task.FromResult(IdentityAdminResult.Success);
            }
            return Task.FromResult(new IdentityAdminResult("Invalid subject or secretId"));
        }

        #endregion

        #region ClientCorsOrigin

        public Task<IdentityAdminResult> AddClientCorsOriginAsync(string subject, string origin)
        {
            int parsedSubject;
            if (int.TryParse(subject, out parsedSubject))
            {
                var inMemoryClient = _clients.FirstOrDefault(p => p.Id == parsedSubject);
                if (inMemoryClient == null)
                {
                    return Task.FromResult(new IdentityAdminResult("Invalid subject"));
                }
                var existingCorsOrigins = inMemoryClient.AllowedCorsOrigins;
                if (existingCorsOrigins.All(x => x.Origin != origin))
                {
                    inMemoryClient.AllowedCorsOrigins.Add(new InMemoryClientCorsOrigin
                    {
                        Origin = origin,
                    });
                }
                return Task.FromResult(IdentityAdminResult.Success);
            }
            return Task.FromResult(new IdentityAdminResult("Invalid subject"));
        }

        public Task<IdentityAdminResult> RemoveClientCorsOriginAsync(string subject, string id)
        {
            int parsedSubject;
            int parsedObjectId;
            if (int.TryParse(subject, out parsedSubject) && int.TryParse(id, out parsedObjectId))
            {
                var inMemoryClient = _clients.FirstOrDefault(p => p.Id == parsedSubject);
                if (inMemoryClient == null)
                {
                    return Task.FromResult(new IdentityAdminResult("Invalid subject"));
                }
                var existingCorsOrigins = inMemoryClient.AllowedCorsOrigins.FirstOrDefault(p => p.Id == parsedObjectId);
                if (existingCorsOrigins != null)
                {
                    inMemoryClient.AllowedCorsOrigins.Remove(existingCorsOrigins);
                }
                return Task.FromResult(IdentityAdminResult.Success);
            }
            return Task.FromResult(new IdentityAdminResult("Invalid subject or secretId"));
        }

        #endregion

        #region ClientCustomGrantType

        public Task<IdentityAdminResult> AddClientCustomGrantTypeAsync(string subject, string grantType)
        {
            int parsedSubject;
            if (int.TryParse(subject, out parsedSubject))
            {
                var inMemoryClient = _clients.FirstOrDefault(p => p.Id == parsedSubject);
                if (inMemoryClient == null)
                {
                    return Task.FromResult(new IdentityAdminResult("Invalid subject"));
                }
                var existingGrantTypes = inMemoryClient.AllowedCustomGrantTypes;
                if (existingGrantTypes.All(x => x.GrantType != grantType))
                {
                    inMemoryClient.AllowedCustomGrantTypes.Add(new InMemoryClientCustomGrantType
                    {
                        GrantType = grantType,
                    });
                }
                return Task.FromResult(IdentityAdminResult.Success);
            }
            return Task.FromResult(new IdentityAdminResult("Invalid subject"));
        }

        public Task<IdentityAdminResult> RemoveClientCustomGrantTypeAsync(string subject, string id)
        {
            int parsedSubject;
            int parsedObjectId;
            if (int.TryParse(subject, out parsedSubject) && int.TryParse(id, out parsedObjectId))
            {
                var inMemoryClient = _clients.FirstOrDefault(p => p.Id == parsedSubject);
                if (inMemoryClient == null)
                {
                    return Task.FromResult(new IdentityAdminResult("Invalid subject"));
                }
                var existingGrantTypes =
                    inMemoryClient.AllowedCustomGrantTypes.FirstOrDefault(p => p.Id == parsedObjectId);
                if (existingGrantTypes != null)
                {
                    inMemoryClient.AllowedCustomGrantTypes.Remove(existingGrantTypes);
                }
                return Task.FromResult(IdentityAdminResult.Success);
            }
            return Task.FromResult(new IdentityAdminResult("Invalid subject or secretId"));
        }

        #endregion

        #region ClientScope

        public Task<IdentityAdminResult> AddClientScopeAsync(string subject, string scope)
        {
            int parsedSubject;
            if (int.TryParse(subject, out parsedSubject))
            {
                var inMemoryClient = _clients.FirstOrDefault(p => p.Id == parsedSubject);
                if (inMemoryClient == null)
                {
                    return Task.FromResult(new IdentityAdminResult("Invalid subject"));
                }
                var existingScopes = inMemoryClient.AllowedScopes;
                if (existingScopes.All(x => x.Scope != scope))
                {
                    inMemoryClient.AllowedScopes.Add(new InMemoryClientScope
                    {
                        Scope = scope,
                    });
                }
                return Task.FromResult(IdentityAdminResult.Success);
            }
            return Task.FromResult(new IdentityAdminResult("Invalid subject"));
        }

        public Task<IdentityAdminResult> RemoveClientScopeAsync(string subject, string id)
        {
            int parsedSubject;
            int parsedObjectId;
            if (int.TryParse(subject, out parsedSubject) && int.TryParse(id, out parsedObjectId))
            {
                var inMemoryClient = _clients.FirstOrDefault(p => p.Id == parsedSubject);
                if (inMemoryClient == null)
                {
                    return Task.FromResult(new IdentityAdminResult("Invalid subject"));
                }
                var existingScopes = inMemoryClient.AllowedScopes.FirstOrDefault(p => p.Id == parsedObjectId);
                if (existingScopes != null)
                {
                    inMemoryClient.AllowedScopes.Remove(existingScopes);
                }
                return Task.FromResult(IdentityAdminResult.Success);
            }
            return Task.FromResult(new IdentityAdminResult("Invalid subject or secretId"));
        }

        #endregion

        #endregion

        Task<IdentityAdminMetadata> IIdentityAdminService.GetMetadataAsync()
        {
            return Task.FromResult(GetMetadata());
        }

        #region helperMethods

        protected IdentityAdminResult SetClientProperty(IEnumerable<PropertyMetadata> propsMeta, InMemoryClient client,
            string type, string value)
        {
            IdentityAdminResult result;
            if (propsMeta.TrySet(client, type, value, out result))
            {
                return result;
            }

            throw new Exception("Invalid property type " + type);
        }

        protected string GetClientProperty(PropertyMetadata propMetadata, InMemoryClient client)
        {
            string val;
            if (propMetadata.TryGet(client, out val))
            {
                return val;
            }
            throw new Exception("Invalid property type " + propMetadata.Type);
        }

        protected IdentityAdminResult SetScopeProperty(IEnumerable<PropertyMetadata> propsMeta, InMemoryScope scope,
            string type, string value)
        {
            IdentityAdminResult result;
            if (propsMeta.TrySet(scope, type, value, out result))
            {
                return result;
            }

            throw new Exception("Invalid property type " + type);
        }

        protected string GetScopeProperty(PropertyMetadata propMetadata, InMemoryScope scope)
        {
            string val;
            if (propMetadata.TryGet(scope, out val))
            {
                return val;
            }
            throw new Exception("Invalid property type " + propMetadata.Type);
        }

        private IEnumerable<string> ValidateRoleProperties(IEnumerable<PropertyValue> properties)
        {
            return properties.Select(x => ValidateRoleProperty(x.Type, x.Value)).Aggregate((x, y) => x.Concat(y));
        }

        private IEnumerable<string> ValidateRoleProperty(string type, string value)
        {
            return Enumerable.Empty<string>();
        }

        #endregion
    }
}