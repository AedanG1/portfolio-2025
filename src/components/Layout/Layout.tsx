import { Outlet } from "react-router";
import Starfield from "./Starfield";
import SpaceshipNav from "../SpaceshipNav";
import { useLocation } from "react-router";

const Layout = () => {
    const location = useLocation();

    return (
        <main className={`max-w-7xl mx-auto px-2 
        ${(location.pathname === "/projects" || !location.pathname.startsWith("/projects")) && "pb-64"}
        `}>
            <Starfield />
            <div className="relative z-10">
                <SpaceshipNav />
                <div className="mt-42">
                    <Outlet />
                </div>
            </div>
        </main>
    )
}

export default Layout;
