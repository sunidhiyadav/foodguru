var ingredients = require("./../controllers/ingredients.js");

module.exports = function(app) {
  app.get("/app/ingredients", ingredients.list);

};
