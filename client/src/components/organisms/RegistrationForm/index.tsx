import axios from 'axios';
import { FormEvent, useState } from "react";
import { Link } from 'react-router-dom';
import env from "../../../env";
import Button from "../../atoms/Button";
import TextField from "../../atoms/TextField";



const RegistrationForm = () => {
    const [isFetching, setIsFetching] = useState(false);

    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const submit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            setIsFetching(true)
            await axios.post(`${env.SERVER_HOST}/api/users`, {
                first_name,
                last_name,
                email,
                password,
            })
        } catch (error) {
            alert(error)
        }
        setIsFetching(false)
    }
    return (
        <form
            onSubmit={(e) => submit(e)}
            className="mt-6 mb-0 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
        >
            <p className="text-center text-lg py-6 font-medium">Создайте свою учётную запись</p>

            <TextField 
                srLabel="Имя" 
                type='text' 
                placeholder='Имя' 
                value={first_name} 
                onInput={(e) => {
                    const target = e.target as HTMLInputElement;
                    setFirstName(target.value)
                }}
                min={10}
            />
            <TextField 
                srLabel="Фамилия" 
                type='text' 
                placeholder='Фамилия' 
                value={last_name} 
                onInput={(e) => {
                    const target = e.target as HTMLInputElement;
                    setLastName(target.value)
                }}
            />
            <TextField 
                srLabel="Email" 
                type='email' 
                placeholder='Email' 
                icon="email" 
                value={email} 
                onInput={(e) => {
                    const target = e.target as HTMLInputElement;
                    setEmail(target.value)
                }}
            />
            <TextField 
                srLabel="Пароль" 
                type='password' 
                placeholder='Пароль' 
                icon="eye" 
                value={password} 
                onInput={(e) => {
                    const target = e.target as HTMLInputElement;
                    setPassword(target.value)
                }}
            />

            <Button
                variant="black"
                className="w-full text-white rounded-lg my-10 hover:bg-slate-800"
                loading={isFetching}
            >
                Зарегистрироваться
            </Button>

            <p className="text-center text-sm text-gray-500">
                Уже есть аккаунт?
                &nbsp;
                <Link className="underline hover:no-underline" to="/signin">Войти</Link>
            </p>
        </form>
    );
};

export default RegistrationForm;
