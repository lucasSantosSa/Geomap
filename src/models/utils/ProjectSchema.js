const mongoose = require('mongoose');
const PathSchema = require('./PathSchema');

const ProjectSchema = new mongoose.Schema({
    Project = [PathSchema]
});

module.exports = ProjectSchema;