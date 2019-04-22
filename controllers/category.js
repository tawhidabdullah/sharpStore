const Category = require("../models/category");

// IMPORT VALIDATORS FOR CATEGORY
const validateCategoryInput = require(".././validation/adminCategory");

exports.addCatagory = (req, res) => {
  // bringing the validations : error , isValid
  const { errors, isValid } = validateCategoryInput(req.body);

  // if input is not valid then send and error response
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const title = req.body.title;

  // create a new post by Post classs / post model

  Category.find({ title: title }).then(category => {
    if (category) {
      res.status(500).json({ msgs: "Category name is already exist" });
    }
    const newCategory = new Category({
      title: title
    });
 
    newCategory.save().then(category => res.json({ category: category }));
  });
};

// get categoris /////////////////////////////
exports.getCategories = (req, res) => {
  Category.find().then(categories => {
    if (categories) {
      res.json({ categories: categories });
    }
    res.status(404).json({ msgs: "There is no categories" });
  });
};

// delete category

exports.deleteCategory = (req, res) => {
  Category.findById(req.params.category_id)
    .then(category => {
      // delete
      category.remove().then(() => console.log("product deleted successfully"));
    })
    .catch(error => res.json(error));

  Category.find().then(categories =>
    res.json({
      categories: categories
    })
  );
};
