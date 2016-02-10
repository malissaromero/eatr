'use strict';

angular
.module('eatrApp')
.controller('mainCtrl', ['$scope', '$firebase',
  function($scope, $firebaseArray) {

    var url = "https://eatr.firebaseio.com/recipes";
    var fireRef = new Firebase(url);

    fireRef.set({
      "recipe1": {
        "name": "Squash Spaghetti",
        "ingredients": "Salt, Pepper, Squash",
        "calories" : "400"
      },
      "recipe2": {
        "name": "Bolongne Sandwich",
        "ingredients": "Cheese, Tomato, Bread",
        "calories": "500"
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
    // $scope.$watch('search', function() {
    //   fetch();
    // });

    $scope.search = "Hamburger";

    $scope.fetch = function fetch() {
      var appId = "fff5495f";
      var keyId = "a462dbaf1a40d7b1e6f8e222b4b91f14"
      $http.get("http://api.yummly.com/v1/api/recipes?_app_id=" + appId + "&_app_key=" + keyId + "&" + $scope.search, {
        params : {}
      })
      .then(function(response) {
        $scope.details = response.data;
      });
    }

    $scope.update = function(name) {
      $scope.search = movie.name;
    };

    $scope.select = function() {
      this.setSelectionRange(0, this.value.length);
    }
  });
