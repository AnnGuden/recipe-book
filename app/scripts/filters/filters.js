angular.module('recipeBookApp')
  .filter('rangeFilter', function() {
    return function( items, rangeInfo ) {
      var filtered = [];
      var min = parseInt(rangeInfo.userMin);
      var max = parseInt(rangeInfo.userMax);
      // If time is with the range
      angular.forEach(items, function(item) {
        if( item.cookingTime >= min && item.cookingTime <= max ) {
          filtered.push(item);
        }
      });
      return filtered;
    };
  });
