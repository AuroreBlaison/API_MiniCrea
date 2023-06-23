const express = require("express");
const server = express();

const mongoose = require("mongoose");
const routes = require("./routes");
server.use(express.json());

server.listen(5500, () => {
    console.log("serveur lancé et a l'ecoute sur le port 5500");

    // suppression du message de warning dans la console
    mongoose.set('strictQuery', false);

    //connexion a la base mongoDB Minicrea
    mongoose.connect("mongodb://127.0.0.1:27017/Minicrea");

    const db = mongoose.connection;
    // once -> une fois que 
    db.once("open", () => {
        console.log("connexion à la base Minicrea ok")
    }).on("error", error => console.error("Probleme durant la connexion a la base mongo", error));
});

routes(server);