import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Rooms from "../Pages/Rooms/Rooms";
import Details from "../Pages/Details/Details";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import MyBooking from "../Pages/MyBookings/MyBooking";
import CheckOut from "../Pages/Checkout/CheckOut";
import PrivateRouter from "./PrivateRouter";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path:"rooms",
            element: <Rooms></Rooms>
        },
        {
          path:'/Details/:id',
          element: <Details></Details>,
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'signup',
          element: <SignUp></SignUp>
        },
        {
          path: 'bookings',
          element: <PrivateRouter><MyBooking></MyBooking></PrivateRouter>
        },
        {
          path:'checkout/:id',
          element:<PrivateRouter><CheckOut></CheckOut></PrivateRouter>
        }
        
      ]
    },
  ]);

export default router;