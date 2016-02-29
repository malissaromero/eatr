angular
.module('eatrApp')
.controller('apiCtrl', ['$scope', '$http', 'recipeAdder', '$rootScope', function($scope, $http, recipeAdder, $rootScope) {

  $scope.searchResults = [];

  $scope.recipe = {
        search: ''
      }

  $scope.fetchRecipes = function() {
    $http.get("https://api.yummly.com/v1/api/recipes?", {
      headers : {
        },
      params : {
        "q" : $scope.recipe.search,
        "requirePictures" : "true"}
    })
    .then(function(response) {
      $scope.details = response.data;

      $scope.searchResults = [];
      for (var i = 0; i < 10; i++) {
        var recipeName = response.data.matches[i].recipeName
        $scope.searchResults.push({name: recipeName})
      }
    });
  };

  $scope.addToRecipes = function(result) {
    console.log("add to recipes click event working")
    $scope.searchResults = [];
    recipeAdder.set(result, "setRecipes")
  };
}])

//   .controller('apiCtrl', function($scope, $http) {
//
//     $scope.plateThreeIsVisible = false
//     $scope.togglePlateThree = function() {
//       if($scope.plateThreeIsVisible) {
//         $scope.plateThreeIsVisible = false
//       }
//       else {
//         $scope.plateThreeIsVisible = true
//       }
//     };
//
//     $scope.recipe = {
//       search: ''
//     }
//
//     $scope.fetchRecipes = function() {
//       console.log($scope.recipe.search)
//       $http.get("https://api.yummly.com/v1/api/recipes?", {
//         headers : {
//           },
//         params : {
//           "q" : $scope.recipe.search,
//           "requirePictures" : "true"}
//       })
//       .then(function(response) {
//         $scope.details = response.data;
//
//         $scope.results = [];
//         for (var i = 0; i < 10; i++) {
//           var recipeName = response.data.matches[i].recipeName
//           $scope.results.push({title: recipeName})
//           // console.log(recipeName)
//         }
//         $scope.recipeId = {
//           id: $scope.details.matches[0].id
//         }
//         $scope.fetchRecipeId()
//       });
//     };
//
//     $scope.fetchRecipeId = function() {
//       $http.get("https://api.yummly.com/v1/api/recipe/" + $scope.recipeId.id, {
//         headers : {
//           }
//         })
//         .then(function(response) {
//           $scope.lines = [];
//           $scope.idDetails = response.data
//           for (var i = 0; i < 100; i++) {
//             var recipeIngredients = response.data.ingredientLines[i]
//             $scope.lines.push({ingredients: recipeIngredients})
//             // console.log(recipeIngredients)
//           }
//         });
//       };
//
//   });
