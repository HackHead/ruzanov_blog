"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
class App {
    constructor() {
        this.NODE_ENV = 'development';
        this.PORT = 9999;
        this.SESSION_SECRET = 'sherlockholmes221b';
        this.APP = (0, express_1.default)();
        this.setupBodyParser();
        this.boot();
    }
    setupBodyParser() {
        this.APP.use(body_parser_1.default.json());
        this.APP.use(body_parser_1.default.urlencoded());
    }
    boot() {
        try {
            if (this.NODE_ENV === 'development') {
                this.APP.listen(this.PORT, () => {
                    console.log(`Приложение запущено и работает на порту ${this.PORT}`);
                });
            }
        }
        catch (err) {
            console.log(`Во время запуска приложения произошла ошибка`);
            console.log(err);
        }
    }
}
;
new App();
