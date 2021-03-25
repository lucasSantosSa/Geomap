const functions = require("firebase-functions");
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./src/routes');
const { response } = require("express");
const app = express();

mongoose.connect('mongodb://lucas:lucas123@cluster0-shard-00-00.ckvnu.mongodb.net:27017,cluster0-shard-00-01.ckvnu.mongodb.net:27017,cluster0-shard-00-02.ckvnu.mongodb.net:27017/Geomap?ssl=true&replicaSet=atlas-p63odf-shard-0&authSource=admin&retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});



app.use(express.json());
app.use(routes);
app.get('/timestamp', (request, response) => {
    response.send(`${Date.now()}`);
});

exports.app = functions.https.onRequest(app);

// get, post, put, delete
// query params : req.query
// route params : request.params
// body: request.body (creation or modification data)

app.listen(4206);

