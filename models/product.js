const mongoose = require("mongoose");
const { Schema } = mongoose;
// const mongooseAlgolia = require("mongoose-algolia");
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
    type: Schema.Types.ObjectId,
    ref: "categories"
  },
  price: {
    type: Number,
    required: true
  },
  productImage: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  rating: {
    type: Number,
    default: 5.0
  },
  reviews: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "users"
      },
      text: {
        type: String,
        required: true
      },
      name: {
        type: String
      },
      avatar: {
        type: String
      },
      date: {
        type: Date,
        default: Date.now
      }
    }
  ]
});

const Product = mongoose.model("products", productSchema);
module.exports = Product;
