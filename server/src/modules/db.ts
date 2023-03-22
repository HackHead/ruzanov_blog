

import { Sequelize } from "sequelize";
import path from 'path';

const sequelize = new Sequelize({
    dialect: 'sqlite',
    // storage: 'path/to/database.sqlite'
    storage: path.join(path.resolve('data/database.sqlite'))
});

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();

export default sequelize;