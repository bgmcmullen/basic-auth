'use strict'

const { sequelize } = require("./src/auth/models");

const app = require('./src/server.js')




// make sure our tables are created, start up the HTTP server.
sequelize.sync()
  .then(() => {
    app.start(3000, () => console.log('server up'));
  }).catch(e => {
    console.error('Could not start server', e.message);
  });