const express = require("express");

const app = express();

const routesHeroes = require("./routes/heroes");
const routesVillains = require("./routes/villains");

app.use("/heroes", routesHeroes);
app.use("/villains", routesVillains);

app.listen(3333, function(){
    console.log("Servidor inicializado!");
});