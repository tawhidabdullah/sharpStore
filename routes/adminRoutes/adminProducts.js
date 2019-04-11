const express = require("express");
const route = express.Router();
const mkdirp = require("mkdirp");
const fs = require("fs-extra");
const resizeImg = require("resize-img");

// GET PRODUCT MODEL
const Product = require("../../models/Product");

// GET CATEGORY MODEL
const Catagory = require("../../models/Catagory");

// @route GET /api/admin/products
// @decription get products show at the admin panel
// @access Private

route.get("/", (req, res) => {
  let count;
  Product.count((err, cnt) => {
    count = cnt;
  });

  Product.find().then((err, products) => {
    res.json({
      products: products,
      count: count
    });
  });
});

module.exports = route;
