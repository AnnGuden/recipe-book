'use strict';

angular.module('recipeBookApp')
  .controller('MainCtrl', ['$scope', 'Recipes', function ($scope, Recipes) {

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
    ];

    Recipes.getAll().success(function(data){
      $scope.recipes = data.results;

      $scope.types = [];

      for(var i = 0; i < $scope.recipes.length; i++) {
        if ($scope.types.indexOf($scope.recipes[i].type) === -1) {
          $scope.types.push($scope.recipes[i].type);
        }
      }

      $scope.totalItems = $scope.recipes.length;
      $scope.currentPage = 1;
      $scope.itemsPerPage = 5;

      //$scope.setPage = function (pageNo) {
      //  $scope.currentPage = pageNo;
      //};
      //
      //$scope.pageCount = function () {
      //  return Math.ceil($scope.recipes.length / $scope.itemsPerPage);
      //};

      //$scope.$watch('currentPage + itemsPerPage', function() {
      //  var begin = (($scope.currentPage - 1) * $scope.itemsPerPage),
      //    end = begin + $scope.itemsPerPage;
      //
      //  $scope.filteredRecipes = $scope.recipes.slice(begin, end);
      //});

      $scope.recipesToDisplay = function() {
        var begin = (($scope.currentPage - 1) * $scope.itemsPerPage);
        var end = begin + $scope.itemsPerPage;
        $scope.filteredRecipes = $scope.recipes.slice(begin, end);
      };

      $scope.recipesToDisplay();

      $scope.pageChanged = function() {
        $scope.recipesToDisplay();
      };


    });



  }])
  .controller('RecipeCtrl', ['$scope', 'Recipes', 'JsonIp', '$routeParams', 'ManageData', function ($scope, Recipes, JsonIp, $routeParams, ManageData) {

    Recipes.get($routeParams.recipeId).success(function (data) {
      $scope.recipe = data;

      $scope.time = ManageData.minutesToHoursAndMinutes($scope.recipe.cookingTime);
      //$scope.cookingTimeHours = time.hours > 0 ? time.hours + ' hr' : '';
      //$scope.cookingTimeMinutes = time.minutes > 0 ? time.minutes + ' mins' : '';

    });

    JsonIp.success(function(data) {
      $scope.clientIp = data.ip;
    });

    $scope.addUserLike = function () {

      if(typeof $scope.recipe.userLikes ==='undefined'){
        $scope.recipe.userLikes = [];
      }

      var index = $scope.recipe.userLikes.indexOf($scope.clientIp);

      if (index == -1) {
        $scope.recipe.userLikes.push($scope.clientIp);
      }
      else{
        $scope.recipe.userLikes.splice(index,1);
      }

      Recipes.edit($routeParams.recipeId, $scope.recipe);

    };

  }]);
