'use strict';

angular
.module('eatrApp')
.service('dataService', function($http) {

  var url = "https://eatr.firebaseio.com/recipes";

  var urlBase = 'http://localhost:3000';

  var getUrl = function(){
    return urlBase + '/mock/recipes.json';
  };

  this.getRecipes = function(callback) {
    return $http.get('/mock/recipes.json')
    .then(callback)
  };

  this.getRecipe = function(recipe) {
    return $http.get(urlBase + '/' + recipe);
  };

  this.create = function(name, ingredients, calories) {
    var params = {name: name, ingredients: ingredients, calories: calories}
    return $http.post(getRecipes(), params);
  };

  this.destroy = function(id) {
    console.log("The " + recipe.name + " has been deleted.")
    return $http.delete(getUrlWithId(id));
  };

  this.update = function(id) {
    console.log("The " + recipe.name + " has been saved.")
    var params = {updated_at: new Date().toString()};
    return $http.put(getUrlWithId(id), params);
  };

})
