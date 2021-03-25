const {Router} = require('express');
const User = require('./models/User')

const routes = Router();

routes.post('/users', async (request, response)=>{
    const {name, Firebaseuid, projects} = request.body;

    const user = await User.create({
        name: {
            type: String,
            required: true
        },
        Firebaseuid: {  
            type: String,
            required: true
        },
        projects: [String],
    });
    return response.json(user);
});

module.exports = routes;
