const { mongoose } = require("mongoose");

const isValid = function (value) {
    if (typeof value === "undefined" || value === null) return false;
    if (typeof value === "string" && value.trim().length > 0) return true;
    return false;
};

const isValidEmail = function (email) {
    const emailRegex = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/
    ///^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/
    return emailRegex.test(email);
};

const isValidPhone = function (number) {
    const mobileRegex = /^[5-9]{1}[0-9]{9}$/
    return mobileRegex.test(number);
}

const isValidName = function (value) {
    const regex = /^[a-zA-Z]+([\s][a-zA-Z]+)*$/
    return regex.test(value)
}

const isvalidTitle = function (value) {
    const regex = (/^(Mr|Mrs|Miss)+$\b/)
    return regex.test(value)
};
const isValidPassword = function (value) {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/
    return regex.test(value)
};

const isvalidObjectId = function (objectId) {
    return mongoose.Types.ObjectId.isValid(objectId)
};
const isValidISBN = function (value) {
    const Regex = /^[6-9]{3}[\-][\d]{10}$/
    return Regex.test(value);
}
const validTitle = function (value) {
    const regex = /^[A-Za-z0-9\s\-_,\.:;()]+$/
    return regex.test(value)
};
const isValidPinCode = function (pincode) {
    const Regex = /^[0-9]{6}$/
    return Regex.test(pincode);
}
const isValidDate = function (date) {
    const Regex = /^(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/

    return Regex.test(date)
}
const isValidMixed = function (value) {
    const regex = /(?<![0-9]\S{0,100})[^a-zA-Z](?!\S{0,100}[0-9])|(?<=[0-9]\S{0,100})[^a-zA-Z0-9-](?=\S{0,100}[0-9])/

    return regex.test(value)
}
const isValidRating = function (rating) {
    const Regex = /^([1-5]{1})$/

    return Regex.test(rating);
}
const isValidBody = function (value) {
    if (typeof value === "undefined" || value === null)
        return false;
}


module.exports = { isValid, validTitle, isValidEmail, isValidPhone, isValidName, isvalidTitle, isValidPassword, isvalidObjectId, isValidISBN, isValidPinCode, isValidDate, isValidMixed, isValidRating, isValidBody };