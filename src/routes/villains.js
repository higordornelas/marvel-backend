const express = require("express");

const routes = express.Router();

routes.get("/dr-doom", function(req, res){
    res.send("Dr. Doom");
});

routes.get("/venom", function(req, res){
    res.send("Venom");
});

routes.get("/thanos", function(req, res){
    res.send("Thanos");
})

module.exports = routes;