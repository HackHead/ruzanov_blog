import { DataTypes } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';
import sequelize from '../modules/db.js';
import User from './User.js';

const Notification = sequelize.define('Notification', {
    id: {
        type: DataTypes.UUID,
        defaultValue: () => uuidv4(),
        primaryKey: true,
    },
    message: {
        type: DataTypes.STRING(256),
        allowNull: false,
        validate: {
            len: [2, 64],
        },
        
    },
    was_read: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    }
}, {
    timestamps: true,
});

Notification.belongsTo(User, { foreignKey: { allowNull: false, }, onDelete: 'CASCADE' }); // add a required foreign key to the User model

export default Notification;
