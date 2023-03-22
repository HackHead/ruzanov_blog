import { DataTypes } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';
import sequelize from '../modules/db.js'; 
import Article from './Article.js';

const Image = sequelize.define('Image', {
  id: {
    type: DataTypes.UUID,
    defaultValue: () => uuidv4(),
    primaryKey: true,
  },
  url: {
    type: DataTypes.STRING(512),
    allowNull: false,
    validate: {
      len: [4, 512],
    },
  },
}, {
  timestamps: true,
});

Image.belongsTo(Article, { foreignKey: { allowNull: false}, onDelete: 'CASCADE'  });

export default Image;