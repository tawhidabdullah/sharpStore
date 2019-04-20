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

// // MyScema for mongoosealgolia

// productSchema.plugin(mongooseAlgolia, {
//   appId: "NCOGNMBZ7I",
//   apiKey: "bc368cd1a5f9f34a7c0e6db44c577a3f",
//   indexName: "productSchema", //The name of the index in Algolia, you can also pass in a function
//   selector: "title desc date reviews productImage rating price category", //You can decide which field that are getting synced to Algolia (same as selector in mongoose)
//   populate: {
//     path: "owner",
//     select: "name"
//   },
//   defaults: {
//     author: "unknown"
//   },
//   mappings: {
//     title: function(value) {
//       return `${value}`;
//     }
//   },
//   virtuals: {
//     whatever: function(doc) {
//       return `Custom data ${doc.title}`;
//     }
//   },
//   debug: true // Default: false -> If true operations are logged out in your console
// });

// let Model = mongoose.model("products", productSchema);

// Model.SyncToAlgolia(); //Clears the Algolia index for this schema and synchronizes all documents to Algolia (based on the settings defined in your plugin settings)
// Model.SetAlgoliaSettings({
//   searchableAttributes: ["title", "price", "desc", "category", "productImage"] //Sets the settings for this schema, see [Algolia's Index settings parameters](https://www.algolia.com/doc/api-client/javascript/settings#set-settings) for more info.
// });

// with user schema , load the user model for User collection
const Product = mongoose.model("products", productSchema);
module.exports = Product;
