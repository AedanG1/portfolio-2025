import DropdownMenu from "../DropDownMenu";
import NavItem from "./NavItem"
import { Link } from "react-router";
import Icons from "../../assets/Icons/Icons";

const NavBar = () => {

    const routes:{route: string; name: string}[] = [
        { route: "/", name: "Home" },
        { route: "/projects", name: "Projects" },
    ]

    return (
        <nav className="z-50 w-full max-w-7xl mx-auto bg-slate-700/5 backdrop-blur-sm flex flex-row items-center px-4 md:py-8c
        fixed top-0 left-0 right-0 mt-8 h-12 rounded-lg inset-shadow-lg border border-slate-400/40">
            <div className="w-fit space-x-1 hidden md:block ml-auto">
                {routes.map(item => (
                    <NavItem key={item.name} route={item.route} name={item.name} />
                ))}
                <a className="px-4 py-2 border border-neutral-400 inline-flex gap-2 items-center" href="/Aedan_Gallivan_Resume.pdf" target="_blank">
                    Resumé <span>{Icons.ArrowTopRight("size-4")}</span>
                </a>
            </div>
            <div className="md:hidden block">
                <DropdownMenu icon={Icons.Hamburger} activeIcon={Icons.Hamburger}>
                    {routes.map(item => (
                        <Link key={item.name} to={item.route} className="font-semibold">{item.name}</Link>
                    ))}    
                    <a className="px-4 py-2 border border-neutral-400 inline-flex gap-2 items-center" href="/Aedan_Gallivan_Resume.pdf" target="_blank">
                        Resumé <span>{Icons.ArrowTopRight("size-4")}</span>
                    </a>
                </DropdownMenu>
            </div>
        </nav>
    )
}

export default NavBar;
