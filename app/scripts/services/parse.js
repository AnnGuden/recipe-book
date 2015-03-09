'use strict';

angular.module('testApp')
  .service('ParseService', [function() {
  var appId = 'Ja3nx6KBGW6mhLR6yWIa54wZDvQcZBvoyp5TCfra';
  var jsKey = 'ZAcQtzPaxsTJnwxyPS8Kq1HTUmpkxDDYHiddaA28';
  Parse.initialize(appId, jsKey);
}]);
