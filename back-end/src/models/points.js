'use strict';
const Points = (sequelize, DataTypes) => {
  const Points = sequelize.define("Points", {
    userId: DataTypes.INTEGER,
    points: DataTypes.INTEGER
  }, {
    sequelize,
    tableName: 'points',
    timestemps: false,
  });
  return Points;
};

Employee.associate = (models) => {
  Employee.hasOne(models.User,
    { foreingKey: 'id' });
  }

module.exports = Points;
