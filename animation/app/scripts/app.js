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
        templateUrl: 'views/view.html'
      })
      .when('/view1', {
        templateUrl: 'views/view1.html'
      })
      .when('/view2', {
        templateUrl: 'views/view2.html'
      })
      .when('/view3', {
        templateUrl: 'views/view3.html'
      })

      .otherwise({
        redirectTo: '/'
      });
  });
