'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testApp
 */
angular.module('recipeBookApp')
  .controller('MainCtrl', ['$scope', 'ParseObject', 'ParseQuery', function ($scope, ParseObject, ParseQuery) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    //field schema
    var fields = [
      'name',
      'type',
      'description',
      'instructions'
    ];
    var Recipes = Parse.Object.extend('Recipes');

    //instantiate new contact record
    $scope.newRecipe = new ParseObject('Recipes', fields);

    //retrieve first record
    var firstRecordQuery = new Parse.Query(Recipes);

    ParseQuery(firstRecordQuery, {functionToCall:'first'}).then(function(obj){
      $scope.firstRecipe = new ParseObject(obj, fields);
    });

    function getAllRecipes(){
      var query = new Parse.Query(Recipes);
      ParseQuery(query, {functionToCall:'find'}).then(function(data){
        $scope.allRecipes = [];
        for(var i=0; i<data.length; i++)
        {
          $scope.allRecipes.push(new ParseObject(data[i],fields));
        }
      })
    }

    getAllRecipes();

  }]);
