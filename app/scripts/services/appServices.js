'use strict';

angular.module('recipeBookApp')
  .factory('JsonIp', function($http){
    return $http.get('http://jsonip.com?callback=');
  })
;
