'use strict';

angular.module('uiRouterApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router'
])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");

    $stateProvider
        .state('contacts', {
            url: "/home",
            templateUrl: "views/main.html",
            controller:  "MainCtrl"
        })
        .state('detail', {
            url: "/detail",
            views: {
                "": {templateUrl: "views/main.html"},
                "detail": {
                    template: "<div> detail </div>",
                    controller: function() { console.log("123") }
                },
                "list": {
                    template: "<div> list </div>",
                    controller: function() { console.log("123") }
                }
            }
        })
  });
