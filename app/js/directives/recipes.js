angular
.module('eatrApp')
.directive('recipes', function() {
  return {
    templateUrl: 'templates/recipe.html',
    controller: 'recipeCtrl'
  }
})
.directive('apis', function() {
  return {
    templateUrl: 'templates/api.html',
    controller: 'apiCtrl'
  }
})
