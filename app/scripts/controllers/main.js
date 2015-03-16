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
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    Recipes.getAll().success(function(data){
      $scope.recipes = data.results;
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

  }]);
