const validator = require("validator");
const isEmpty = require("./isempty");

module.exports = function validateLoginInput(data) {
  // export validateRegister function
  let errors = {};

  data.title = !isEmpty(data.title) ? data.title : ""; //

  // EMAIL /////////////////////////////////////////

  if (validator.isEmpty(data.title)) {
    errors.title = "title field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
