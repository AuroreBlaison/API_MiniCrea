const ProductModel = require("../models/product");

module.exports = {
    getAll(req, res){
        ProductModel.find().then(products => {
            res.send(products);
        })
    },

    get(req, res){
        const id = req.params.id;

        ProductModel.findById(id).then(product => {
            res.send(product);
        });
    }
}