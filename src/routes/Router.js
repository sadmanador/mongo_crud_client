import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import AddUser from "../pages/AddUser/AddUser";
import Home from "../pages/Home/Home";
import UpdateUser from "../pages/UpdateUser/UpdateUser";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ({params}) => fetch("http://localhost:5000/users")
        ,
      },
      {
        path: "/addUser",
        element: <AddUser></AddUser>,
      },
      {
        path: "/updateUser/:id",
        element: <UpdateUser></UpdateUser>,
        loader: ({params}) => fetch(`http://localhost:5000/users/${params.id}`)
      },
    ],
  },
]);
