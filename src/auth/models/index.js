'use strict';

require('dotenv').config();

const { Sequelize, DataTypes } = require('sequelize');

const Collection = require('../middleware/collection.js');

const environment = process.env.NODE_ENV;
const testOrProduction = (environment === 'test' || environment === 'production');


const sequelize = new Sequelize(process.env.DATABASE_URL, testOrProduction ? { logging: false } : {});

const usersSchema = require('./users-model.js');

const usersModel = usersSchema(sequelize, DataTypes);

const userCollection =  new Collection(usersModel);

module.exports = {
  sequelize: sequelize,
  Users: userCollection
}