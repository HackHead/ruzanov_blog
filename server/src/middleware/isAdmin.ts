import jwt, { JwtPayload } from 'jsonwebtoken';
import { Response, Request, NextFunction } from 'express';
import User from '../models/User.js';

interface CustomRequest extends Request {
    user?: string | JwtPayload;
  }

const isAdmin = async (req: CustomRequest, res: Response, next: NextFunction) => {
    const userId = req.user;

    try {
        const user = await User.findOne({
            where: {
                id: userId
            }
        });
        if(!user){
            return res.status(400).json({message:  'Пользователя с таким ID не существует'})
        }
        next();
    } catch (error) {
        res.status(403).json({message: 'У вас не доступа'})
    }
};

export default isAdmin;