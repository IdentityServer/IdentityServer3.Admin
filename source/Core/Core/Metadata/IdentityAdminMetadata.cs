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
using IdentityAdmin.Core.Client;
using IdentityAdmin.Core.Scope;

namespace IdentityAdmin.Core.Metadata
{
    public class IdentityAdminMetadata
    {
        public IdentityAdminMetadata()
        {
            this.ClientMetaData = new ClientMetaData();
            this.ScopeMetaData = new ScopeMetaData();
        }

        public ClientMetaData ClientMetaData { get; set; }
        public ScopeMetaData ScopeMetaData { get; set; }   


        internal void Validate()
        {
            if (ClientMetaData == null) throw new InvalidOperationException("ClientMetaData not assigned.");
            ClientMetaData.Validate();

            if (ScopeMetaData == null) throw new InvalidOperationException("ScopeMetaData not assigned.");
            ScopeMetaData.Validate();
        }
    }
}