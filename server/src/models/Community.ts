import { DataTypes } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';
import sequelize from '../modules/db.js';
import User from './User.js'

const Community = sequelize.define('Community', {
  id: {
    type: DataTypes.UUID,
    defaultValue: () => uuidv4(),
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(128),
    allowNull: false,
    validate: {
      len: [2, 128],
    },
  },
  thumbnail: {
    type: DataTypes.STRING(128),
    allowNull: false,
    validate: {
      len: [2, 128],
    },
  },
  last_post: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  timestamps: true,
});

Community.belongsTo(User, { as: 'owner', foreignKey: { allowNull: false }, onDelete: 'CASCADE' });; // add a foreign key to the User model

export default Community;