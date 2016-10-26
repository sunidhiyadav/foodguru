myAppModule.controller("IngredientsController", function($scope, IngredientFactory){
  $scope.ingredients = [];

  $scope.getIngredients = function(){
    console.log("ng-change");
    IngredientFactory.getIngredients(function(ingredients){
      $scope.ingredients = ingredients;
    })
  }
  $scope.addIngredient = function(){
    IngredientFactory.addIngredient($scope.selectedIngredients)
    $scope.selectedIngredients ={};
  }
})
