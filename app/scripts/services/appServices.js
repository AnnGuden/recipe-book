'use strict';

angular.module('recipeBookApp')
  .factory('JsonIp', function($http){
    return $http.get('http://jsonip.com?callback=');
  })
  .factory('ManageData', function(){
    return {
      minutesToHoursAndMinutes: function(mins) {
        return {
          "hours": Math.floor(mins / 60),
          "minutes": Math.ceil(mins % 60)
        }

      }
    }

  })
;
