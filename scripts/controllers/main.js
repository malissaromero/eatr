'use strict';

angular
.module('eatrApp')
.controller('mainCtrl', ['$scope', 'dataService', '$firebase',
  function($scope, dataService, $firebaseArray) {

    var url = "https://eatr.firebaseio.com/recipes";
    var fireRef = new Firebase(url);

    $scope.recipes = $firebaseArray(fireRef);

    dataService.getRecipes(function(response) {
      console.log(response.data)
      $scope.recipes = response.data;
    });

    $scope.formIsVisible = false
    $scope.toggleForm = function() {
      if($scope.formIsVisible) {
        $scope.formIsVisible = false
      }
      else {
        $scope.formIsVisible = true
      }
    };

    $scope.reset = function() {
      $scope.recipe.name = "";
      $scope.recipe.ingredients = "";
      $scope.recipe.calories = "";
    };

    $scope.createRecipe = function() {
      $scope.recipes.unshift({
        name: $scope.recipe.name,
        ingredients: $scope.recipe.ingredients,
        calories: $scope.recipe.calories
      });
      $scope.reset()
    };

    $scope.saveRecipe = function(recipe) {
      dataService.saveRecipe(recipe);
    }

    $scope.deleteRecipe = function(index, recipe) {
      dataService.deleteRecipe(recipe);
      $scope.recipes.splice(index, 1);
    };

  }
  ]);
