'use strict';

angular
.module('eatrApp')
.controller('apiCtrl', function($scope, $http) {

  $scope.plateThreeIsVisible = false
  $scope.togglePlateThree = function() {
    if($scope.plateThreeIsVisible) {
      $scope.plateThreeIsVisible = false
    }
    else {
      $scope.plateThreeIsVisible = true
    }
  };

  $scope.recipe = {
    search: ''
  }

  $scope.searchRecipes = function() {
    console.log($scope.recipe.search)
    $http.get("https://api.yummly.com/v1/api/recipes?", {
      headers : {
        "X-Yummly-App-ID" : "fff5495f",
        "X-Yummly-App-Key" : "e58fc1567bc839f3c927850b195a954c"},
      params : {
        "q" : $scope.recipe.search,
        "requirePictures" : "true"}
    })
    .then(function(response) {
      $scope.details = response.data;

      $scope.results = [];
      for (var i = 0; i < 10; i++) {
        var recipeName = response.data.matches[i].recipeName
        $scope.results.push({title: recipeName})
      }
      $scope.recipeId = {
        id: $scope.details.matches[0].id
      }
      $scope.fetchRecipeDetails()
    });
  };

  // $scope.recipeId = {
  //   id: ''
  // }

  $scope.fetchRecipeDetails = function() {
    $http.get("https://api.yummly.com/v1/api/recipe/" + $scope.recipeId.id, {
      headers : {
        "X-Yummly-App-ID" : "fff5495f",
        "X-Yummly-App-Key" : "e58fc1567bc839f3c927850b195a954c"}
      })
      .then(function(response) {
        $scope.lines = [];
        $scope.idDetails = response.data
        for (var i = 0; i < 100; i++) {
          var recipeIngredients = response.data.ingredientLines[i]
          $scope.lines.push({ingredients: recipeIngredients})
        }
      });
    };

});
