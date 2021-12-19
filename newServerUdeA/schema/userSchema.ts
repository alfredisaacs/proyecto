const mongoose = require('mongoose');

export const userSchema = new mongoose.Schema({
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
    },
});