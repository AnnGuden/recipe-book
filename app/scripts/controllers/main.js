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

    //var Recipes = Parse.Object.extend('Recipes');
    //
    //var query = new Parse.Query(Recipes);
    ////query.equalTo("myfoo", "bar","arrayCol","objectCol");
    //query.find({
    //  success: function(results) {
    //    for (var i = 0; i < results.length; i++) {
    //      var object = results[i];
    //
    //      (function($) {
    //        $('#results-table').append('<tr><td>' + object.get('name') + '</td><td>' + object.get('type') + '</td><td>' + object.get('description') + '</td></tr>');
    //      })(jQuery);
    //    }
    //  },
    //  error: function(error) {
    //    alert("Error: " + error.code + " " + error.message);
    //  }
    //});

    //field schema
    var fields = [
      'type',
      'name'
    ];
    var Contact = Parse.Object.extend('Recipes');
//instantiate new contact record
    $scope.newContact = new ParseObject('Recipes', fields);
//retrieve first record
    var firstRecordQuery = new Parse.Query(Contact);
    ParseQuery(firstRecordQuery, {functionToCall:'first'}).then(function(obj){
      $scope.firstContact = new ParseObject(obj, fields);
    });
    function getAllContacts(){
      var query = new Parse.Query(Contact);
      ParseQuery(query, {functionToCall:'find'}).then(function(contacts){
        $scope.allContacts = [];
        for(var i=0; i<contacts.length; i++)
        {
          $scope.allContacts.push(new ParseObject(contacts[i],fields));
        }
      })
    }
    getAllContacts();

  }]);
