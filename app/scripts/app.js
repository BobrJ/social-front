'use strict';

/**
 * @ngdoc overview
 * @name socialFrontApp
 * @description
 * # socialFrontApp
 *
 * Main module of the application.
 */
angular
  .module('socialFrontApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
