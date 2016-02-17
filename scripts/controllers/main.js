'use strict';

angular
.module('eatrApp')
.controller('mainCtrl', ['$scope', '$firebase',
  function($scope, $firebaseArray) {

    var url = "https://eatr.firebaseio.com/recipes";
    var fireRef = new Firebase(url);

    fireRef.set({
      "recipe1": {
        "name": "PB&J Sandwich",
        "ingredients": "Peanut Butter, Jelly, Bread"
      },
      "recipe2": {
        "name": "Macaroni and Cheese",
        "ingredients": "Cheese, Macaroni"
      },
      "recipe3": {
        "name": "Grilled Cheese",
        "ingredients": "American Cheddar, Bread"
      }
    })

    $scope.recipes = $firebaseArray(fireRef);

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
      $scope.recipes.$add({
        name: $scope.recipe.name,
        ingredients: $scope.recipe.ingredients,
        calories: $scope.recipe.calories
      });
      $scope.reset()
    };

    this.editRecipe = function(index) {
      var recipe = this.recipes[index];
        this.name = recipe.name;
        this.ingredients = recipe.ingredients;
        this.calories = recipe.calories;
      recipe.$save();
    };

    $scope.deleteRecipe = function(key, recipe) {
      $scope.recipes.$remove(key);
    };

  }
  ])
  .controller('apiCtrl', function($scope, $http) {

    $scope.recipe = {
      search: ''
    }

    $scope.fetchRecipes = function() {
      console.log($scope.recipe.search)
      $http.get("http://api.yummly.com/v1/api/recipes?", {
        headers : {
          },
        params : {
          "q" : $scope.recipe.search,
          "requirePictures" : "true"}
      })
      .then(function(response) {
        $scope.details = response.data;
      });
    };

    $scope.recipeId = {
      id: 'Bourbon-Burger-1303425'
    }

    $scope.fetchRecipeId = function() {
      $http.get("http://api.yummly.com/v1/api/recipe/" + $scope.recipeId.id, {
        headers : {
          "X-Yummly-App-ID" : "fff5495f",
          "X-Yummly-App-Key" : "a462dbaf1a40d7b1e6f8e222b4b91f14"}
        })
        .then(function(response) {
          $scope.idDetails = response.data
        });
      };

  });
