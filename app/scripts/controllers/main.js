'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testApp
 */
angular.module('testApp')
  .controller('MainCtrl', ['$scope', 'ParseService', function ($scope, ParseService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var TestObject = Parse.Object.extend("TestObject");

    var query = new Parse.Query(TestObject);
    query.equalTo("myfoo", "bar","arrayCol","objectCol");
    query.find({
      success: function(results) {
        for (var i = 0; i < results.length; i++) {
          var object = results[i];

          (function($) {
            $('#results-table').append('<tr><td>' + object.get('myfoo') + '</td><td>' + object.get('score') + '</td><td>' + object.get('arrayCol') + '</td></tr>');
          })(jQuery);
        }
      },
      error: function(error) {
        alert("Error: " + error.code + " " + error.message);
      }
    });

  }]);
