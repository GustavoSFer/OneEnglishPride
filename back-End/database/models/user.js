const User = (sequelize, DataTypes) => {
const User = sequelize.define('User', {
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING
}, {
  sequelize,
  timestamps: false,
  tableName: 'users',
})
  return User;
};

module.exports = User;
