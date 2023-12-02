

const BannerSecond = () => {
    return (
        <div className="hero min-h-screen bg-white">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                    <img src='https://i.ibb.co/xGdbKhh/pexels-ahmet-t-r-18971223-1.jpg' className="w-3/4 rounded-lg shadow-2xl" />
                    <img src='https://i.ibb.co/bBQFNsw/pexels-thorsten-technoman-338504-1.jpg' className="w-1/2 absolute right-5 top-1/2 border-8 border-white rounded-lg shadow-2xl" />
                </div>

                <div className='lg:w-1/2 space-y-5'data-aos="zoom-in" data-aos-duration="3000">
                    <h3 className='text-3xl text-sky-500 font-bold '>___Special Offer____</h3>
                    <h1 className="text-5xl font-bold">We are offering <span>20%</span> discount</h1>
                    <p className="font-semibold">Are you itching for a getaway, but worried about breaking the bank on accommodations? Well, here's some exciting news to brighten your day: you can now enjoy a 20% discount on your hotel room! Whether it's a weekend escape, a business trip, or a long-awaited vacation, this discount can make your stay more affordable and enjoyable. </p>
                    <p className='font-semibold'>20% hotel room discount means more cash for you to spend on other experiences during your trip. Treat yourself to a fancy dinner, explore local attractions, or simply save it for your next adventure. </p>
                   
                </div>
            </div>
        </div>
    );
};

export default BannerSecond;