import { DataTypes } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';
import sequelize from '../modules/db.js';
import Community from './Community.js';
import User from './User.js';

const CommunitySubscription = sequelize.define('CommunitySubscription', {
  id: {
    type: DataTypes.UUID,
    defaultValue: () => uuidv4(),
    primaryKey: true,
  },
}, {
  timestamps: true,
});

CommunitySubscription.belongsTo(User, { as: 'following', foreignKey: { allowNull: false, }, onDelete: 'CASCADE' }); // add a required foreign key to the User model
CommunitySubscription.belongsTo(Community, { as: 'community', foreignKey: { allowNull: false, }, onDelete: 'CASCADE' }); // add a required foreign key to the User model

export default CommunitySubscription;
