
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';


import { useEffect, useState } from 'react';

import { useContext } from 'react';


import Swal from 'sweetalert2';

import '@smastrom/react-rating/style.css'
import { Rating } from '@smastrom/react-rating';
import { AuthContext } from '../../Providers/AuthProvider';
import useAxios from '../hook/useAxios';






const Testomial = () => {
    const { user } = useContext(AuthContext)
    const roomApi = useAxios();



    const handleClientFeedback = e => {
        e.preventDefault();
        const form = e.target;
        const UserName = user?.displayName;
        const userEmail = user?.email;
        const userPhoto = user?.photoURL;
        const userFeedback = form.userFeedback.value;
        const rating = form.rating.value;
        const hotelClientReview = { UserName, userFeedback, rating, userPhoto, userEmail };
        console.log(hotelClientReview);

        roomApi.post('/feedbacks', hotelClientReview)
            .then(res => {
                console.log(res.data);
                if (res?.data?.insertedId) {
                    Swal.fire(
                        'Thank You',
                        'Successfully Review Post',
                        'success'
                    )
                    form.reset();
                    window.location.reload()
                }
            })
            .catch(error => {
                console.log(error);
            })

    }

    const [feedBack, setFeedBack] = useState([]);
    useEffect(() => {
        roomApi.get('/feedbacks')
            .then(res => {

                console.log(res.data);
                const userFeedback = res?.data
                setFeedBack(userFeedback)
            })
            .catch(error => {
                console.log(error);
            })
    }, [roomApi])


    return (


        <>

            <section className="space-y-4" data-aos="zoom-in" data-aos-duration="3000">

                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {
                        feedBack.map(review => <SwiperSlide key={review._id}>
                            <div className="max-w-screen-lg mx-auto space-y-5 text-center my-16">
                                <div className='flex justify-center '>
                                    <img className='w-40 h-40 rounded-full' src={review.userPhoto} alt="" />
                                </div>
                                <div className="flex justify-center text-5xl text-[#CD9003]"><Rating
                                    style={{ maxWidth: 180 }}
                                    value={review?.rating}
                                    readOnly
                                /></div>


                                <p>{review.userFeedback}</p>
                                <h3 className="text-3xl font-medium text-[#CD9003]">{review.UserName}</h3>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </section>


            {
                user ? <div className='max-w-screen-xl  mx-auto w-2/3 bg-white p-5 rounded-xl my-20 border'>
                    <form onSubmit={handleClientFeedback}>
                        <h3 className='text-3xl italic font-bold text-center mb-5'>Our Hotel Clients Feedback </h3>
                        <input className='bg-white py-2 w-full rounded-lg px-2 border' type="text" name='name' defaultValue={user?.displayName} /> <br /> <br />
                        <input className='bg-white py-2 w-full rounded-lg px-2 border' type="email" name="email" id="" defaultValue={user?.email} /> <br /> <br />
                        <input className='bg-white py-2 w-full rounded-lg px-2 border' type="text" name="rating" placeholder='Rating' id="" /> <br /> <br />
                        <textarea className='bg-white py-2 w-full rounded-lg px-2 border' placeholder='Please type your feedback' name="userFeedback" id="" cols="30" rows="6"></textarea>
                        <button type='submit' className='rounde-full p-2 bg-sky-300 text-white hover:text-black w-full mt-5'>Submit</button>
                    </form>
                </div>
                :
                ""
           }

        </>
    );
};

export default Testomial;