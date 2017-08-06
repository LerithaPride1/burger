var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
 	burger.selectAll (function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
  burger.insertOne([
    "burger_name", "devoured" 
    ], [
    req.body.burger_name, req.body.devoured
    ], function() {
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  burger.updateOne(req.params.id, ({devoured: req.body.devoured}), function() {
    res.redirect("/");
  });
});

// Export routes for server.js to use.
module.exports = router;