const mongoose = require("mongoose");
const { Schema } = mongoose;

// creat product schema
const productSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  productImage: {
    type: String,
    required: true
  }
});

// with user schema , load the user model for User collection
const Product = mongoose.model("products", productSchema);
module.exports = Product;
