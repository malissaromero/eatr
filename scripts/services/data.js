'use strict';

angular
.module('eatrApp')
.service('dataService', function($http) {

  var urlBase = 'http://localhost\\:3000';

  this.getRecipes = function(callback) {
    return $http.get('/mock/recipes.json')
    .then(callback)
  };

  this.getRecipe = function(recipe) {
    return $http.get(urlBase + '/' + recipe);
  };

  this.createRecipe = function(recipe) {
    return $http.post(urlBase, recipe);
  };

  this.deleteRecipe = function(recipe) {
    console.log("The " + recipe.name + " has been deleted.")
    return $http.delete(urlBase + '/' + recipe);
  };

  this.saveRecipe = function(recipe) {
    console.log("The " + recipe.name + " has been saved.")
    return $http.put(urlBase + '/' + recipe);
  };

})
