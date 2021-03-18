const {Router} = require('express');
const User = require('./models/User')

const routes = Router();

routes.post('/users', async (request, response)=>{
    const {name, email, password, profession} = request.body;

    const user = await User.create({
        name, 
        email, 
        password, 
        profession,
    });
    return response.json(user);
});

module.exports = routes;
