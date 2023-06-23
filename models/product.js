const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// creation du Schema pour la collection products
// equivalent du CREATE TABLE en SQL ou on initialise les "colonnes" et leur type
const ProductSchema = new Schema({
    name: String,
    price: Number,
    type: String,
});

const ProductModel = mongoose.model("product", ProductSchema);
module.exports = ProductModel;