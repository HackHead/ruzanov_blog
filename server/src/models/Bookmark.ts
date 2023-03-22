import { DataTypes } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';
import sequelize from '../modules/db.js';
import Article from './Article.js'; 
import User from './User.js';

const Bookmark = sequelize.define('Bookmark', {
  id: {
    type: DataTypes.UUID,
    defaultValue: () => uuidv4(),
    primaryKey: true,
  },
}, {
  timestamps: true,
});

Bookmark.belongsTo(Article, { foreignKey: { allowNull: false, }, onDelete: 'CASCADE' }); // add a required foreign key to the Article model
Bookmark.belongsTo(User, { foreignKey: { allowNull: false, }, onDelete: 'CASCADE' }); // add a required foreign key to the User model

export default Bookmark;
