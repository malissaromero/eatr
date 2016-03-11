'use strict';

angular
.module('eatrApp')
.controller('apiCtrl', function($scope, $http) {

  $scope.plateThreeIsVisible = false
  $scope.togglePlateThree = function() {
    if( $scope.plateThreeIsVisible ) {
      $scope.plateThreeIsVisible = false
    }
    else {
      $scope.plateThreeIsVisible = true
    }
  };

  $scope.recipe = {
    search: ''
  };

  $scope.searchRecipes = function() {
    console.log($scope.recipe.search)
    $http.get("https://api.yummly.com/v1/api/recipes?", {
      headers : {
        },
      params : {
        "q" : $scope.recipe.search,
        "requirePictures" : "true"}
    })
    .then(function( response ) {
      $scope.details = response.data;

      $scope.results = [];
      for ( var i = 0; i < 10; i++ ) {
        var recipeName = response.data.matches[i].recipeName
        var recipeId = response.data.matches[i].id
        $scope.results.push({
          title: recipeName,
          id: recipeId
        })
      }
    });
  };

  $scope.fetchRecipeDetails = function( $event ) {
  // the ahref has a custom attribute that grabs the recipe id and passes the id into the click function through $event

  // we then grab the id inside the $event and pass it to the id variable

  //the id variable needs to be written this way because data-recipe-id is a revolving array and you put it in quotes because it is a name you can pass as a string
    console.log($event)

    var id = $event.currentTarget.attributes["data-recipe-id"].value

    $http.get("https://api.yummly.com/v1/api/recipe/" + id, {
      headers : {
        }
      })
      .then(function(response) {
        $scope.lines = [];
        $scope.idDetails = response.data
        for ( var i = 0; i < 100; i++ ) {
          var recipeIngredients = response.data.ingredientLines[i]
          $scope.lines.push({
            ingredients: recipeIngredients
          })
        }
      });
    };

});
