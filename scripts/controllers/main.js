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

    $scope.recipe = {
      search: ''
    }

    $scope.fetchRecipe = function() {
      console.log($scope.recipe.search)
      $http.get("http://api.yummly.com/v1/api/recipes?", {
        headers : {
          "X-Yummly-App-ID" : "xxx",
          "X-Yummly-App-Key" : "xxx"},
        params : {"q" : $scope.recipe.search}
      })
      .then(function(response) {
        $scope.details = response.data;
      });
      //
      // $http.get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?", {
      //   headers : {"X-Mashape-Key" : "d93JcjOckUmshXsczST1JtjOCcVMp1BHoYkjsn0290ypBfguF3"},
      //   params : {"query" : $scope.search}
      // })
      // .then(function(response) {
      //   $scope.related = response.data;
      // });
    };

    // $scope.update = function(movie) {
    //   $scope.search = movie.Title
    // };

  });
