const mongoose = require('mongoose');
const Validator = require('validator');

module.exports = function validateRegisterInput(data) {
    let errors = {};

    // Convert empty fields => empty strings
    data.email = !isEmpty(data.email) ? data.email : "",
    data.password = !isEmpty(data.password) ? data.password : "";

    // Email check
    if (Validator.isEmpty(data.email)) {
        errors.email = "Email field is Required";
    } else if (!Validator.isEmail(date.email)) {
        errors.email = "Email is invalid";
    }

    // Password check
    if (Validator.isEmpty(data.password)) {
        errors.password = "Password field is required";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}