'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testApp
 */
angular.module('recipeBookApp')
  .controller('MainCtrl', ['$scope', 'Recipes', function ($scope, Recipes) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    Recipes.getAll().success(function(data){
      $scope.recipes = data.results;
    })

  }])
  .controller('RecipeCtrl', ['$scope', 'Recipes', '$routeParams', function ($scope, Recipes, $routeParams) {

      Recipes.get($routeParams.recipeId).success(function (data) {
        $scope.recipe = data;

      })

  }]);
