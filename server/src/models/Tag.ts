import { DataTypes } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';
import sequelize from '../modules/db.js';
import Article from './Article.js'; 

const Tag = sequelize.define('Tag', {
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

Tag.belongsTo(Article, { foreignKey: { allowNull: false }, onDelete: 'CASCADE' }); 

export default Tag;