import { RegistrationBody, LoginBody } from "../services/User.Service.js";

const isValidRegistrationData = (body: RegistrationBody): boolean => {
    const {
        first_name,
        last_name,
        email,
        password,
        thumbnail
    } = body;

    return true;
};
const isValidLoginData = (body: LoginBody): boolean => {
    const {
        email,
        password,
    } = body;

    return true;
};
export {
    isValidRegistrationData,
    isValidLoginData,
};
