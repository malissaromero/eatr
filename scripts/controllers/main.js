'use strict';

angular
.module('eatrApp')
.controller('mainCtrl', ['$scope', 'dataService', '$firebase',
  function($scope, dataService, $firebaseArray) {

    var url = "https://glowing-heat-1887.firebaseio.com/recipes";
    var fireRef = new Firebase(url);

    $scope.recipes = $firebaseArray(fireRef);

    dataService.getRecipes(function(response) {
      $scope.recipes = response.data;
    });

    $scope.createRecipe = function(recipe) {
      $scope.recipes.unshift(recipe);
    };

    $scope.deleteRecipe = function(recipe, $index) {
      dataService.deleteRecipe(recipe);
      $scope.recipes.splice($index, 1);
    };

    $scope.saveRecipes = function() {
      dataService.saveRecipe(recipe);
    }

    $scope.formIsVisible = false
    $scope.toggleForm = function() {
      if($scope.formIsVisible) {
        $scope.formIsVisible = false
      }
      else {
        $scope.formIsVisible = true
      }
    };

  }
  ]);
