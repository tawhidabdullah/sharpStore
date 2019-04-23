// GET PRODUCT MODEL
const Product = require("../models/product");
// GET CATEGORY MODEL
const Category = require("../models/category");

// LOAD VALIDATAION
const validateProdctInput = require(".././validation/products");

////////////////////////////////////////////////////////////////////////////////

// ADD PRODUCTS //////////////////////////
exports.addProduct = (req, res) => {
  // bringing the validations : error , isValid
  const { errors, isValid } = validateProdctInput(req.body);

  let image = req.file;

  if (!image) {
    errors.imgError = "img shoud be send buddy";
  }

  // if input is not valid then send and error response
  if (!isValid) {
    return res.status(400).json(errors);
  }
  let imgUrl = image.path;

  const productFields = {};

  // create a new post by Post classs / post model

  (productFields.title = req.body.title),
    (productFields.desc = req.body.desc),
    (productFields.category = req.body.category),
    (productFields.price = req.body.price),
    (productFields.productImage = imgUrl);

  // search the user by loged in user id
  Product.findOne({ _id: req.body._id }).then(product => {
    // if we have a product we are gonna update it
    if (product) {
      Product.findOneAndUpdate(
        { _id: req.body._id },
        { $set: productFields },
        { new: true }
      ).then(product => {
        res.json(product);
      });
    }
    // if dont we are gonna create a product
    else {
      // if the handle is not exist then create a new profile with the given data
      new Product(productFields)
        .save()
        .then(product => res.json(product))
        .catch(err => res.status(404).send("some thing went wrong"));
    }
  });
};

// DELTE PRODUCT /////////////////////////////////////////

exports.deleteProduct = (req, res) => {
  Product.findById(req.params.product_id)
    .then(product => {
      // delete
      product.remove().then(() => console.log("product deleted successfully"));
    })
    .catch(error => res.json(error));

  Product.find().then(product =>
    res.json({
      product: product
    })
  );
};

// DELETE PRODUCT REVIEW ////////////////////////////////
exports.deleteProductReview = (req, res) => {
  Product.findById(req.params.product_id)
    .then(product => {
      if (
        product.reviews.filter(
          review => review._id.toString() === req.params.rmreview_id
        ).length === 0
      ) {
        res.status(404).json({ reviewnofound: "review does not exist" });
      }

      // find out the removeIndex on the review array
      const removeIndex = product.reviews
        .map(review => review._id.toString())
        .indexOf(req.params.rmreview_id);

      // then delete that review from database
      product.reviews.splice(removeIndex, 1);
      // then save the product with new review
      product.save().then(product => res.json(product));
    })
    .catch(error => res.status(404).json(error));
};

// ADD PRODUCT'S REVIEW /////////////////////////////////////////

exports.addProductReview = (req, res) => {
  // bringing the validations : error , isValid

  // const { errors, isValid } = validateProdctInput(req.body);

  // // if input is not valid then send and error response
  // if (!isValid) {
  //   res.status(400).json(errors);
  // }

  Post.findById(req.params.product_id)
    .then(product => {
      if (!product) {
        res.status(404).json({
          productnotfound: "post not found"
        });
      }
      // create a new comment
      const newreview = {};
      newreview.text = req.body.text;
      newreview.name = req.body.name;
      newreview.avatar = req.body.avatar;
      newreview.user = req.user.id;

      // add newreview to the start of reviews array
      product.reviews.unshift(newreview);

      // then save the product with new review
      product.save().then(product => res.json(product));
    })
    .catch(error => res.status(404).json(error));
};

// GET PRODUCTS /////////////////////////////////////////
exports.getProducts = (req, res) => {
  Product.find()
    .then(product => {
      res.json({
        product: product
      });
    })
    .catch(err => console.log(err));
};

// Get A PRODUCT //////////////////////////////////////////

exports.getAProduct = (req, res) => {
  Product.findOne({
    _id: req.params.product_id
  })
    .then(product => res.json({ product }))
    .catch(err =>
      res.status(404).json({
        noPostFound: "no product found with the given id"
      })
    );
};

// GET PRODUCTS BY CATEGORY /////////////////////////////////////////
exports.getProductsByCategory = (req, res) => {
  Product.find({ category: req.params.id })
    .populate("category")
    .exec()
    .then(products => {
      console.log(err);
    })
    .catch(err => console.log(err));
};
