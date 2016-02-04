angular.module('eatrApp')
.directive('recipes', function() {
  return {
    templateUrl: 'templates/recipes.html',
    controller: 'mainCtrl'
  }
});
