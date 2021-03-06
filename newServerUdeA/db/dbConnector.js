const mongoose = require('mongoose');
const { environment } = require('../config/config');
const { userSchema } = require('../schema/userSchema.js');
const { projectSchema } = require('../schema/projectSchema.js');
const env = process.env.NODE_ENV || "development";

/**
 * Mongoose Connection
**/

mongoose.connect(environment[env].dbString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

let db = mongoose.connection;
db.on('error', () => {
    console.error("Error while connecting to DB");
});

const User = mongoose.model('User', userSchema);
const Project = mongoose.model('Project', projectSchema);

export { User, Project };