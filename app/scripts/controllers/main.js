'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testApp
 */
angular.module('recipeBookApp')
  .controller('MainCtrl', ['$scope', 'ParseService', function ($scope, ParseService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var Recipes = Parse.Object.extend('Recipes');

    var query = new Parse.Query(Recipes);
    //query.equalTo("myfoo", "bar","arrayCol","objectCol");
    query.find({
      success: function(results) {
        for (var i = 0; i < results.length; i++) {
          var object = results[i];

          (function($) {
            $('#results-table').append('<tr><td>' + object.get('name') + '</td><td>' + object.get('type') + '</td><td>' + object.get('description') + '</td></tr>');
          })(jQuery);
        }
      },
      error: function(error) {
        alert("Error: " + error.code + " " + error.message);
      }
    });

  }]);
