'use strict';
module.exports = (sequelize, DataTypes) => {
  var burger = sequelize.define('burger', {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  }, {});
  burger.associate = function (models) {
    // associations can be defined here
  };
  return burger;
};