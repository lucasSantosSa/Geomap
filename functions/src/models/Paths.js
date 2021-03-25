const mongoose = require('mongoose');

const PathsSchema = new mongoose.Schema({
    name: String,
    Firebaseuid: String,
    projects: [String],
    description: String,
    path: [{
        type: PointSchema,
        index: '2dSphere',
        isMarked: Boolean = false,
        description: "",
        markPoint: function(){
            this.isMarked = true;
        }
    }]
}); 

module.exports = mongoose.model('User', UserSchema);