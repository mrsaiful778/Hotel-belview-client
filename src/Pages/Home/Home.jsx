
import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import BannerForth from "../Banner/BannerForth";
import BannerSecond from "../Banner/BannerSecond";
import BannerThird from "../Banner/BannerThird";



const Home = () => {
    return (
        <div>

            <Helmet>
                <title>Hotel Belview || Home</title>
            </Helmet>
            
            <Banner></Banner>
            <BannerThird></BannerThird>
            <BannerSecond></BannerSecond>
            <BannerForth></BannerForth>
            
            
        </div>
    );
};

export default Home;