import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const Details = () => {

    const [details, setDetails] = useState({});
    const { id } = useParams();
    const detailsData = useLoaderData()
    const myData = {
        title: details.title,
        image: details.image,
        price: details.price,
        description: details.description,
        size: details.size

    }
    useEffect(() => {
        const result = detailsData.find(detail => detail._id == id)
        setDetails(result);
    }, [detailsData, id])
    const addCartHandle = (id)=>{
   console.log(id)
   fetch('room.jason')
   .then(res=>res.json())
   .then(data=>{
    console.log(data)
    
    
   })

    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={details.image} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className="p-3">
                        <h1 className="text-5xl text-sky-700 font-bold">{details.title}</h1>
                        <p className="text-2xl pt-2">Price: {details.price}</p>
                        <p className="py-6">{details.description}</p>
                        <p className="py-6">available</p>
                        <button onClick={addCartHandle} className="text-black font-semibold bg-gradient-to-r from-sky-800 via-orange-200 to-sky-800 p-2 rounded-xl">Book Now</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Details;