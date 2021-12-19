"use strict";
exports.__esModule = true;
exports.userSchema = void 0;
var mongoose = require('mongoose');
exports.userSchema = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    password: {
        type: String
    },
    email: {
        type: String
    },
    idNumber: {
        type: String
    },
    role: {
        type: String
    },
    state: {
        type: String
    }
});
