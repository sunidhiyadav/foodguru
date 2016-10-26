var myAppModule = angular.module("myApp", ["ngRoute", "ngMessages"]);

myAppModule.factory("IngredientFactory", function($http){
   var ingredients =[];
   var factory = {};
   factory.getIngredients = function(callback){
     $http.get("/app/").success(function(response) {
       ingredients = response;
       callback(ingredients);
     });
   }
   factory.addIngredient = function(ingredient){
      ingredients.push(ingredient);
   }
   return factory;
})
