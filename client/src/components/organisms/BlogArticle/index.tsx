export interface BlogCardProps {
    title: string;
    body: string;
    pubDate: Date;
}

const BlogCart = ({
    title,
    body,
    pubDate
}: BlogCardProps) => {
    return (
        <article className="mb-4 break-inside p-6 rounded-xl bg-white dark:bg-slate-800 flex flex-col bg-clip-border max-w-lg shadow-lg">
            <div className="flex pb-6 items-center justify-between">
                <div className="flex">
                    <a className="inline-block mr-4" href="#">
                        <img className="rounded-full max-w-none w-12 h-12" src="https://randomuser.me/api/portraits/men/35.jpg" />
                    </a>
                    <div className="flex flex-col">
                        <div>
                            <a className="inline-block text-lg font-bold dark:text-white" href="#">Иван Песков</a>
                        </div>
                        <div className="text-slate-500 dark:text-slate-400">
                            Июнь 17, 2018
                        </div>
                    </div>
                </div>
            </div>
            <h2 className="text-3xl font-extrabold dark:text-white">
                {/* Непреходящий интерес к ретро-автомобилям: взгляд в прошлое */}
                { title }
            </h2>
            <div className="py-4">
                <div className="flex justify-between gap-1 mb-1">
                    <a className="flex" href="#">
                        <img className="max-w-full rounded-tl-lg"
                            src="https://images.pexels.com/photos/92866/pexels-photo-92866.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                    </a>
                    <a className="flex" href="#">
                        <img className="max-w-full"
                            src="https://images.pexels.com/photos/247929/pexels-photo-247929.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                    </a>
                    <a className="flex" href="#">
                        <img className="max-w-full rounded-tr-lg"
                            src="https://images.pexels.com/photos/631522/pexels-photo-631522.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                    </a>
                </div>
                <div className="flex justify-between gap-1">
                    <a className="flex" href="#">
                        <img className="max-w-full rounded-bl-lg"
                            src="https://images.pexels.com/photos/1429748/pexels-photo-1429748.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                    </a>
                    <a className="flex" href="#">
                        <img className="max-w-full rounded-br-lg"
                            src="https://images.pexels.com/photos/69020/pexels-photo-69020.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                    </a>
                </div>
            </div>
            <p className="dark:text-slate-200 italic">
                { body }
                {/* Ретро-автомобили продолжают привлекать внимание автолюбителей во всем мире, несмотря на то, что... */}
            </p>
            <div className="py-4">
                <a className="inline-flex items-center" href="#">
                    <span className="mr-2">
                        <svg className="fill-rose-600 dark:fill-rose-400" style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
                            <path
                                d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z">
                            </path>
                        </svg>
                    </span>
                    <span className="text-lg font-bold">34</span>
                </a>
            </div>
            <div className="relative">
                <input
                    className="pt-2 pb-2 pl-3 w-full h-11 bg-slate-100 dark:bg-slate-600 rounded-lg placeholder:text-slate-600 dark:placeholder:text-slate-300 font-medium pr-20"
                    type="text" placeholder="Написать коментарий" />
                <span className="flex absolute right-3 top-2/4 -mt-3 items-center">
                    <svg className="fill-blue-500 dark:fill-slate-50" style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
                        <path d="M2,21L23,12L2,3V10L17,12L2,14V21Z"></path>
                    </svg>
                </span>
            </div>

            <div className="pt-6">

                <div className="media flex pb-4">
                    <a className="mr-4" href="#">
                        <img className="rounded-full max-w-none w-12 h-12" src="https://randomuser.me/api/portraits/men/82.jpg" />
                    </a>
                    <div className="media-body">
                        <div>
                            <a className="inline-block text-base font-bold mr-2" href="#">Иван Кузнецов</a>
                            <span className="text-slate-500 dark:text-slate-300">25 минут назад</span>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur.</p>
                        <div className="mt-2 flex items-center">
                            <a className="inline-flex items-center py-2 mr-3" href="#">
                                <span className="mr-2">
                                    <svg className="fill-rose-600 dark:fill-rose-400" style={{ width: '22px', height: '22px' }}
                                        viewBox="0 0 24 24">
                                        <path
                                            d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z">
                                        </path>
                                    </svg>
                                </span>
                                <span className="text-base font-bold">12</span>
                            </a>
                            <button className="py-2 px-4 font-medium hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg">
                                Ответить
                            </button>
                        </div>
                    </div>
                </div>


                <div className="media flex pb-4">
                    <a className="inline-block mr-4" href="#">
                        <img className="rounded-full max-w-none w-12 h-12" src="https://randomuser.me/api/portraits/women/76.jpg" />
                    </a>
                    <div className="media-body">
                        <div>
                            <a className="inline-block text-base font-bold mr-2" href="#">Екатерина Соколова</a>
                            <span className="text-slate-500 dark:text-slate-300">3 минуты назад</span>
                        </div>
                        <p>Dolor sit ameteiusmod consectetur adipiscing elit.</p>
                        <div className="mt-2 flex items-center">
                            <a className="inline-flex items-center py-2 mr-3" href="#">
                                <span className="mr-2">
                                    <svg className="fill-rose-600 dark:fill-rose-400" style={{ width: '22px', height: '22px' }}
                                        viewBox="0 0 24 24">
                                        <path
                                            d="M12.1 18.55L12 18.65L11.89 18.55C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5C9.04 5 10.54 6 11.07 7.36H12.93C13.46 6 14.96 5 16.5 5C18.5 5 20 6.5 20 8.5C20 11.39 16.86 14.24 12.1 18.55M16.5 3C14.76 3 13.09 3.81 12 5.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5C2 12.27 5.4 15.36 10.55 20.03L12 21.35L13.45 20.03C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3Z">
                                        </path>
                                    </svg>
                                </span>
                                <span className="text-base font-bold">0</span>
                            </a>
                            <button className="py-2 px-4 font-medium hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg">
                                Ответить
                            </button>
                        </div>
                    </div>
                </div>


                <div className="w-full">
                    <a href="#"
                        className="py-3 px-4 w-full block bg-slate-100 dark:bg-slate-700 text-center rounded-lg font-medium hover:bg-slate-200 dark:hover:bg-slate-600 transition ease-in-out delay-75">Посмотреть полную статью</a>
                </div>

            </div>

        </article>
    );
};

export default BlogCart;
