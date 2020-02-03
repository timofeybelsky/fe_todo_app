'use strict';

import bcrypt                          from 'bcrypt';
import { LOGIN_PATTERN, NAME_PATTERN } from '../constants';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define( 'User', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,

      validate: {
        is: NAME_PATTERN,
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: NAME_PATTERN,
      }
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: true,
      }
    },
    login: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        is: LOGIN_PATTERN,
        len: [6, 16],
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'passwordHash',
      set (value) {
        // Storing passwords in plaintext in the database is terrible.
        // Hashing the value with an appropriate cryptographic hash function is better.
        this.setDataValue( 'password', bcrypt.hashSync( value, 10 ) );
      }
    }
  }, {} );

  User.associate = function (models) {
    User.hasMany( models.Task, {
      foreignKey: {
        field: 'userId',// UserId
      },
      as: 'tasks'
    } );
    User.belongsToMany(models.Role,{
      through: 'UserRoles',
    })
  };
  return User;
};

