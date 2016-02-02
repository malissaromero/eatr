'use strict';

angular
.module('eatrApp')
.controller('mainCtrl', ['$scope', '$firebase',
  function($scope, $firebaseArray) {

    var url = "https://glowing-heat-1887.firebaseio.com/recipes";
    var fireRef = new Firebase(url);

    $scope.recipes = $firebaseArray(fireRef);

    fireRef.set({
      recipe1: {
        name: "Squash Spaghetti",
        ingredients: "Salt, Pepper, Squash",
        calories: "400"
      }
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

  }
  ]);

  // dataService.getRecipes(function(response) {
  //   $scope.recipes = response.data;
  // });
  //
  // $scope.addRecipe = function() {
  //   $scope.recipes.unshift(recipe);
  // };
  //
  // $scope.deleteRecipe = function(recipe, $index) {
  //   dataService.deleteRecipe(recipe);
  //   $scope.recipes.splice($index, 1);
  // };
  //
  // $scope.saveRecipes = function() {
  //
  // }
