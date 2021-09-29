const express = require("express");

const routes = express.Router();

routes.get("/dr-doom", function(req, res){
    res.send("Dr. Doom");
});

routes.get("/carnage", function(req, res){
    res.send("Carnage");
});

routes.get("/thanos", function(req, res){
    res.send("Thanos");
})

module.exports = routes;