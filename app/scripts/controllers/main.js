'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testApp
 */
angular.module('recipeBookApp')
  .controller('MainCtrl', ['$scope', 'Recipes', function ($scope, Recipes, JsonIp) {

    //$scope.types = [
    //  'main',
    //  'salad',
    //  'drink',
    //  'dessert',
    //  'pizza',
    //  'soup',
    //  'side'
    //];

    //TO DO: refactor
    Recipes.getAll().success(function(data){
      $scope.recipes = data.results;

      $scope.types = [];

      for(var i = 0; i < $scope.recipes.length; i++) {
        if ($scope.types.indexOf($scope.recipes[i].type) == -1) {
          $scope.types.push($scope.recipes[i].type);
        }
      }

    });

  }])
  .controller('RecipeCtrl', ['$scope', 'Recipes', 'JsonIp', '$routeParams', function ($scope, Recipes, JsonIp, $routeParams) {

    //$scope.numberUserLikes='';
    //$scope.clientIp = '';

    Recipes.get($routeParams.recipeId).success(function (data) {
      $scope.recipe = data;
      $scope.numberUserLikes = data.userLikes.length;
    });

    JsonIp.success(function(data) {
      $scope.clientIp = data.ip;
    });

    //$scope.addIp =function(userip) {
    //  $scope.iparr.push(userip);
    //};


    $scope.addUserLike = function () {
      Recipes.edit($scope.recipe.objectId, {test: $scope.iparr});
    };

    //["10.252.227.60","87.252.225.62"]

    $scope.demo1 = {
      min: 20,
      max: 80
    };

  }]);
