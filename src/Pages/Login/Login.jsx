import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";


const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();



    const { signIn, googleLoggedIn } = useContext(AuthContext);



    const handleLogin = event => {

        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                Swal.fire({
                    title: "Good job!",
                    text: "Log in Successful!",
                    icon: "success"
                });
                navigate(location?.state ? location.state : '/');

            })
            .catch(error => console.log(error));
    }

    const handleGoogleLogIn = () => {
        googleLoggedIn()
            .then(res => {
                Swal.fire({
                    title: "Good job!",
                    text: "Log in Successful!",
                    icon: "success"
                });
                navigate(location?.state ? location.state : '/');
                console.log(res)
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className="">
            <div className="pb-10 lg:w-1/2 lg:max-w-6xl mx-auto ">
                <h1 className="text-center text-2xl p-5 font-semibold text-sky-700">Welcome To Login here</h1>
                <div className=" shadow-2xl rounded-2xl bg-gradient-to-r from-sky-200 via-sky-500 to-sky-200">
                    <form onSubmit={handleLogin} className="p-6">
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
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="p-3 text-xl font-bold  text-white bg-gradient-to-r from-sky-400 via-sky-700 to-sky-400">Log In</button>
                        </div>
                    </form>
                    <p className="text-center -mt-4 mb-2">or</p>
                    <div className="px-6">
                        
                    <button onClick={handleGoogleLogIn} className="flex gap-1 pl-24 lg:pl-56 pb-2">
                        <img className="mt-1 h-5 w-5" src="https://i.ibb.co/bbHX8RP/google-512x512-1.png" />Google logged in
                    </button>
                </div>
                <p className="pb-6 text-center">New to here <Link className="text-white" to="/signup">Sign Up</Link></p>
            </div>
        </div>
        </div >
    );
};

export default Login;