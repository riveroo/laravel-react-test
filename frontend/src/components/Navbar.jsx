import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="w-full h-10 bg-gray-200">
            <div className="flex gap-8 h-full items-center justify-center font-medium">
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/users">User</Link>
            </div>
        </div>
    );
};

export default Navbar;
