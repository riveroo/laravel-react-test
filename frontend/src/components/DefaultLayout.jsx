import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";
import Navbar from "./Navbar";

export default function DefaultLayout() {
    const { user, token } = useStateContext();

    if (!token) {
        return <Navigate to="/login" />;
    }

    return (
        <div>
            <Navbar />
            <div className="max-w-[85%]  mx-auto mt-4">
                <Outlet />
            </div>
        </div>
    );
}
