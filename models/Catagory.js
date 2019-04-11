const mongoose = require('mongoose'); 
const {Schema} = mongoose;


// creat category schema 
const categorySchema = new Schema({
  title : {
    type: String,
    required : true,
  },
  slug : {
      type: String
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
  image: {
      type: String,
      required: true
  }

})


// with user schema , load the user model for User collection
const Category = mongoose.model('catagories', categorySchema); 
module.exports = Category; 