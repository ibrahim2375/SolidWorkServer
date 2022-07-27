'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Posts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Posts.belongsTo(models.User, {
        foreignKey: 'userId',
      })
    }
  }
  Posts.init({
    title: DataTypes.STRING,
    company: DataTypes.STRING,
    email: DataTypes.STRING,
    website: DataTypes.STRING,
    description: DataTypes.STRING,
    img: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Posts',
  });
  return Posts;
};