'use strict';

const express = require('express');

const router = express.Router();

const signup = require('./middleware/signup.js')

const signin = require('./middleware/signin.js');



router.post('/signup', signup);
router.post('/signin', signin);



module.exports = router;