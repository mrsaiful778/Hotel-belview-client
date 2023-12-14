import Swal from "sweetalert2";
import useAxios from "../hook/useAxios";


const Booking = ({book}) => {

    const myAxios = useAxios();

    const cancleHandle = id =>{

        myAxios.delete(`/bookings/${id}`)
        .then(res =>{
            console.log(res.data)
            if(res.data.deletedCount){
                Swal.fire({
                    title: "Good job!",
                    text: "Cancle Successful!",
                    icon: "success"
                  });  
                  window.location.reload()
            }
        })
        .catch(error =>{
            console.log(error);
        })
    }

    const dateUpdateHandle = e =>{
        e.preventDefault();
        const form = e.target;
        const date = form.date.value;
        const newDate = {date}
        console.log(newDate)
   
        myAxios.put(`/bookings/${book._id}`, newDate)
        .then(res =>{
            console.log(res.data);
            window.location.reload()
            Swal.fire({
                title: "Good job!",
                text: "Date Updated Successful!",
                icon: "success"
                
              });
              window.location.reload()
           
              
        })
        .catch(error => {
            console.log(error);
        })

   
      }
   

    return (
        <div className="grid md:grid-cols-5 py-20 " key={book._id}>
            <div className="col-span-1">
                <img className="w-44 h-44" src={book?.img} alt="" />
            </div>
            
                        <div className="col-span-3 flex items-center">
                <div>
                    <h2 className="text-2xl font-semibold mb-5">{book.title}</h2>
                    <p>{book.date}</p>
                </div>
            </div>
            <div className="col-span-1 flex items-center">
                <div>
                    <button onClick={()=>cancleHandle(book._id)} className="btn btn-accent w-full">Cancel</button>
                    <form onSubmit={dateUpdateHandle}>
                        <input className="py-2 w-full bg-sky-300 my-4 px-2" type="date" name='date' />
                        <br />
                        <input className="btn btn-accent w-full" type="submit" value="Update" />
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Booking;