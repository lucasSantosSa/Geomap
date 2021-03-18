const mongoose = require('mongoose');
const PointSchema = require('./PointSchema');

const PathSchema = mongoose.Schema({
    path: [{
        type: PointSchema,
        index: '2dSphere',
        isMarked: Boolean = false,
        description: ""
    }]
});

module.exports = PathSchema;
