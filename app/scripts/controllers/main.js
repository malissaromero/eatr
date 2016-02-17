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

    // $scope.plateTwoIsVisible = false
    // $scope.togglePlateTwo = function() {
    //   if($scope.plateTwoIsVisible) {
    //     $scope.plateTwoIsVisible = false
    //   }
    //   else {
    //     $scope.plateTwoIsVisible = true
    //   }
    // };
    //
    $scope.plateThreeIsVisible = false
    $scope.togglePlateThree = function() {
      if($scope.plateThreeIsVisible) {
        $scope.plateThreeIsVisible = false
      }
      else {
        $scope.plateThreeIsVisible = true
      }
    };

    // $scope.$watch('search', function() {
    //   $scope.fetchRecipes();
    // });

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
          $scope.idDetails = response.data
        });
      };

      // $scope.getIngredients = function(ingredient) {
      //   return "Ingredients";
      // };

      // $scope.ingredients = JSON.parse($scope.idDetails.ingredientLines)

      // $scope.recipeDetails = {
      //   ingredientLines: ''
      // }
      //
      // var jsonString = $scope.recipeDetails.ingredientLines
      //
      // var obj = JSON.parse(jsonString);
      // for (var i = 0; i < obj.length; i++){
      //   var ingredient = new Ingredient();
      //   ingredient.setAttribute('src', obj[i][2] + obj[i][1]);
      //   document.body.appendChild(ingredient);
      //   console.log("done")
      // }

  });
