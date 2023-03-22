import { BelongsTo, DataTypes } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';
import sequelize from '../modules/db.js'; // assuming you have a sequelize instance already set up
import User from './User.js'; // assuming you have a User model already defined in a separate file
import Community from './Community.js'; // assuming you have a Community model already defined in a separate file
const Article = sequelize.define('Article', {
    id: {
      type: DataTypes.UUID,
      defaultValue: () => uuidv4(),
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING(128),
      allowNull: false,
      validate: {
        len: [4, 128],
      },
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [64, 4096],
      },
    },
    likes_count: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    comments_count: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
  }, {
    timestamps: true,
  });
  
  Article.belongsTo(User, { as: 'author', foreignKey: { allowNull: false }, onDelete: 'CASCADE' }); // add a required foreign key to the User model
  Article.belongsTo(Community, { foreignKey: { name: 'community_id', allowNull: true }, onDelete: 'SET NULL' }); // add an optional foreign key to the Community model
  
  export default Article;
