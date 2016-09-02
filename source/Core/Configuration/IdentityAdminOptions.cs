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

namespace IdentityAdmin.Configuration
{
    public class IdentityAdminOptions
    {
        /// <summary>
        /// 
        /// </summary>
        /// <param name="disableSecurity">Warning: If this parameter is set to <value>TRUE</value> ALL security will be switched off, this is only used for Unit testing purpose</param>
        public IdentityAdminOptions(bool disableSecurity = false)
        {
            DisableSecurity = disableSecurity;
            Factory = new IdentityAdminServiceFactory();
            if (!DisableSecurity)
            {
                AdminSecurityConfiguration = new LocalhostSecurityConfiguration();
            }
            SiteName = "IdentityAdmin";
        }

        public string SiteName { get; set; }
        public bool DisableSecurity { get; private set; }
        public IdentityAdminServiceFactory Factory { get; set; }
        public AdminSecurityConfiguration AdminSecurityConfiguration { get; set; }
        public bool DisableUserInterface { get; set; }
        
        internal void Validate()
        {
            if (this.Factory == null)
            {
                throw new Exception("Factory is required.");
            }

            if (!DisableSecurity)
            {
                if (this.AdminSecurityConfiguration == null)
                {
                    throw new Exception("AdminSecurityConfiguration is required.");
                }

                AdminSecurityConfiguration.Validate();
            }

        }
    }
}
