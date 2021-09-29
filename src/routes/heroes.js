const express = require("express");

const routes = express.Router();

routes.get("/gambit", function(req, res) {
    res.send("Gambit");
});

routes.get("/hulk", function(req, res){
    res.send("Hulk");
})

routes.get("/wolverine", function(req, res){
    res.send("Wolverine");
})

module.exports = routes;