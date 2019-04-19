const express = require("express");
const passport = require("passport");
const route = express.Router();
const Product = require("../../models/Product");

// @route GETG /api/products/getProducts
// @decription get products from database
// @access Private

route.get("/getProduct", (req, res) => {
  Product.find()
    .then(product => {
      res.json({
        product: product
      });
    })
    .catch(err => console.log(err));
});

// @route GET /api/products/getProducts/:product_id
// @decription  Get a specific post by id
// @access Private

route.get("/:product_id", (req, res) => {
  Product.findOne({
    _id: req.params.product_id
  })
    .then(product => res.json(product))
    .catch(err =>
      res.status(404).json({
        noPostFound: "no product found with the given id"
      })
    );
}); 





module.exports = route;
