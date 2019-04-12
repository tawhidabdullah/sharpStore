const mongoose = require("mongoose");
const { Schema } = mongoose;

// creat category schema
const categorySchema = new Schema({
  title: {
    type: String,
    required: true
  }
});

// with user schema , load the user model for User collection
const Category = mongoose.model("catagories", categorySchema);
module.exports = Category;
