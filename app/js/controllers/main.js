 // angular
  //   .module('bookmark')
  //   .controller('mainController', function($firebaseArray, BookAdder, $rootScope) {
  //     var vm = this;
  //
  //     var wantToRead = new Firebase(firebaseURL   "/books/wantToRead");
  //
      // var wantArray = $firebaseArray(wantToRead);
  //
  //     vm.wantToRead = wantArray
  //
  //     $rootScope.$on('wantToRead', function() {
  //       vm.wantToRead.$add( BookAdder.get() )
  //     })
  //
  //   })
  //
  // })
angular
.module('eatrApp')
.controller('mainCtrl', function($scope, $firebaseArray, recipeAdder, $rootScope) {

  var firebaseUrl = "https://eatr.firebaseio.com/recipes";
  var wantToRecipe = new Firebase(firebaseUrl + "/recipes/wantToRecipe")

  var wantArray = $firebaseArray(wantToRecipe);

  $scope.wantToRecipe = wantArray

  $rootScope.$on('wantToRecipe', function() {
    $scope.wantToRecipe.$add( recipeAdder.get() )
  });

})

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
//     $scope.reset = function() {
//       $scope.recipe.name = "";
//       $scope.recipe.ingredients = "";
//       $scope.recipe.calories = "";
//     };
//
//     $scope.createRecipe = function() {
//       $scope.recipes.$add({
//         name: $scope.recipe.name,
//         ingredients: $scope.recipe.ingredients
//       });
//       $scope.reset()
//     };
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
