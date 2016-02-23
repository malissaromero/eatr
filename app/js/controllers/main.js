'use strict';

angular
.module('eatrApp')
.controller('mainCtrl', ['$scope', '$firebaseArray',
  function($scope, $firebaseArray) {

    var url = "https://eatr.firebaseio.com/recipes";
    var fireRef = new Firebase(url);

    // fireRef.set({
    //   "recipe1": {
    //     "name": "PB&J Sandwich",
    //     "ingredients": "Peanut Butter, Jelly, Bread"
    //   },
    //   "recipe2": {
    //     "name": "Macaroni and Cheese",
    //     "ingredients": "Cheese, Macaroni"
    //   },
    //   "recipe3": {
    //     "name": "Grilled Cheese",
    //     "ingredients": "American Cheddar, Bread"
    //   }
    // })

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
        ingredients: $scope.recipe.ingredients
      });
      $scope.reset()
    };

    $scope.recipes.$loaded(function() {
      console.log("$loaded is on")
     if ($scope.recipes.length === 0) {
       $scope.recipes.$add({
         name: "PB&J Sandwich",
         ingredients: "Peanut Butter, Jelly, Bread"
       });
     }
   });

    $scope.updateRecipe = function(index) {
      console.log("update is on")
      var recipe = $scope.recipes[index];
        $scope.name = recipe.name;
        $scope.ingredients = recipe.ingredients;
        $scope.calories = recipe.calories;
      $scope.recipes.$save(recipe);
    };

    $scope.deleteRecipe = function(key, recipe) {
      $scope.recipes.$remove(key);
    };

  }
  ])
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

        $scope.results = [];
        $scope.details = response.data;
        for (var i = 0; i < 10; i++) {
          var recipeName = response.data.matches[i].recipeName
          $scope.results.push({title: recipeName})
          // console.log(recipeName)
        }
        $scope.recipeId = {
          id: $scope.details.matches[0].id
        }
        $scope.fetchRecipeId()
      });
    };

    // $scope.recipeId = {
    //   id: 'Bourbon-Burger-1303425'
    // }

    $scope.fetchRecipeId = function() {
      $http.get("http://api.yummly.com/v1/api/recipe/" + $scope.recipeId.id, {
        headers : {
          }
        })
        .then(function(response) {
          $scope.lines = [];
          $scope.idDetails = response.data
          for (var i = 0; i < 100; i++) {
            var recipeIngredients = response.data.ingredientLines[i]
            $scope.lines.push({ingredients: recipeIngredients})
            // console.log(recipeIngredients)
          }
        });
      };

  });
