const mongoose = require('mongoose');
const PathSchema = require('./utils/PathSchema');
const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    projects: [PathSchema],
}); 

module.exports = mongoose.model('User', UserSchema);