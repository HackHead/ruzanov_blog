import User from "../models/User.js";
import ServerError from "../utils/ServerError.js";
import {isValidRegistrationData, isValidLoginData} from "../validators/Hub.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import config from "../modules/config.js";

export interface RegistrationBody {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    thumbnail: string;
}
export interface IGetMultipleUsers {
    offset: number;
    limit: number;
}

export interface LoginBody {
    email: string;
    password: string;
}

export default class UserService {
    public static async register(body: RegistrationBody){
        if(!isValidRegistrationData(body)) throw new ServerError('Неправильно введенные данные', 40001);

        const {
            first_name,
            last_name,
            email,
            password,
            thumbnail
        } = body;
        
        try {
            const userExists = await User.findOne({ where: { email } });

            if(userExists){
                throw new ServerError('Пользователь с таким почтовым адресом уже существует', 40002);
            }

            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            const query = {
                first_name, 
                last_name, 
                email,
                password: hashedPassword,
                thumbnail,
            }
            const createdUser = await User.create(query);

            return createdUser;
        } catch (error: any) {
            throw error;
        }
    }
    public static async login(body: LoginBody){
        if(!isValidLoginData(body)) { throw new ServerError('Неправильный пароль', 40003)};
        const {
            email, 
            password
        } = body;
        try {
            const user = await User.findOne({where: {
                email,
            }});
            
            if(!user) { throw new ServerError('Пользователя с таким почтовым ящиком не существует', 40004); }

            const isValidPass = await bcrypt.compare(password, user.dataValues.password)
            if(!isValidPass) throw new ServerError('Неправильный пароль', 40005)

            return jwt.sign({_id: user.dataValues.id}, config.JWT_TOKEN_SECRET);
        } catch (error) {
            throw error;
        }
    }
    public static async getMultiple(body: IGetMultipleUsers){
        const {
            offset,
            limit,
        } = body;

        try {
            
        } catch (error) {
            
        }
    }

    public static async getSingel(body: IGetMultipleUsers){
        const {
            offset,
            limit,
        } = body;

        try {
            
        } catch (error) {
            
        }
    }

    public static async update(body: IGetMultipleUsers){
        const {
            offset,
            limit,
        } = body;

        try {
            
        } catch (error) {
            
        }
    }

    public static async delete(body: IGetMultipleUsers){
        const {
            offset,
            limit,
        } = body;

        try {
            
        } catch (error) {
            
        }
    }
}