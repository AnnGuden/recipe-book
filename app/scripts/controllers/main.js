'use strict';

angular.module('recipeBookApp')
  .controller('MainCtrl', ['$scope', 'Recipes', function ($scope, Recipes, JsonIp) {

    //$scope.types = [
    //  'main',
    //  'salad',
    //  'drink',
    //  'dessert',
    //  'pizza',
    //  'soup',
    //  'side'
    //];

    //TO DO: refactor
    Recipes.getAll().success(function(data){
      $scope.recipes = data.results;

      $scope.types = [];

      for(var i = 0; i < $scope.recipes.length; i++) {
        if ($scope.types.indexOf($scope.recipes[i].type) == -1) {
          $scope.types.push($scope.recipes[i].type);
        }
      }

    });

    $scope.sliderConfig = {
      min: 0,
      max: 200,
      userMin: 0,
      userMax: 300
    };

    $scope.sortProperties = [
      {value:'name', text: 'Name (A-Z)'},
      {value:'-name', text: 'Name (Z-A)'},
      {value:'createdAt', text: 'Date created '}
    ]

  }])
  .controller('RecipeCtrl', ['$scope', 'Recipes', 'JsonIp', '$routeParams', function ($scope, Recipes, JsonIp, $routeParams) {

    //$scope.numberUserLikes='';
    //$scope.clientIp = '';

    Recipes.get($routeParams.recipeId).success(function (data) {
      $scope.recipe = data;
      //$scope.numberUserLikes = data.userLikes.length;
      //$scope.created_at_date = ($scope.recipe.createdAt.getUTCMonth()+1) + "/" + $scope.recipe.createdAt.getUTCDate() + "/" + $scope.recipe.createdAt.getUTCFullYear();
      //console.log($scope.recipe.createdAt)

      //TO DO: refactor
      var time = $scope.convertMinutes($scope.recipe.cookingTime);
      if (time.h > 0) {
        $scope.cookingTimeHours = time.h + ' h';
      } else $scope.cookingTimeHours = '';
      if (time.m >= 0) {
        $scope.cookingTimeMinutes = time.m + ' min';
      } else $scope.cookingTimeMinutes = '';

    });

    JsonIp.success(function(data) {
      $scope.clientIp = data.ip;
    });

    //$scope.addIp =function(userip) {
    //  $scope.iparr.push(userip);
    //};


    $scope.addUserLike = function () {
      Recipes.edit($scope.recipe.objectId, {test: $scope.iparr});
    };

    //["10.252.227.60","87.252.225.62"]

    $scope.convertMinutes = function minutesToHours(mins)
    {
      var hours = Math.floor(mins / 60);

      var divisor_for_minutes = mins % 60;
      var minutes = Math.ceil(divisor_for_minutes);

      var obj = {
        "h": hours,
        "m": minutes
      };
      return obj;
    };


  }]);
