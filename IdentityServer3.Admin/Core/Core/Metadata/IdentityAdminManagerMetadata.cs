using System;
using IdentityAdmin.Core.Client;
using IdentityAdmin.Core.Scope;

namespace IdentityAdmin.Core.Metadata
{
    public class IdentityAdminManagerMetadata
    {
        public IdentityAdminManagerMetadata()
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