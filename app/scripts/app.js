'use strict';

/**
 * @ngdoc overview
 * @name testApp
 * @description
 * # testApp
 *
 * Main module of the application.
 */
angular
  .module('recipeBookApp', [
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
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })

.run(function() { // instance-injector
                            // This is an example of a run block.
                            // You can have as many of these as you want.
                            // You can only inject instances (not Providers)
                            // into run blocks
    var appId = '8bqU89YXrJOZ4PlXUvljrrAjgrkasdtjc9VbXoMx';
  var jsKey = 'KEm74G82Yi0MtsoFuUAw4TVN4KZdnvF5lZOXbLXY';
  Parse.initialize(appId, jsKey);
});
