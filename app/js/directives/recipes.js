angular
.module('eatrApp')
.directive('recipe', function() {
  return {
    templateUrl: 'templates/recipe.html',
    controller: 'recipeCtrl'
  }
})
.directive('api', function() {
  return {
    templateUrl: 'templates/api.html',
    controller: 'apiCtrl'
  }
})
