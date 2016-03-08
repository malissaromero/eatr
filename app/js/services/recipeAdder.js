angular
.module('eatrApp')
.factory('recipeAdder', ["$http", "$firebaseArray", function($http, $firebaseArray) {

  var firebaseUrl = "https://eatr.firebaseio.com";
  var recipeUrl = new Firebase(firebaseUrl + "/recipes")

  this.masterRecipes = $firebaseArray(recipeUrl);

  var factory = {
    masterRecipes: [],
    myRecipes: [],
    addToMyRecipes: addToMyRecipes
  }

  function addToMyRecipes(result) {
    factory.masterRecipes.push(result);
  }
  //
  // function removeMyRecipe(recipe) {
  //   recipe.isFavorite = false;
  //   var idx = factory.myRecipes.indexOf(recipe)
  //   factory.myRecipes.splice(idx, 1);
  // }

  // function getRecipes() {
  //   if (!recipePromise) {
  //     recipePromise = $http.get('js/mock/data.json')
  //     .then(function(resp) {
  //       Array.prototype.push.apply(factory.masterRecipes, resp.data);
  //       return factory.masterRecipes
  //     })
  //   }
  //   return recipePromise
  // }

  return factory;

}]);
