'use strict';

angular.module('animationApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ngAnimate'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
      })
      .when('/repeat', {
        templateUrl: 'views/repeat.html',
        controller: 'MainCtrl'
      })
      .when('/view', {
        templateUrl: 'views/view.html',
        controller: function($scope) {
            $scope.viewAnimation = 'view-opacity';
        }
      })
      .when('/Position', {
        templateUrl: 'views/position.html',
        controller: function($scope) {
            $scope.viewAnimation = 'view-position';
        }
      })
      .when('/Scale', {
        templateUrl: 'views/scale.html',
        controller: function($scope) {
            $scope.viewAnimation = 'view-scale';
        }
      })
      .when('/Rotation', {
        templateUrl: 'views/rotation.html',
        controller: function($scope) {
            $scope.viewAnimation = 'view-rotation';
        }
      })
      .when('/Opacity', {
        templateUrl: 'views/opacity.html',
        controller: function($scope) {
            $scope.viewAnimation = 'view-opacity';
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  });
