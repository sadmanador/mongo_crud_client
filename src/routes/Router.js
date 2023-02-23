import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import AddUser from "../pages/AddUser/AddUser";
import Home from "../pages/Home/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/addUser',
                element: <AddUser></AddUser>
            }
        ]
    }
])