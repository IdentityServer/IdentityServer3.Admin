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

using System.Collections.Generic;
using Thinktecture.IdentityServer.Core.Models;

namespace IdentityAdmin.Host.InMemoryService
{
    public class ClientSeeder
    {
        public static ICollection<InMemoryClient> Get()
        {
            var clients = new HashSet<InMemoryClient>
            {
                new InMemoryClient{
                    ClientId = "IdentityAdminClientUniqueId",
                    ClientName = "Indentity Admin Client",
                    Enabled = true,
                    Flow = Flows.Implicit,
                    RequireConsent = true,
                    AllowRememberConsent = true,
                    AllowedScopes = new List<InMemoryClientScope>
                    {
                        new InMemoryClientScope
                        {
                            Id = 1,
                            Scope =  "openid",
                        },
                        new InMemoryClientScope
                        {
                            Id = 2,
                            Scope =  "profile",
                        },
                        new InMemoryClientScope
                        {
                            Id = 3,
                            Scope =  "email",
                        },
                    },
                    AccessTokenType = AccessTokenType.Jwt
                }
            };

            return clients;

        }

    }
}