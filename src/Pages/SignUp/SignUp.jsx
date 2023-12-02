import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";


const SignUp = () => {
    const [success, setSuccess] = useState('');
    const [registerError, setRegisterError] = useState('');
    

    const {createUser} = useContext(AuthContext);
    

    const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)


        setRegisterError('')
        if (password.length < 6) {
            setRegisterError('Please 6 character or longest password');
            return;
        }
        if (!/[A-Z]/.test(password)) {
            setRegisterError('please at least one uppercase');
            return;
        }
        if (!/[!@#$%^&*]/.test(password)) {
            setRegisterError('please type one spacial character');
            return;
        }

        createUser(email, password)
        .then(res => {
            console.log(res.user)

            setSuccess('You Register SuccessFully Complete')
            updateProfile(res.user, {
                displayName: name,
                
            })
                .then(() => {
                    console.log('Done')
                    window.location.reload()
                    Swal.fire({
                        title: "Good job!",
                        text: "Sign Up Successful!",
                        icon: "success"
                      });
                })
                .catch(error => {
                    console.log(error)
                })
        })
        .catch(error => {

            console.log(error)
        })

    }

    // const googleLogIn = () => {
    //     googleLogged()
    //         .then(result => {
    //             console.log(result)
    //             navigate(location?.state ? location.state : "/")
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         })
    // }

    return (
        <div className="">
        <ToastContainer />
            <div className="pb-10 lg:w-1/2 lg:max-w-6xl mx-auto ">
                <h1 className="text-center text-2xl p-5 font-semibold text-sky-700">Sign Up here...</h1>
                <div className=" shadow-2xl rounded-2xl bg-gradient-to-r from-sky-200 via-sky-500 to-sky-200">
                    <form onSubmit={handleSignUp} className="p-6">
                    <div className="form-control">
                            <label className="label">
                                <span className="font-bold">Name</span>
                            </label>
                            <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="font-bold">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="font-bold">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            
                        </div>
                        {
                                registerError && <p className="text-center text-red-700">{registerError}</p>
                            }
                            {
                                success && <p className="text-center text-red-700">{success}</p>
                            }
                        <div className="form-control mt-6">
                            <button className="p-3 text-xl font-bold  text-white bg-gradient-to-r from-sky-400 via-sky-700 to-sky-400">Sign Up</button>
                        </div>
                    </form>
                    <p className="pb-6 text-center">Already have an account? <Link to={'/login'} className="text-white">Log In</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;