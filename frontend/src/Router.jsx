import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import DefaultLayout from "./components/DefaultLayout";
import GuestLayout from "./components/GuestLayout";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Users from "./pages/auth/Users";
import Notfound from "./pages/handling/Notfound";
import Dashboard from "./pages/Menu/Dashboard";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: "/",
                element: <Navigate to="/dashboard" />,
            },
            {
                path: "/users",
                element: <Users />,
            },
            {
                path: "/dashboard",
                element: <Dashboard />,
            },
        ],
    },
    {
        path: "/",
        element: <GuestLayout />,
        children: [
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/signup",
                element: <Signup />,
            },
        ],
    },

    {
        path: "*",
        element: <Notfound />,
    },
]);

export default Router;
