const User = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    tableName: 'users',
    timestamps: false,
  });
  return User;
};

Employee.associate = (models) => {
  Employee.hasMany(models.Points,
    { foreignKey: 'userId' });
}

module.exports = User;
