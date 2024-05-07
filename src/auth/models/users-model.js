'use strict';

// Create a Sequelize model
const usersSchema = (sequelize, DataTypes) => {
  const Users = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });

  return Users;
};

module.exports = usersSchema;