import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Error from "../Pages/Error/Error";
import SignUp from "../Pages/SignUp/SignUp";
import AddService from "../Pages/AddService/AddService";
import Services from "../Pages/Services/Services";
import SingleService from "../Pages/SingleService/SingleService";
import PrivateRoute from "./PrivateRoute";
import ManageService from "../Pages/ManageService/ManageService";
import MySchedule from "../Pages/MySchedule/MySchedule";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/services",
                element: <Services></Services>,
                loader: () =>
                    fetch("https://fix-nest-server.vercel.app/services"),
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/sign-up",
                element: <SignUp></SignUp>,
            },
            {
                path: "/add-service",
                element: (
                    <PrivateRoute>
                        <AddService></AddService>
                    </PrivateRoute>
                ),
            },
            {
                path: "/service/:id",
                element: (
                    <PrivateRoute>
                        <SingleService></SingleService>
                    </PrivateRoute>
                ),
                loader: ({ params }) =>
                    fetch(
                        `https://fix-nest-server.vercel.app/service/${params.id}`
                    ),
            },
            {
                path: "/manageService",
                element: (
                    <PrivateRoute>
                        <ManageService></ManageService>
                    </PrivateRoute>
                ),
            },
            {
                path: "/my-services",
                element: (
                    <PrivateRoute>
                        <MySchedule></MySchedule>
                    </PrivateRoute>
                ),
            },
            {
                path: "/schedule",
                element: (
                    <PrivateRoute>
                        <MySchedule></MySchedule>
                    </PrivateRoute>
                ),
            },
        ],
    },
]);

export default router;
