// angular
 //   .module('bookmark')
 //   .controller('searchController', function($http, BookAdder) {
 //     var vm = this;
 //     vm.searchResults = [];
 //
 //     vm.search = function(searchTerm) {
 //       var query = searchTerm.split(" ").join(" ")
 //
 //       $http.get("https://www.googleapis.com/books/v1/volumes?q="   query)
 //         .then(function(response) {
 //           vm.searchResults = [];
 //           for(var i = 0; i < 7; i  ) {
 //             var currentItem = response.data.items[i].volumeInfo
 //             vm.searchResults.push({title: currentItem.title,
 //                                    author: currentItem.authors[0]})
 //           }
 //           $(".search-form").val("")
 //       })
 //     }
 //
 //     vm.wantToRead = function(result) {
 //       vm.searchResults = [];
 //       BookAdder.set(result, "wantToRead")
 //     }
 //   })
 //
 // })


angular
.module('eatrApp')
.controller('apiCtrl', function($scope, $http, recipeAdder) {
  $scope.searchResults = [];

  $scope.recipe = {
    search: ''
  }

  $scope.fetchRecipes = function() {
      console.log($scope.recipe.search)
      $http.get("https://api.yummly.com/v1/api/recipes?", {
        headers : {
          "X-Yummly-App-ID" : "fff5495f",
      "X-Yummly-App-Key" : "e58fc1567bc839f3c927850b195a954c"},
        params : {
          "q" : $scope.recipe.search,
          "requirePictures" : "true"}
      })
      .then(function(response) {
        $scope.details = response.data;

        $scope.results = [];
        $scope.details = response.data;
        for (var i = 0; i < 10; i  ) {
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

  $scope.wantToRecipe = function(result) {
    $scope.searchResults = [];
    recipeAdder.set(result, "wantToRecipe")
  }

})

// .controller('apiCtrl', function($scope, $http) {
//
//   $scope.plateThreeIsVisible = false
//   $scope.togglePlateThree = function() {
//     if($scope.plateThreeIsVisible) {
//       $scope.plateThreeIsVisible = false
//     }
//     else {
//       $scope.plateThreeIsVisible = true
//     }
//   };
//
//   $scope.recipe = {
//     search: ''
//   }
//
//   $scope.fetchRecipes = function() {
//     console.log($scope.recipe.search)
//     $http.get("https://api.yummly.com/v1/api/recipes?", {
//       headers : {
//         },
//       params : {
//         "q" : $scope.recipe.search,
//         "requirePictures" : "true"}
//     })
//     .then(function(response) {
//       $scope.details = response.data;
//
//       $scope.results = [];
//       $scope.details = response.data;
//       for (var i = 0; i < 10; i  ) {
//         var recipeName = response.data.matches[i].recipeName
//         $scope.results.push({title: recipeName})
//         // console.log(recipeName)
//       }
//       $scope.recipeId = {
//         id: $scope.details.matches[0].id
//       }
//       $scope.fetchRecipeId()
//     });
//   };
//
//   $scope.fetchRecipeId = function() {
//     $http.get("https://api.yummly.com/v1/api/recipe/"   $scope.recipeId.id, {
//       headers : {
//         }
//       })
//       .then(function(response) {
//         $scope.lines = [];
//         $scope.idDetails = response.data
//         for (var i = 0; i < 100; i  ) {
//           var recipeIngredients = response.data.ingredientLines[i]
//           $scope.lines.push({ingredients: recipeIngredients})
//           // console.log(recipeIngredients)
//         }
//       });
//     };
//
// });
