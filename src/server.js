'use strict';

// 3rd Party Resources
require('dotenv').config();
const express = require('express');

const routeNotFound = require('./handlers/404.js');

const errorHandler = require('./handlers/500.js');

// Prepare the express app
const app = express();

// Process JSON input and put the data on req.body
app.use(express.json());


const routes = require('./auth/router.js');


// Process FORM input and put the data on req.body
app.use(express.urlencoded({ extended: true }));

app.use('/', routes);
app.use("*", routeNotFound)
app.use(errorHandler);

function start(port){
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  })
}

module.exports = {app, start};