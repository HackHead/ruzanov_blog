import jwt, { JwtPayload } from 'jsonwebtoken';
import { Response, Request, NextFunction } from 'express';
import ServerError from '../utils/ServerError.js';
import config from '../modules/config.js';

interface CustomRequest extends Request {
    user?: string | JwtPayload;
  }

const isAuth = (req: CustomRequest, res: Response, next: NextFunction) => {
    const token = req.header('auth-token');
    if(!token) {
        return res.status(403).json({message: 'Invalid'})
    };
    try {
        const verified = jwt.verify(token, config.JWT_TOKEN_SECRET);
        req.user = verified;

        next();
    } catch (error) {
        res.status(403).json({message: 'Unauuthorized'})
    }
};

export default isAuth;