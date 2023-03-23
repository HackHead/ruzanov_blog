import { triggerAsyncId } from "async_hooks";
import { Response, Request } from "express";
import UserService from "../services/User.Service.js";

export default class UserController {
    public static async post(req: Request, res: Response) {
        const body = req.body;
        try {
            const user = await UserService.register(body);
            return res.json(user);
        } catch (error: any) {
            res.status(400).json({message: error.message, status: error.status});
        }
    }

    public static async getMultiple(req: Request, res: Response) {
        const body = req.body;
        try {
            
        } catch (error: any) {
            res.status(400).json({message: error.message, status: error.status});
        }
    }

    public static async login(req: Request, res: Response) {
        const body = req.body;
        try {
            const token = await UserService.login(body);
            return res.json({token});
        } catch (error) {
            return res.status(400).json({error})
        }
    }
} 