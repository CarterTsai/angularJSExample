'use strict';

angular.module('uiRouterApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ngAnimate'
])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state('root', {
            url: "",
            controller: function($scope) {
                $scope.viewAnimation = 'side-panel';
                console.log($scope.viewAnimation);
            }
        })
        .state('view1', {
            url: "/view1",
            templateUrl: "views/view1.html",
            controller: function($scope) {
                $scope.viewAnimation = 'side-panel';
            }
        })
        .state('view2', {
            url: "/view2",
            templateUrl: "views/view2.html", 
            controller: function($scope) {
                $scope.viewAnimation = 'view-position';
            }
        })
  });
