var express = require("express");

var router = express.Router();

var burgers = require("../models/burger.js");


var eaten = [];
var uneaten = [];

router.get("/", function (req, res) {
  eaten = [];
  uneaten = [];
  burgers.all(function (data) {

    for (var i = 0; i < data.length; i++) {

      if (data[i].devoured === 0) {
        uneaten.push(data[i])
      }
      else {
        eaten.push(data[i])

      }

    }
    res.render("index", { eaten, uneaten })
  })

}),

  router.post("/create", function (req, res) {
    burgers.create([
      "burger_name", "devoured"
    ], [
        req.body.burger_name, req.body.devoured
      ], function (result) {
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
      });
  });

router.put("/update:id", function (req, res) {
  var condition = "id = " + req.params.id;

  burgers.update({
    devoured: req.body.devoured
  }, condition, function (result) {

  });
});

module.exports = router;
