'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Exams extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Exams.init({
    count_anomalies: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Exams',
  });
  return Exams;
};