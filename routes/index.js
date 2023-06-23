const ProductController = require("../controllers/product");

module.exports = server => {

    server.get("/", (req, res) => {
        res.send("bienvenu sur la page d'accueil de l'API Minicrea")
    });

    server.get("/products", (req, res) => {
        ProductController.getAll(req, res);
    });

    server.get("/products/:id", (req, res) => {
        ProductController.get(req, res);
    });

    //route par defaut -> page 404  attention, doit toujours etre la derniere requete !
    server.get("*", (req, res) => {
        res.status(404).send("rien a faire ici !");
    });
}