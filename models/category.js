const mongoose = require("mongoose");
const { Schema } = mongoose;

// creat category schema
const categorySchema = new Schema({
  title: { 
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

// with user schema , load the user model for User collection
const Category = mongoose.model("categories", categorySchema);
module.exports = Category;
