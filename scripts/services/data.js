// 'use strict';
//
// angular
// .module('eatrApp')
// .service('dataService', function($http) {
//
//   var urlBase = 'http://localhost\\:3000';
//
//   this.getRecipes = function(callback) {
//     return $http.get('/mock/recipes.json')
//     .then(callback)
//   };
//
//   this.getRecipe = function(recipe) {
//     return $http.get(urlBase + '/' + recipe);
//   };
//
//   this.createRecipe = function(recipe) {
//     return $http.post(urlBase, recipe);
//   };
//
//   this.deleteRecipe = function(recipe) {
//     return $http.delete(urlBase + '/' + recipe);
//   };
//
//   this.saveRecipes = function(recipe) {
//     return $http.put(urlBase + '/' + recipe);
//   };
//
// })
