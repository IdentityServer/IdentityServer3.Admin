/// <reference path="../Libs/angular.min.js" />
/// <reference path="../Libs/oidc-token-manager.min.js" />

(function (angular) {
    var app = angular.module("ttidAdm", []);

    function config($httpProvider) {
        function intercept($q, idAdmTokenManager, idAdmErrorService) {
            return {
                'request': function (config) {
                    idAdmErrorService.clear();
                    var token = idAdmTokenManager.access_token;
                    if (token) {
                        config.headers['Authorization'] = 'Bearer ' + token;
                    }
                    return config;
                },
                'responseError': function (response) {
                    if (response.status === 401) {
                        //idAdmTokenManager.removeToken();
                    }
                    if (response.status === 403) {
                        //idAdmTokenManager.removeToken();
                    }
                    return $q.reject(response);
                }
            };
        };
        intercept.$inject = ["$q", "idAdmTokenManager", "idAdmErrorService"];
        $httpProvider.interceptors.push(intercept);
    };
    config.$inject = ["$httpProvider"];
    app.config(config);

    function idAdmErrorService($rootScope, $timeout) {
        var svc = {
            show: function (err) {
                $timeout(function () {
                    if (err instanceof Array) {
                        $rootScope.errors = err;
                    }
                    else {
                        $rootScope.errors = [err];
                    }
                }, 100);
            },
            clear: function () {
                $rootScope.errors = null;
            }
        };

        return svc;
    }
    idAdmErrorService.$inject = ["$rootScope", "$timeout"];
    app.factory("idAdmErrorService", idAdmErrorService);

    function idAdmTokenManager(OidcTokenManager, oauthSettings, PathBase, $window, $rootScope) {

        oauthSettings.response_type = "token";

        var mgr = new OidcTokenManager(oauthSettings);

        var applyFuncs = [
                "_callTokenRemoved", "_callTokenExpiring",
                "_callTokenExpired", "_callTokenObtained",
                "_callSilentTokenRenewFailed"
        ];
        applyFuncs.forEach(function (name) {
            var tmp = mgr[name].bind(mgr);
            mgr[name] = function () {
                $rootScope.$applyAsync(function () {
                    tmp();
                });
            }
        });

        return mgr;
    }
    idAdmTokenManager.$inject = ["OidcTokenManager", "oauthSettings", "PathBase", "$window", "$rootScope"];
    app.factory("idAdmTokenManager", idAdmTokenManager);

    function idAdmApi(idAdmTokenManager, $http, $q, PathBase,$location) {
        var cache = null;

        idAdmTokenManager.addOnTokenRemoved(function () {
            cache = null;
        });

        return {
            get: function () {
                if (cache) {
                    var d = $q.defer();
                    d.resolve(cache);
                    return d.promise;
                }

                return $http.get(PathBase + "/api").then(function (resp) {
                    cache = resp.data;
                    return cache;
                }, function (resp) {
                    cache = null;
                    console.log(resp)
                    if (resp.status === 401) {
                        $location.path('/error');
                        throw 'You are not authorized to use this service.';
                    }
                    else {
                        throw (resp.data && (resp.data.exceptionMessage || resp.data.message)) || 'Failed to access IdentityAdmin API.';
                    }
                });
            }
        };
    }
    idAdmApi.$inject = ["idAdmTokenManager", "$http", "$q", "PathBase",'$location'];
    app.factory("idAdmApi", idAdmApi);

    //clients
    function idAdmClients($http, idAdmApi, $log) {
        function nop() {
        }
        function mapResponseData(response) {
            return response.data;
        }
        function errorHandler(msg) {
            msg = msg || "Unexpected Error";
            return function (response) {
                if (response.data.exceptionMessage) {
                    $log.error(response.data.exceptionMessage);
                }
                throw (response.data.errors || response.data.message || msg);
            }
        }

        var svc = idAdmApi.get().then(function (api) {
            svc.getClients = function (filter, start, count) {
                return $http.get(api.links.clients, { params: { filter: filter, start: start, count: count } })
                    .then(mapResponseData, errorHandler("Error Getting Clients"));
            };
            svc.getClient = function (subject) {
                return $http.get(api.links.clients + "/" + encodeURIComponent(subject))
                    .then(mapResponseData, errorHandler("Error Getting Clients"));
            };
            if (api.links.createClient) {
                svc.createClient = function (properties) {
                    return $http.post(api.links.createClient.href, properties)
                        .then(mapResponseData, errorHandler("Error Creating Client"));
                };
            }
            svc.deleteClient = function (client) {
                return $http.delete(client.links.delete)
                    .then(nop, errorHandler("Error Deleting Client"));
            };
            svc.setProperty = function (property) {
                if (property.data === 0) {
                    property.data = "0";
                }
                if (property.data === false) {
                    property.data = "false";
                }
                return $http.put(property.links.update, property.data)
                    .then(nop, errorHandler(property.meta && property.meta.name && "Error Setting " + property.meta.name || "Error Setting Property"));
            };
            //Claim
            svc.addClientClaim = function (claims, claim) {
                return $http.post(claims.links.create, claim)
                    .then(nop, errorHandler("Error Adding Claim"));
            };
            svc.removeClientClaim = function (claim) {
                return $http.delete(claim.links.delete)
                    .then(nop, errorHandler("Error Removing Claim"));
            };
            //Client Secret
            svc.addClientSecret = function (clientSecrets, clientSecret) {
                return $http.post(clientSecrets.links.create, clientSecret)
                    .then(nop, errorHandler("Error Adding Client Secret"));
            };
            svc.removeClientSecret = function (clientSecret) {
                return $http.delete(clientSecret.links.delete)
                    .then(nop, errorHandler("Error Removing Client Secret"));
            };
            //IdentityProviderRestriction
            svc.addIdentityProviderRestriction = function (identityProviderRestrictions, identityProviderRestriction) {
                return $http.post(identityProviderRestrictions.links.create, identityProviderRestriction)
                    .then(nop, errorHandler("Error Adding identityProvider Restriction"));
            };
            svc.removeIdentityProviderRestriction = function (identityProviderRestriction) {
                return $http.delete(identityProviderRestriction.links.delete)
                    .then(nop, errorHandler("Error Removing identityProvider Restriction"));
            };
            //PostLogoutRedirectUri
            svc.addPostLogoutRedirectUri = function (postLogoutRedirectUris, postLogoutRedirectUri) {
                return $http.post(postLogoutRedirectUris.links.create, postLogoutRedirectUri)
                    .then(nop, errorHandler("Error adding post Logout redirect uri"));
            };
            svc.removePostLogoutRedirectUri = function (postLogoutRedirectUri) {
                return $http.delete(postLogoutRedirectUri.links.delete)
                    .then(nop, errorHandler("Error removing post Logout redirect uri"));
            };
            //RedirectUri
            svc.addRedirectUri = function (redirectUris, redirectUri) {
                return $http.post(redirectUris.links.create, redirectUri)
                    .then(nop, errorHandler("Error adding redirect uri"));
            };
            svc.removeRedirectUri = function (redirectUri) {
                return $http.delete(redirectUri.links.delete)
                    .then(nop, errorHandler("Error removing redirect uri"));
            };
            //AllowedCorsOrigin
            svc.addAllowedCorsOrigin = function (allowedCorsOrigins, allowedCorsOrigin) {
                return $http.post(allowedCorsOrigins.links.create, allowedCorsOrigin)
                    .then(nop, errorHandler("Error adding allowed cor"));
            };
            svc.removeAllowedCorsOrigin = function (allowedCorsOrigin) {
                return $http.delete(allowedCorsOrigin.links.delete)
                    .then(nop, errorHandler("Error removing allowed cor"));
            };
            //GrantType
            svc.addAllowedCustomGrantType = function (grantTypes, grantType) {
                return $http.post(grantTypes.links.create, grantType)
                    .then(nop, errorHandler("Error adding grant type"));
            };
            svc.removeAllowedCustomGrantType = function (grantType) {
                return $http.delete(grantType.links.delete)
                    .then(nop, errorHandler("Error removing grant type"));
            };
            //Scope
            svc.addAllowedScope = function (scopes, scope) {
                return $http.post(scopes.links.create, scope)
                    .then(nop, errorHandler("Error adding scope"));
            };
            svc.removeAllowedScope = function (scope) {
                return $http.delete(scope.links.delete)
                    .then(nop, errorHandler("Error removing scope"));
            };
        });

        return svc;
    }
    idAdmClients.$inject = ["$http", "idAdmApi", "$log"];
    app.factory("idAdmClients", idAdmClients);

    //scopes
    function idAdmScopes($http, idAdmApi, $log) {
        function nop() {
        }
        function mapResponseData(response) {
            return response.data;
        }
        function errorHandler(msg) {
            msg = msg || "Unexpected Error";
            return function (response) {
                if (response.data.exceptionMessage) {
                    $log.error(response.data.exceptionMessage);
                }
                throw (response.data.errors || response.data.message || msg);
            }
        }

        var svc = idAdmApi.get().then(function (api) {
            svc.getScopes = function (filter, start, count) {
                return $http.get(api.links.scopes, { params: { filter: filter, start: start, count: count } })
                    .then(mapResponseData, errorHandler("Error Getting Scopes"));
            };
            svc.getScope = function (subject) {
                return $http.get(api.links.scopes + "/" + encodeURIComponent(subject))
                    .then(mapResponseData, errorHandler("Error Getting Scopes"));
            };
            if (api.links.createScope) {
                svc.createScope = function (properties) {
                    return $http.post(api.links.createScope.href, properties)
                        .then(mapResponseData, errorHandler("Error Creating Scope"));
                };
            }
            svc.deleteScope = function (scope) {
                return $http.delete(scope.links.delete)
                    .then(nop, errorHandler("Error Deleting Client"));
            };
            svc.setProperty = function (property) {
                if (property.data === 0) {
                    property.data = "0";
                }
                if (property.data === false) {
                    property.data = "false";
                }
                return $http.put(property.links.update, property.data)
                    .then(nop, errorHandler(property.meta && property.meta.name && "Error Setting " + property.meta.name || "Error Setting Property"));
            };
            //Scope Claim
            svc.addScopeClaim = function (scopeClaims, scopeClaim) {
                return $http.post(scopeClaims.links.create, scopeClaim)
                    .then(nop, errorHandler("Error Adding Scope Claim"));
            };
            svc.removeScopeClaim = function (scopeClaim) {
                return $http.delete(scopeClaim.links.delete)
                    .then(nop, errorHandler("Error Removing Scope Claim"));
            };
            svc.updateScopeClaim = function (claim) {
                return $http.put(claim.links.update, claim.data)
                    .then(nop, errorHandler("Error updating Scope Claim"));
            };

            //Scope Secret
            svc.addScopeSecret = function (scopeSecrets, scopeSecret) {
                return $http.post(scopeSecrets.links.create, scopeSecret)
                    .then(nop, errorHandler("Error Adding Scope Secret"));
            };
            svc.removeScopeSecret = function (scopeSecret) {
                return $http.delete(scopeSecret.links.delete)
                    .then(nop, errorHandler("Error Removing Scope Secret"));
            };
            svc.updateScopeSecret = function (scopeSecret) {
                return $http.put(scopeSecret.links.update, scopeSecret.data)
                    .then(nop, errorHandler("Error updating Scope Secret"));
            };
        });

        return svc;
    }
    idAdmScopes.$inject = ["$http", "idAdmApi", "$log"];
    app.factory("idAdmScopes", idAdmScopes);

})(angular);

(function (angular) {
    var model = document.getElementById("model").textContent.trim();
    model = JSON.parse(model);

    for (var key in model) {
        angular.module("ttidAdm").constant(key, model[key]);
    }
    angular.module("ttidAdm").constant("OidcTokenManager", OidcTokenManager);
})(angular);
