import express from 'express';
import bodyParser from 'body-parser';
import connection from './modules/db.js';

class App {
    private APP: express.Application;
    private PORT: number;
    private SESSION_SECRET: string;
    private NODE_ENV: string;

    constructor() {
        this.NODE_ENV = 'development';
        this.PORT = 9999;
        this.SESSION_SECRET = 'sherlockholmes221b';
        this.APP = express();
        
        this.setupBodyParser();
        this.boot();
    }

    private setupBodyParser(): void {
        this.APP.use(bodyParser.json());
        this.APP.use(bodyParser.urlencoded());
    }

    private boot(): void {
        try {
            if (this.NODE_ENV === 'development') {
                this.APP.listen(this.PORT, () => {
                    console.log(`Приложение запущено и работает на порту ${this.PORT}`)
                });
            }
        } catch (err) {
            console.log(`Во время запуска приложения произошла ошибка`);
            console.log(err);
        }
    }
};

new App();