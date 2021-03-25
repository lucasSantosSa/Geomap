const mongoose = require('mongoose');

const ProjectsSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    paths: [Point],
    description: String,
}); 

module.exports = mongoose.model('Projects', ProjectsSchema);