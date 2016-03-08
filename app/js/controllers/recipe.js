'use strict';

angular
.module('eatrApp')
.controller('recipeCtrl', ['$scope', '$firebaseArray', 'recipeAdder', function($scope, $firebaseArray, recipeAdder) {

  // var firebaseUrl = "https://eatr.firebaseio.com";
  // var recipeUrl = new Firebase(firebaseUrl + "/recipes")
  //
  // $scope.myRecipes = $firebaseArray(recipeUrl);

  $scope.masterRecipes = recipeAdder.masterRecipes;
  //
  // $scope.removeMyRecipe = recipeAdder.removeMyRecipe;

  // recipeAdder.getRecipes().then(function(data) {
  //   $scope.recipeAdder = data;
  // });

  // $scope.addToMyRecipes = recipeAdder.addToMyRecipes;


  // $scope.recipes.$loaded(function() {
  //   console.log("$loaded is on")
  //   if ($scope.masterRecipes.length === 0) {
  //     $scope.masterRecipes.$add({
  //       name: "PB&J Sandwich",
  //       ingredients: "Peanut Butter, Jelly, Bread",
  //       directions: "Put PB and Jelly on Bread."
  //     });
  //   }
  // });

}])

// 'use strict';
//
// angular
// .module('eatrApp')
// .controller('mainCtrl', ['$scope', '$firebaseArray',
//   function($scope, $firebaseArray) {
//
//     var url = "https://eatr.firebaseio.com/recipes";
//     var fireRef = new Firebase(url);
//
//     $scope.recipes = $firebaseArray(fireRef);
//
//     $scope.formIsVisible = false
//     $scope.toggleForm = function() {
//       if($scope.formIsVisible) {
//         $scope.formIsVisible = false
//       }
//       else {
//         $scope.formIsVisible = true
//       }
//     };
//
    // $scope.reset = function() {
    //   $scope.recipe.name = "";
    //   $scope.recipe.ingredients = "";
    //   $scope.recipe.directions = "";
    // };
    //
    // $scope.createRecipe = function() {
    //   $scope.recipes.$add({
    //     name: $scope.recipe.name,
    //     ingredients: $scope.recipe.ingredients,
          // directions: $scope.recipe.directions
    //   });
    //   $scope.reset()
    // };
//
//     $scope.recipes.$loaded(function() {
//       console.log("$loaded is on")
//      if ($scope.recipes.length === 0) {
//        $scope.recipes.$add({
//          name: "PB&J Sandwich",
//          ingredients: "Peanut Butter, Jelly, Bread"
//        });
//      }
//    });
//
//     $scope.updateRecipe = function(index) {
//       console.log("update is on")
//       var recipe = $scope.recipes[index];
//         $scope.name = recipe.name;
//         $scope.ingredients = recipe.ingredients;
//         $scope.calories = recipe.calories;
//       $scope.recipes.$save(recipe);
//     };
//
//     $scope.deleteRecipe = function(key, recipe) {
//       $scope.recipes.$remove(key);
//     };
//
//   }
//   ])
