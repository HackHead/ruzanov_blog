import { DataTypes } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';
import sequelize from '../modules/db.js';

const User = sequelize.define('User', {
  id: {
    type: DataTypes.UUID,
    defaultValue: () => uuidv4(),
    primaryKey: true,
  },
  first_name: {
    type: DataTypes.STRING(128),
    allowNull: false,
    validate: {
      len: [2, 128],
    },
  },
  last_name: {
    type: DataTypes.STRING(128),
    allowNull: false,
    validate: {
      len: [2, 128],
    },
  },
  email: {
    type: DataTypes.STRING(128),
    allowNull: false,
    unique: true,
    validate: {
      len: [4, 128],
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING(1024),
    allowNull: false,
  },
  thumbnail: {
    type: DataTypes.STRING(512),
    allowNull: true,
  },
  is_admin: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
}, {
  timestamps: true,
});

export default User;