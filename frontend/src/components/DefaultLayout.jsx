import { Outlet } from "react-router-dom";

export default function DefaultLayout() {
    return (
        <div>
            hello
            <Outlet />
        </div>
    );
}
