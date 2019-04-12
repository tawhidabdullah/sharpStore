const validator = require("validator");
const isEmpty = require("./isempty");

module.exports = function validateRegisterInput(data) {
  // export validateRegister function
  let errors = {};

  data.title = !isEmpty(data.title) ? data.title : "";
  data.desc = !isEmpty(data.desc) ? data.desc : "";
  data.price = !isEmpty(data.price) ? data.price : "";
  data.category = !isEmpty(data.category) ? data.category : "";

  // NAME/////////////////

  if (
    !validator.isLength(data.title, {
      min: 2,
      max: 20
    })
  ) {
    errors.title = "title must between 2 and 20 characters";
  }

  if (validator.isEmpty(data.title)) {
    errors.title = "title field is required";
  }

  // DESC /////////////////////////////////////////

  if (validator.isEmpty(data.desc)) {
    errors.desc = "desc field is required";
  }
  if (
    !validator.isLength(data.desc, {
      min: 2,
      max: 50
    })
  ) {
    errors.desce = "desce must between 2 and 50 characters";
  }

  if (validator.isEmpty(data.price)) {
    errors.price = "price field is required";
  }

  if (validator.isEmpty(data.category)) {
    errors.category = "category field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
