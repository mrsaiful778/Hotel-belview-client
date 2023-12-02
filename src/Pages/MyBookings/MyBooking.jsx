import { useContext, useEffect, useState } from "react";
import useAxios from "../hook/useAxios";
import { AuthContext } from "../../Providers/AuthProvider";
import Booking from "./Booking";
import { Helmet } from "react-helmet-async";



const MyBooking = () => {


    const { user } = useContext(AuthContext);

    const [bookings, setBookings] = useState([])

    const myAxios = useAxios()

    useEffect(() => {
        myAxios.get("/bookings")
            .then(res => {
                console.log(res.data)
                const apiData = res.data;
                const searchEmail = apiData.filter(apiD => apiD.clientEmail == user?.email)
                setBookings(searchEmail)
            })
            .catch(error => {
                console.log(error);
            })
    }, [myAxios, user?.email])




    return (
        <div>
            <Helmet>
                <title>Hotel Paradise || My Booking</title>
            </Helmet>
            <div className="">
                {
                    bookings.map(book => <Booking
                        key={book._id}
                        book={book}
                    ></Booking>)
                }
            </div>
        </div>
    );
};

export default MyBooking;