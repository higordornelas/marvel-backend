const express = require("express");

const routes = express.Router();

routes.get("/capitao-america", function(req, res) {
    res.send("Capitao America");
});

routes.get("/hulk", function(req, res){
    res.send("Hulk");
})

routes.get("/wolverine", function(req, res){
    res.send("Wolverine");
})

module.exports = routes;