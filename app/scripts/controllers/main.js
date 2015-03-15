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

  }]);
