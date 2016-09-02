/// <reference path="../Libs/angular.min.js" />
/// <reference path="../Libs/angular-route.min.js" />

(function (angular) {

    var app = angular.module("ttidAdmApp", ['ngRoute', 'ttidAdm', 'ttidAdmUI',  'ttidAdmClients', 'ttidAdmScopes']);
    function config(PathBase, $routeProvider) {
        $routeProvider
            .when("/home", {
                controller: 'HomeCtrl',
                templateUrl: PathBase + '/assets/Templates.home.html'
            })
            .when("/logout", {
                templateUrl: PathBase + '/assets/Templates.home.html'
            })
            .when("/callback/:response", {
                templateUrl: PathBase + '/assets/Templates.message.html', 
                controller: 'CallbackCtrl'
            })
            .when("/error", {
                templateUrl: PathBase + '/assets/Templates.message.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    }
    config.$inject = ["PathBase", "$routeProvider"];
    app.config(config);

    function LayoutCtrl($rootScope, SiteName, PathBase, idAdmApi, $location, $window, idAdmTokenManager, idAdmErrorService, ShowLoginButton) {
        $rootScope.PathBase = PathBase;
        $rootScope.layout = {};
        $rootScope.layout.sitename = SiteName;

        function removed() {
            idAdmErrorService.clear();
            $rootScope.layout.username = null;
            $rootScope.layout.links = null;
            $rootScope.layout.showLogout = !idAdmTokenManager.expired;
            $rootScope.layout.showLogin = idAdmTokenManager.expired;
        }

        function load() {
            removed();

            if (!idAdmTokenManager.expired) {
                idAdmApi.get().then(function (api) {
                    $rootScope.layout.username = api.data.currentUser.username;
                    $rootScope.layout.links = api.links;
                }, function (err) {
                    idAdmErrorService.show(err);
                });
            }
        }

        idAdmTokenManager.addOnTokenObtained(load);
        idAdmTokenManager.addOnTokenRemoved(removed);
        load();

        if (idAdmTokenManager.expired &&
            $location.path() !== "/" &&
            $location.path().indexOf("/callback/") !== 0 && 
            $location.path() !== "/error" && 
            $location.path() !== "/logout") {
                $location.path("/");
        }

        idAdmTokenManager.addOnTokenExpired(function () {
            $location.path("/");
            idAdmErrorService.show("Your session has expired.");
        });

        $rootScope.login = function () {
            idAdmErrorService.clear();
            idAdmTokenManager.redirectForToken();
        }
        $rootScope.logout = function () {
            idAdmErrorService.clear();
            idAdmTokenManager.removeToken();
            $location.path("/logout");
            if (ShowLoginButton !== false) {
                $window.location = PathBase + "/logout";
            }
        }

        $rootScope.toggle = function () {
            $('.navbar-nav').toggleClass('slide-in');
            $('.side-body').toggleClass('body-slide-in');
        }
       
    }
    LayoutCtrl.$inject = ["$rootScope", "SiteName", "PathBase", "idAdmApi", "$location", "$window", "idAdmTokenManager", "idAdmErrorService", "ShowLoginButton"];
    app.controller("LayoutCtrl", LayoutCtrl);

    function HomeCtrl(ShowLoginButton, idAdmTokenManager, $routeParams) {
        if (ShowLoginButton === false && idAdmTokenManager.expired) {
            idAdmTokenManager.redirectForToken();
        }
    }
    HomeCtrl.$inject = ["ShowLoginButton", "idAdmTokenManager", "$routeParams"];
    app.controller("HomeCtrl", HomeCtrl);

    function CallbackCtrl(idAdmTokenManager, $location, $rootScope, $routeParams, idAdmErrorService) {
        var hash = $routeParams.response;
        if (hash.charAt(0) === "&") {
            hash = hash.substr(1);
        }
        idAdmTokenManager.processTokenCallbackAsync(hash).then(function() {
            $location.url("/");
        }, function (error) {
            idAdmErrorService.error(error && error.message || error);
        });
    }
    CallbackCtrl.$inject = ["idAdmTokenManager", "$location", "$rootScope", "$routeParams", "idAdmErrorService"];
    app.controller("CallbackCtrl", CallbackCtrl);
})(angular);
