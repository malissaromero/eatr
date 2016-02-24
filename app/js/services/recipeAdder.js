angular
.module('eatrApp')
.service('recipeAdder', function($rootScope) {
  this.selectedRecipe = "";
  return {
    get: function() {
      return this.selectedRecipe;
    },
    set: function(value, list) {
      this.selectedRecipe = value;
      switch(list) {
        case "addToRecipes":
        $rootScope.$broadcast('addToRecipes', this.selectedRecipe)
        break;
      }
    }
  }
})
