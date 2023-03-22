import Button from "../../atoms/Button";

const Home = () => {
    return (
        <div>
            <div className="min-h-screen bg-gray-100 flex justify-center items-center">
                <div className="container max-w-7xl bg-black rounded-lg px-14 py-32">
                    <form>
                        <h1 className="text-center font-bold text-white text-4xl">Найдите интересующую вас статью</h1>
                        <p className="mx-auto font-normal text-sm my-6 max-w-lg text-white text-center py-10">Вы можете фильтровать по каких тегам осуществлять поиск: наука, спорт, it, здоровье, авто, политика, бизнес, криптовалюта и тд.</p>
                        <div className="sm:flex items-center bg-white rounded-lg overflow-hidden px-2 py-1 justify-between">
                            <input className="text-base text-gray-400 flex-grow outline-none px-2 italic" type="text" placeholder="Например 'Ретро автомобили'" />
                            <div className="ms:flex items-center px-2 rounded-lg space-x-4 mx-auto ">
                                <select id="Com" className="text-base text-gray-800 outline-none border-2 px-4 py-2 rounded-lg" defaultValue={1}>
                                    <option value="1" disabled>Выберите теги</option>
                                    <option value="net">Исскусство</option>
                                    <option value="org">Наука</option>
                                    <option value="io">Игры</option>
                                </select>
                                <Button variant="black" className="text-white inline-block rounded-md ">Найти</Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="bg-gray-100 px-10">
                
            </div>
        </div>
    );
};

export default Home;
