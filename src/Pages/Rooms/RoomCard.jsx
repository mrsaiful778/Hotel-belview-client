
import { Link } from 'react-router-dom';

const RoomCard = ({ room }) => {

    const { _id, title, img, price, views } = room || {}

    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <Link to={`/checkout/${_id}`}><figure><img src={img} alt="Shoes" /></figure></Link>
            <div className="py-4 px-3 space-y-4">
                <h2 className="text-2xl h-16 font-semibold ">{title}</h2>
                <div className='flex justify-between items-center'>
                    
                    <p className='text-xl font-bold'>Price : ${price}</p>
                    <p >Views : {views}</p>
                </div>

            </div>

        </div>
    );
};

export default RoomCard;