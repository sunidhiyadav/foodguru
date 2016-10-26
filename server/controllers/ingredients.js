var mongoose = require('mongoose');
var Question = mongoose.model('Ingredient');

module.exports = (function() {
  return {
    list: function(req, res) {
      Ingredient.find({}, function(err, results) {
        if (err) {
          res.status(500).send({ "error": {"code": 111, "message": "Mongo Database Show Ingredient Errors:"} });
          console.log("Mongo Database Show Ingredient Errors:", err);
        } else {
          res.json(results);
        }
      });
    }
  }
})();
