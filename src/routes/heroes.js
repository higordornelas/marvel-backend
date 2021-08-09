const express = require("express");

const routes = express.Router();

routes.get("/iron-man", function(req, res) {
    res.send("Iron Man");
});

routes.get("/thor", function(req, res){
    res.send("Thor");
})

routes.get("/spider-man", function(req, res){
    res.send("Spider Man");
})

module.exports = routes;