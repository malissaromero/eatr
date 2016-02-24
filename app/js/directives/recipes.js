angular
.module('eatrApp')
.directive('recipes', function() {
  return {
    templateUrl: 'templates/recipes.html',
    controller: 'mainCtrl'
  }
})
.directive('apis', function() {
  return {
    templateUrl: 'templates/apis.html',
    controller: 'apiCtrl'
  }
})
