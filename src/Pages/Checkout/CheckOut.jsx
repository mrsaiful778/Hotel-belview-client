import { useContext, useEffect, useState } from "react";
import useAxios from "../hook/useAxios";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { toast } from "react-toastify";
import Swal from "sweetalert2";



const CheckOut = () => {

    const myAxios = useAxios()
    const { id } = useParams()
    const { user } = useContext(AuthContext)
    const [rooms, setRooms] = useState({})
    const [hidden, setHidden] = useState(true)

    useEffect(() => {
        myAxios.get('/rooms')
            .then(res => {
                const api = res.data
                const findData = api.find(detail => detail._id == id)
                setRooms(findData)
            })
    }, [myAxios, id])

    const { title, description, price, room_size, img, status } = rooms;


    const handleBooking = e => {
        e.preventDefault();
        const form = e.target;
        const date = form.date.value;
        const clientName = user?.displayName
        const clientEmail = user?.email
        console.log(date, clientEmail, clientName);

        if (date == '') {
            return toast.error('Please provide a booking date');
        }
        myAxios.post('/bookings', {
            clientName: user?.displayName,
            clientEmail: user?.email,
            date,
            title,
            img


        })
            .then(res => {
                if (res.data.insertedId) {

                    Swal.fire({
                        title: "Good job!",
                        text: "Booking Successful!",
                        icon: "success"
                    });
                }
                setHidden(false)

            })
    }

    return (
        <div className="grid lg:flex bg-white pb-10 pl-14">
            
            <div className="w-full">
                <div className="space-y-5">
                    <h2 className="text-sky-600 font-bold text-4xl pt-10">{title}</h2>

                    <p className="w-1/2 text-sky-800 font-bold">{description}</p>
                    <p className="text-xl font-bold text-sky-500">Price per Day: {price}$</p>
                    <p>{room_size}</p>
                    <p>{status}</p>
                    <p className="text-sky-700 font-semibold"><span className="text-xl font-semibold text-sky-700">Offer </span>: 25% off for a 7-night stay</p>
                    <div className="w-1/3 pt-8 lg:pt-12">
                        {
                            hidden ? <div className="space-y-3">
                                <form onSubmit={handleBooking}>
                                    <input type="date" name="date" id="" /> <br />



                                    <button type="submit" className="btn btn-accent">Book Now</button>

                                </form>
                            </div>
                                :
                                <div className="space-y-3">
                                    <form >
                                        <input type="date" name="date" id="" /> <br />



                                        <button className="btn btn-disabled">Book Now</button>

                                    </form>
                                </div>
                        }
                    </div>

                </div>

                <div className="grid justify-between lg:flex">
                    <img src={img} className="w-1/3 pt-7 pb-7" />




                </div>
            </div>

        </div>

    );
};

export default CheckOut;