import { Outlet } from "react-router";
import NavBar from "./NavBar";

const Layout = () => {
    return (
        <>
            <NavBar />
            <div className="mt-32">
                <Outlet />
            </div>
        </>
    )
}

export default Layout;