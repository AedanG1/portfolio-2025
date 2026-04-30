import { Outlet } from "react-router";
import NavBar from "./NavBar";
import Starfield from "./Starfield";

const Layout = () => {
    return (
        <>
            <Starfield />
            <div className="relative z-10">
                <NavBar />
                <div className="mt-32">
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default Layout;