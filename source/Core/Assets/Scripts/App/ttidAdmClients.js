/// <reference path="../Libs/angular.min.js" />
/// <reference path="../Libs/angular-route.min.js" />

(function (angular) {

    var app = angular.module("ttidAdmClients", ['ngRoute', 'ttidAdm', 'ttidAdmUI']);
    function config($routeProvider, PathBase) {
        $routeProvider
            .when("/clients/list/:filter?/:page?", {
                controller: 'ListClientsCtrl',
                resolve: { clients: "idAdmClients" },
                templateUrl: PathBase + '/assets/Templates.clients.list.html'
            })
            .when("/clients/create", {
                controller: 'NewClientCtrl',
                resolve: {
                    api: function (idAdmApi) {
                        return idAdmApi.get();
                    }
                },
                templateUrl: PathBase + '/assets/Templates.clients.new.html'
            })
            .when("/clients/edit/:subject", {
                controller: 'EditClientCtrl',
                resolve: { clients: "idAdmClients" },
                templateUrl: PathBase + '/assets/Templates.clients.edit.html'
            });
    }
    config.$inject = ["$routeProvider", "PathBase"];
    app.config(config);

    function ListClientsCtrl($scope, idAdmClients, idAdmPager, $routeParams, $location) {
        var model = {
            message : null,
            clients : null,
            pager : null,
            waiting : true,
            filter : $routeParams.filter,
            page : $routeParams.page || 1
        };
        $scope.model = model;

        $scope.search = function (filter) {
            var url = "/clients/list";
            if (filter) {
                url += "/" + filter;
            }
            $location.url(url);
        };

        var itemsPerPage = 10;
        var startItem = (model.page - 1) * itemsPerPage;

        idAdmClients.getClients(model.filter, startItem, itemsPerPage).then(function (result) {
            $scope.model.waiting = false;
            $scope.model.clients = result.data.items;
            if (result.data.items && result.data.items.length) {
                $scope.model.pager = new idAdmPager(result.data, itemsPerPage);
            }
        }, function (error) {
            $scope.model.message = error;
            $scope.model.waiting = false;
        });
    }
    ListClientsCtrl.$inject = ["$scope", "idAdmClients", "idAdmPager", "$routeParams", "$location"];
    app.controller("ListClientsCtrl", ListClientsCtrl);

    function NewClientCtrl($scope, idAdmClients, api, ttFeedback) {
        var feedback = new ttFeedback();
        $scope.feedback = feedback;
        if (!api.links.createClient) {
            feedback.errors = "Create Not Supported";
            return;
        }
        else {
            var properties = api.links.createClient.meta
                .map(function (item) {
                    return {
                        meta : item,
                        data : item.dataType === 5 ? false : undefined
                    };
                });
            $scope.properties = properties;
            $scope.create = function (properties) {
                var props = properties.map(function (item) {
                    return {
                        type: item.meta.type,
                        value: item.data
                    };
                });
                idAdmClients.createClient(props)
                    .then(function (result) {
                        $scope.last = result;
                        feedback.message = "Create Success";
                    }, feedback.errorHandler);
            };
        }
    }
    NewClientCtrl.$inject = ["$scope", "idAdmClients", "api", "ttFeedback"];
    app.controller("NewClientCtrl", NewClientCtrl);

    function EditClientCtrl($scope, idAdmClients, $routeParams, ttFeedback, $location) {
        var feedback = new ttFeedback();
        $scope.feedback = feedback;

        function loadClient() {
            return idAdmClients.getClient($routeParams.subject)
                .then(function (result) {
                    $scope.client = result;
                    if (!result.data.properties) {
                        $scope.tab = 1;
                    }

                }, feedback.errorHandler);
        };
        loadClient();

        $scope.setProperty = function (property) {
            idAdmClients.setProperty(property)
                .then(function () {
                    if (property.meta.dataType !== 1) {
                        feedback.message = property.meta.name + " Changed to: " + property.data;
                    }
                    else {
                        feedback.message = property.meta.name + " Changed";
                    }
                    loadClient();
                }, feedback.errorHandler);
        };

        $scope.deleteClient = function (client) {
         idAdmClients.deleteClient(client)
                .then(function () {
                    feedback.message = "Client Deleted";
                    $scope.client = null;
                    $location.path('/clients/list');
                }, feedback.errorHandler);
        };

        //Claims
        $scope.addClientClaim = function (claims, claim) {
            idAdmClients.addClientClaim(claims, claim)
                .then(function () {
                    feedback.message = "Claim Added : " + claim.type + ", " + claim.value;
                    loadClient();
                }, feedback.errorHandler);
        };
        $scope.removeClientClaim = function (claim) {
            idAdmClients.removeClientClaim(claim)
                .then(function () {
                    feedback.message = "Claim Removed : " + claim.data.type + ", " + claim.data.value;
                    loadClient().then(function () {
                        $scope.claim = claim.data;
                    });
                }, feedback.errorHandler);
        };
        //Client Secret
        $scope.availableHashes = {
            chosenHash: "SHA-512",
            choices:[
            {
                id: "SHA-256",
                text: "SHA-256",
                isDefault: "false"
            }, {
                id: "SHA-512",
                text: "SHA-512",
                isDefault: "true"
            }
            ]
        };
        function calculateClientHash (clientSecret) {
            var hashObj = new jsSHA(
				$scope.availableHashes.chosenHash,
				"TEXT",
				{ numRounds: parseInt(1, 10) }
			);
            hashObj.update(clientSecret.value);
            clientSecret.value = hashObj.getHash("B64");
        }
        $scope.addClientSecret = function (clientSecrets, clientSecret) {
            calculateClientHash(clientSecret);
            idAdmClients.addClientSecret(clientSecrets, clientSecret)
                .then(function () {
                    feedback.message = "Client Secret Added : " + clientSecret.type + ", " + clientSecret.value;
                    clientSecret.type = "";
                    clientSecret.value = "";
                    loadClient();
                }, feedback.errorHandler);
        };
        $scope.removeClientSecret = function (clientSecret) {
            idAdmClients.removeClientSecret(clientSecret)
                .then(function () {
                    feedback.message = "Client Secret Removed : " + clientSecret.data.type + ", " + clientSecret.data.value;
                    loadClient().then(function () {
                        $scope.clientSecret = clientSecret.data;
                    });
                }, feedback.errorHandler);
        };
        //IdentityProviderRestriction
        $scope.addIdentityProviderRestriction = function (identityProviderRestrictions, identityProviderRestriction) {
            idAdmClients.addIdentityProviderRestriction(identityProviderRestrictions, identityProviderRestriction)
                .then(function () {
                    feedback.message = "Client Provider Restriction Added : " + identityProviderRestriction.provider;
                    loadClient();
                }, feedback.errorHandler);
        };
        $scope.removeIdentityProviderRestriction = function (identityProviderRestriction) {
            idAdmClients.removeIdentityProviderRestriction(identityProviderRestriction)
                .then(function () {
                    feedback.message = "Client  Provider Restriction Removed : " + identityProviderRestriction.provider;
                    loadClient().then(function () {
                        $scope.identityProviderRestriction = identityProviderRestriction.data;
                    });
                }, feedback.errorHandler);
        };
        //PostLogoutRedirectUri
        $scope.addPostLogoutRedirectUri = function (postLogoutRedirectUris, postLogoutRedirectUri) {
            idAdmClients.addPostLogoutRedirectUri(postLogoutRedirectUris, postLogoutRedirectUri)
                .then(function () {
                    feedback.message = "Client Post Logout Redirect Uri : " + postLogoutRedirectUri.uri;
                    loadClient();
                }, feedback.errorHandler);
        };
        $scope.removePostLogoutRedirectUri = function (postLogoutRedirectUri) {
            idAdmClients.removePostLogoutRedirectUri(postLogoutRedirectUri)
                .then(function () {
                    feedback.message = "Client Post Logout Redirect Uri  Removed : " + postLogoutRedirectUri.data.uri;
                    loadClient().then(function () {
                        $scope.postLogoutRedirectUri = postLogoutRedirectUri.data;
                    });
                }, feedback.errorHandler);
        };
        //RedirectUri
        $scope.addRedirectUri = function (redirectUris, redirectUri) {
            idAdmClients.addRedirectUri(redirectUris, redirectUri)
                .then(function () {
                    feedback.message = "Client redirect uri : " + redirectUri.uri;
                    loadClient();
                }, feedback.errorHandler);
        };
        $scope.removeRedirectUri = function (redirectUri) {
            idAdmClients.removeRedirectUri(redirectUri)
                .then(function () {
                    feedback.message = "Client redirect uri removed : " + redirectUri.data.uri;
                    loadClient().then(function () {
                        $scope.redirectUri = redirectUri.data;
                    });
                }, feedback.errorHandler);
        };
        //AllowedCorsOrigin
        $scope.addAllowedCorsOrigin = function (allowedCorsOrigins, allowedCorsOrigin) {
            idAdmClients.addAllowedCorsOrigin(allowedCorsOrigins, allowedCorsOrigin)
                .then(function () {
                    feedback.message = "Client allowed cors : " + allowedCorsOrigin.origin;
                    loadClient();
                }, feedback.errorHandler);
        };
        $scope.removeAllowedCorsOrigin = function (allowedCorsOrigin) {
            idAdmClients.removeAllowedCorsOrigin(allowedCorsOrigin)
                .then(function () {
                    feedback.message = "Client allowed cors removed : " + allowedCorsOrigin.data.origin;
                    loadClient().then(function () {
                        $scope.allowedCorsOrigin = allowedCorsOrigin.data;
                    });
                }, feedback.errorHandler);
        };
        //AllowedGrantType
        $scope.addAllowedCustomGrantType = function (grantTypes, grantType) {
            idAdmClients.addAllowedCustomGrantType(grantTypes, grantType)
                .then(function () {
                    feedback.message = "Client grant type : " + grantType.grantType;
                    loadClient();
                }, feedback.errorHandler);
        };
        $scope.removeAllowedCustomGrantType = function (grantType) {
            idAdmClients.removeAllowedCustomGrantType(grantType)
                .then(function () {
                    feedback.message = "Client grant type removed : " + grantType.data.grantType;
                    loadClient().then(function () {
                        $scope.grantType = grantType.data;
                    });
                }, feedback.errorHandler);
        };
        //AllowedScope
        $scope.addAllowedScope = function (scopes, scope) {
            idAdmClients.addAllowedScope(scopes, scope)
                .then(function () {
                    feedback.message = "Client scope : " + scope.scope;
                    loadClient();
                }, feedback.errorHandler);
        };
        $scope.removeAllowedScope = function (scope) {
            idAdmClients.removeAllowedScope(scope)
                .then(function () {
                    feedback.message = "Client scope removed : " + scope.data.scope;
                    loadClient().then(function () {
                        $scope.allowedScope = scope.data;
                    });
                }, feedback.errorHandler);
        };
    }  
    EditClientCtrl.$inject = ["$scope", "idAdmClients", "$routeParams", "ttFeedback", "$location"];
    app.controller("EditClientCtrl", EditClientCtrl);

})(angular);
