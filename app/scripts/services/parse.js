'use strict';

angular.module('recipeBookApp')
  .service('ParseService', [function() {
  var appId = '8bqU89YXrJOZ4PlXUvljrrAjgrkasdtjc9VbXoMx';
  var jsKey = 'KEm74G82Yi0MtsoFuUAw4TVN4KZdnvF5lZOXbLXY';
  Parse.initialize(appId, jsKey);
}]);
