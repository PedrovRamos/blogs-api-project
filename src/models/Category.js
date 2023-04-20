module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('Category', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    name: DataTypes.STRING,
  }, {
    timestamps: false,
    tableName: 'categories',
    underscored: true,
  });

  // User.associate = (models) => {
  //   User.hasMany(
  //     models.BlogPost,
  //     { foreignKey: 'user_id', as: 'blog_post' }
  //   );
  // };

  return User;
};