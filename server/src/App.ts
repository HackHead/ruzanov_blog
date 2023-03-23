import express from 'express';
import bodyParser from 'body-parser';
import UserRoutes from './routes/User.Routes.js';
import config from './modules/config.js';
class App {
    private APP: express.Application;
    private PORT: number;
    private SESSION_SECRET: string;
    private NODE_ENV: string;

    constructor() {
        this.NODE_ENV = 'development';
        this.PORT = config.PORT;
        this.SESSION_SECRET = config.SESSION_SECRET;
        this.APP = express();
        
        this.setupBodyParser();
        this.setupRoutes();
        this.boot();
    }

    private setupBodyParser(): void {
        this.APP.use(bodyParser.json());
        this.APP.use(bodyParser.urlencoded({extended: true}));
    }

    private setupRoutes(): void {
        this.APP.use('/api', UserRoutes)
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