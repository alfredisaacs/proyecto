const mongoose = require('mongoose');

export const projectSchema = new mongoose.Schema({
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