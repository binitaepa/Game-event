
import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import ErrorPage from "../ErrorPage/ErrorPage";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoutes";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import About from "../pages/About/About";
import News from "../pages/News/News";

const routes= createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            errorElement:<ErrorPage></ErrorPage>,
            loader:()=>fetch('/service.json')

            
        },
        {
            path:'/details/:id',
            element:<PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
            loader:()=>fetch('/service.json')

        },
        {
            path:'/about',
            element:<PrivateRoute><About></About></PrivateRoute>,
            loader:()=>fetch('/service.json')

        },
        { 
            path:'/news',
            element:<PrivateRoute><News></News></PrivateRoute>,
            loader:()=>fetch('/service.json')


        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        }
      ]
    },

  ]);

  export default routes;