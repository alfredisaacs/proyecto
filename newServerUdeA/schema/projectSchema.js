"use strict";
exports.__esModule = true;
exports.projectSchema = void 0;
var mongoose = require('mongoose');
exports.projectSchema = new mongoose.Schema({
    name: {
        type: String
    },
    objectives: {
        type: String
    },
    budget: {
        type: String
    },
    initialDate: {
        type: Date
    },
    leader: {
        type: String
    },
    status: {
        type: String
    },
    phase: {
        type: String
    }
});
