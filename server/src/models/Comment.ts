import { DataTypes } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';
import sequelize from '../modules/db.js';
import Article from './Article.js'; 
import User from './User.js';

const Comment = sequelize.define('Comment', {
  id: {
    type: DataTypes.UUID,
    defaultValue: () => uuidv4(),
    primaryKey: true,
  },
  message: {
    type: DataTypes.STRING(64),
    allowNull: false,
    validate: {
      len: [2, 64],
    },
  },
}, {
  timestamps: true,
});

Comment.belongsTo(Article, { foreignKey: { allowNull: false, }, onDelete: 'CASCADE' }); // add a required foreign key to the Article model
Comment.belongsTo(User, { foreignKey: { allowNull: false, }, onDelete: 'CASCADE' }); // add a required foreign key to the User model

export default Comment;
