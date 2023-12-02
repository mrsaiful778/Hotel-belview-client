import { Link } from "react-router-dom";


const BannerForth = () => {
    return (
        <div className="grid space-y-3 m-20">
            <h2 className="text-slate-500 py-5 text-5xl font-bold text-center">our available room</h2>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item grid relative w-full ">
                    <img src="https://i.ibb.co/rdxzgBb/pexels-jean-van-der-meulen-1457842.jpg" className="w-full h-[465px]" />

                    <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <div className="grid space-y-4">
                            <h2 className="text-black font-bold text-5xl">Enjoy your tour <br/>in our five star hotel</h2>
                            <p className="text-2xl font-bold text-black">and stay happy...</p>
                            <button className="bg-black rounded-full font-bold text-xl text-slate-400 p-2 w-1/3">Rooms</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>

                </div>
                <div id="slide2" className="carousel-item relative w-full ">
                    <img src="https://i.ibb.co/KVnZ596/pexels-pixabay-262047.jpg" className="w-full h-[465px]" />
                    <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <div className="grid space-y-4">
                            <h2 className="text-white font-bold text-5xl">Enjoy your tour <br/>in our five star hotel</h2>
                            <p className="text-2xl font-bold text-white">and stay happy...</p>
                            <button className="bg-black rounded-full font-bold text-xl text-slate-400 p-2 w-1/3">Rooms</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full ">
                    <img src="https://i.ibb.co/LzM5YhB/pexels-quark-studio-2507010.jpg" className="w-full h-[465px]" />
                    <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <div className="grid space-y-4">
                            <h2 className="text-white font-bold text-5xl">Enjoy your tour <br/>in our five star hotel</h2>
                            <p className="text-2xl font-bold text-white">and stay happy...</p>
                            <button className="bg-black rounded-full font-bold text-xl text-slate-400 p-2 w-1/3">Rooms</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/kqZ6N2Y/pexels-pixabay-260922.jpg" className="w-full h-[465px]" />
                    <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <div className="grid space-y-4">
                            <h2 className="text-white font-bold text-5xl">Enjoy your tour <br/>in our five star hotel</h2>
                            <p className="text-2xl font-bold text-white">and stay happy...</p>
                            <button className="bg-black rounded-full font-bold text-xl text-slate-400 p-2 w-1/3">Rooms</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerForth;