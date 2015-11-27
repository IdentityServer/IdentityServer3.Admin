/*
 * Copyright 2014 Dominick Baier, Brock Allen
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
using System.ComponentModel.DataAnnotations;
using Thinktecture.IdentityServer.Core.Models;

namespace IdentityAdmin.Host.InMemoryService
{
    public class InMemoryClient 
    {
        public int Id { get; set; }
        public int AbsoluteRefreshTokenLifetime { get; set; }
        public int AccessTokenLifetime { get; set; }
        public bool AllowAccessToAllGrantTypes { get; set; }
        public bool AllowAccessToAllScopes { get; set; }
        public bool AllowClientCredentialsOnly { get; set; }
        public bool AllowRememberConsent { get; set; }
        public bool AlwaysSendClientClaims { get; set; }
        public int AuthorizationCodeLifetime { get; set; }
        public string ClientId { get; set; }
        public string ClientName { get; set; }
        public string ClientUri { get; set; }
        public bool Enabled { get; set; }
        public bool EnableLocalLogin { get; set; }
        public int IdentityTokenLifetime { get; set; }
        public bool IncludeJwtId { get; set; }
        public string LogoUri { get; set; }
        public bool PrefixClientClaims { get; set; }
        public bool RequireConsent { get; set; }
        public int SlidingRefreshTokenLifetime { get; set; }
        public bool UpdateAccessTokenOnRefresh { get; set; }
        public TokenExpiration RefreshTokenExpiration { get; set; }
        public TokenUsage RefreshTokenUsage { get; set; }
        public AccessTokenType AccessTokenType { get; set; }
        public Flows Flow { get; set; }
        public ICollection<InMemoryClientClaim> Claims { get; set; }
        public ICollection<InMemoryClientSecret> ClientSecrets { get; set; }
        public ICollection<InMemoryClientIdPRestriction> IdentityProviderRestrictions { get; set; }
        public ICollection<InMemoryClientPostLogoutRedirectUri> PostLogoutRedirectUris { get; set; }
        public ICollection<InMemoryClientRedirectUri> RedirectUris { get; set; }
        public ICollection<InMemoryClientCorsOrigin> AllowedCorsOrigins { get; set; }
        public ICollection<InMemoryClientCustomGrantType> AllowedCustomGrantTypes { get; set; }
        public ICollection<InMemoryClientScope> AllowedScopes { get; set; }
    }

    public class InMemoryClientClaim
    {
        public int Id { get; set; }
        public string Type { get; set; }
        public string Value { get; set; }
    }

    public class InMemoryClientSecret
    {
        public string Description { get; set; }
        public DateTimeOffset? Expiration { get; set; }
        public int Id { get; set; }
        public string Type { get; set; }
        public string Value { get; set; }
    }

    public class InMemoryClientIdPRestriction
    {
        public Client Client { get; set; }
        public int Id { get; set; }
        public string Provider { get; set; }
    }

    public class InMemoryClientPostLogoutRedirectUri
    {
        public int Id { get; set; }
        public string Uri { get; set; }
    }

    public class InMemoryClientRedirectUri
    {
        public int Id { get; set; }
        public string Uri { get; set; }
    }

    public class InMemoryClientCorsOrigin
    {
        public int Id { get; set; }
        public string Origin { get; set; }
    }

    public class InMemoryClientCustomGrantType
    {
        public string GrantType { get; set; }
        public int Id { get; set; }
    }

    public class InMemoryClientScope
    {
        public int Id { get; set; }
        public string Scope { get; set; }
    }
}