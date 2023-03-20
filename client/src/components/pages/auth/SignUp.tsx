import RegistrationForm from "../../organisms/RegistrationForm";

const SignUp = () => {
    return (
        <div className="r-sign-in">
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-lg">
                    <h1 className="text-center text-2xl font-bold text-black sm:text-3xl">
                        Начните уже сегодня
                    </h1>

                    <p className="mx-auto mt-4 max-w-md text-center text-gray-500 pb-8">
                        Добро пожаловать в наш блог. Пожалуйста, введите данные для входа в систему, чтобы получить доступ к своей учетной записи.
                    </p>

                    <RegistrationForm/>
                </div>
            </div>

        </div>
    );
};

export default SignUp;
