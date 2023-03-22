import { DataTypes } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';
import sequelize from '../modules/db.js';
import User from './User.js';

const UserSubscription = sequelize.define('UserSubscription', {
  id: {
    type: DataTypes.UUID,
    defaultValue: () => uuidv4(),
    primaryKey: true,
  },
}, {
  timestamps: true,
});

UserSubscription.belongsTo(User, { as: 'following', foreignKey: { allowNull: false, }, onDelete: 'CASCADE' }); // add a required foreign key to the Article model
UserSubscription.belongsTo(User, { as: 'follower', foreignKey: { allowNull: false, }, onDelete: 'CASCADE' }); // add a required foreign key to the User model

export default UserSubscription;
