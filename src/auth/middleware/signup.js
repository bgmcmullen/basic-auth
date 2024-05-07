'use strict';

const bcrypt = require('bcrypt');

const { Users } = require('../models/index.js');

// Signup Route -- create a new user
// Two ways to test this route with httpie
// echo '{"username":"john","password":"foo"}' | http post :3000/signup
// http post :3000/signup username=john password=foo
async function signup(req, res) {


  try {
    req.body.password = await bcrypt.hash(req.body.password, 10);
    const record = await Users.create(req.body);
    res.status(200).json(record);
  } catch (e) { 
    console.log(e.message);
    res.status(403).send('Error Creating User'); 
  }
};






module.exports = signup;