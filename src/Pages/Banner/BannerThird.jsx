

const BannerThird = () => {
    return (
        <div>
            <div className="mt-14">
                <h2 className="text-center text-5xl font-bold mb-20">Our Location</h2>
                <div className="mb-36 lg:flex lg:ml-20 lg:justify-between" data-aos="zoom-in" data-aos-duration="2000">

                    <div className="flex-1">
                        <h2 className="text-center text-4xl font-semibold">Nearest some Interest Place</h2>

                        <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 gap-10 ">
                            <div>
                            <img className="lg:w-[400px] w-full h-[200px]" src="https://i.ibb.co/yf0SyQ3/download.jpg" alt="" />
                            <h2 className="text-xl font-semibold mt-2 mb-2">Boalkhali River View</h2>
                            <hr />
                            </div>
                            <div>
                            <img className="lg:w-[400px] w-full h-[200px]" src="https://i.ibb.co/PtyzGTH/Chittagong-War-Cemetery-8.jpg" alt="" />
                            <h2 className="text-xl font-semibold mt-2 mb-2">war cemetery</h2>
                            <hr />
                            </div>
                            <div >
                            <img className="lg:w-[400px] w-full h-[200px]" src="https://i.ibb.co/bNP39nK/345379828.jpg" alt="" />
                            <h2 className="text-xl font-semibold mt-2 mb-2">Radisson Blu Hotel</h2>
                            <hr />
                            </div>
                            <div >
                            <img className="lg:w-[400px] w-full h-[200px]" src="https://i.ibb.co/209vCyp/download-1.jpg" alt="" />
                            <h2 className="text-xl font-semibold mt-2 mb-2">Peninsula Chittagong</h2>
                            <hr />
                            </div>
                        </div>

                    </div>

                    <div className="flex-1 lg:ml-[150px]">

                    <iframe width="100%" height="600" scrolling="no" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=chittagon%20boalkhali%20river%20view+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Find Population on Map</a></iframe>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default BannerThird;