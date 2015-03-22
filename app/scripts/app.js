'use strict';

angular
  .module('recipeBookApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui-rangeSlider',
    'ui.bootstrap'
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
      .when('/recipe/:recipeId', {
        templateUrl: 'views/recipe.html',
        controller: 'RecipeCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
;
