'use strict';

angular.module('recipeBookApp')
  .filter('rangeFilter', function() {
    return function( items, rangeInfo ) {
      var filtered = [];
      var min = parseInt(rangeInfo.userMin);
      var max = parseInt(rangeInfo.userMax);
      angular.forEach(items, function(item) {
        if( item.cookingTime >= min && item.cookingTime <= max ) {
          filtered.push(item);
        }
      });
      return filtered;
    };
  })
  .filter('startFrom', function () {
    return function (input, start) {
      if (input) {
        start = +start;
        return input.slice(start);
      }
      return [];
    };
  });
