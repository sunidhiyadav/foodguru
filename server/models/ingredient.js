var mongoose = require('mongoose');

// create our questionSchema
var ingredientSchema = new mongoose.Schema({
    name:String
  });
//questionSchema.path('name').required(true,  'Name cannot be blank');
mongoose.model('Ingredient', ingredientSchema);
