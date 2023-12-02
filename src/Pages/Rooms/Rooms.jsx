import { useEffect, useState } from "react";

import RoomCard from "./RoomCard";
import { Helmet } from "react-helmet-async";
import Testomial from "../Home/Testomial";


const Rooms = () => {
    const [rooms, setRooms] = useState([]);
    useEffect(() => {
        fetch('https://new-hotel-server.vercel.app/rooms')
            .then(res => res.json())
            .then(data => setRooms(data))

    }, [])

    return (
        <div className="my-10 max-w-screen-xl mx-auto">
            <Helmet>
                <title>Hotel Belview || Room</title>
            </Helmet>
            <div className="text-center space-y-5">
                <h3 className="text-3xl font-bold text-sky-500">Welcome</h3>
                <h2 className="text-5xl">Our Available Rooms</h2>
                <p className="font-bold">All our rooms are beautifully decorated, which will make your mind happy. You can enjoy your trip very well here. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 lg:gap-10 pt-6">
                {
                    rooms.map(room => <RoomCard
                        key={room._id}
                        room={room}
                    ></RoomCard>)
                }
            </div>
            <div>
                <Testomial></Testomial>
            </div>

        </div>
    );
};

export default Rooms;