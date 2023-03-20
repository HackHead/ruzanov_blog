import Button from "../../atoms/Button";
import Spinner from "../../atoms/Spinner";
import TextField from "../../atoms/TextField";

const LoginForm = () => {
    return (
        <form
            className="mt-6 mb-0 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
        >
            <p className="text-center text-lg py-6 font-medium">Войдите в вашу учётную запись</p>

            <TextField srLabel="Email" type='email' placeholder='Укажите ваш email' icon="email" />

            <TextField srLabel="Email" type='password' placeholder='Укажите ваш пароль' icon="eye" />

            <Button
                variant="black"
                className="w-full text-white rounded-lg my-10 hover:bg-slate-800"
            >
                Войти
            </Button>

            <p className="text-center text-sm text-gray-500">
                Нет аккаунта?
                &nbsp;
                <a className="underline hover:no-underline" href="">Зарегистрироваться</a>
            </p>
        </form>
    );
};

export default LoginForm;
