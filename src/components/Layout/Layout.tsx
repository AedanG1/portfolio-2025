import { Outlet } from "react-router";
import NavBar from "./NavBar";
import Starfield from "./Starfield";
import SpaceshipNav from "../SpaceshipNav";

const Layout = () => {
    return (
        <main className="max-w-6xl mx-auto px-2 pb-64">
            <Starfield />
            <div className="relative z-10">
                <NavBar />
                <SpaceshipNav />
                <div className="mt-32">
                    <Outlet />
                </div>
            </div>
        </main>
    )
}

export default Layout;