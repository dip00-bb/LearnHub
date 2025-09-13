import { createBrowserRouter } from "react-router";
import App from "../App";
import Register from "../Pages/RegiserPage/Register";
import Login from "../Pages/Login/Login";
import StartLearning from "../Pages/StartLearning/StartLearning";
import PrivateRoute from "../CustomRoute/PrivateRoute";

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
            {
                path: '/posts',
                element: <PrivateRoute><StartLearning></StartLearning></PrivateRoute>
            }

        ]
    }

    // {
    //     path: '*',
    //     Component: ErrorPage
    // }

])