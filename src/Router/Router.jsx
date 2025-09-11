import { createBrowserRouter } from "react-router";
import App from "../App";
import Register from "../Pages/RegiserPage/Register";
import Login from "../Pages/Login/Login";

export const router = createBrowserRouter([

    {
        path: '/',
        Component: App,
        children: [

            {
                path: '/register',
                Component: Register
            },
            {
                path: '/login',
                Component: Login
            },


        ]
    }

    // {
    //     path: '*',
    //     Component: ErrorPage
    // }

])