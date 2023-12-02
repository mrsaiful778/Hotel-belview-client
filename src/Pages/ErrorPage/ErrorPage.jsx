
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="max-w-screen-xl  mx-auto">
            
            <div className="mx-auto">
            <img  className="h-96 items-center mx-auto my-20" src="https://i.ibb.co/DG2jQGg/5155989-2683888.jpg" alt="" />
            </div>
            <div className="text-center">
            <Link to="/">
            <button className="btn btn-accent ">Go to home</button>
            </Link>
            </div>
        </div>
    );
};

export default ErrorPage;