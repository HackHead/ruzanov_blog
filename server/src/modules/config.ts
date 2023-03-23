import dotenv from 'dotenv';
import path from 'path';

export interface AppEnvVars {
    PORT: number;
    JWT_TOKEN_SECRET: string;
    SESSION_SECRET: string;
}

const ENVIRONMET = 'development'

dotenv.config({
    path: path.join(path.resolve(), `./src/config/.env.${ENVIRONMET}`),
});

export default {
    PORT: process.env.PORT || 9999,
    JWT_TOKEN_SECRET: process.env.JWT_TOKEN_SECRET || '#DGmh425eoXj5@AArEb@JGkAX5KkVGX7fp',
    SESSION_SECRET: process.env.SESSION_SECRET || 'sherlockholmes221b',
} as AppEnvVars