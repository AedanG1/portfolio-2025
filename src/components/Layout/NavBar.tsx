import DropdownMenu from "../DropDownMenu";
import NavItem from "./NavItem"
import { Link } from "react-router";
import Icons from "../Icons/Icons";

const NavBar = () => {

    const routes:{route: string; name: string}[] = [
        { route: "/", name: "Home" },
        { route: "/projects", name: "Projects" },
        { route: "/Contact", name: "Contact" },
    ]

    return (
        <nav className="z-50 w-full max-w-7xl mx-auto bg-neutral-50 dark:bg-neutral-800 flex flex-row justify-between items-center px-2 py-4 md:py-8c
        fixed top-0 left-0 right-0 h-24">
            <Link to={"/"} className="font-light text-nowrap px-4 py-2 border border-neutral-400">AG</Link>
            <div className="w-fit space-x-4 hidden md:block">
                {routes.map(item => (
                    <NavItem key={item.name} route={item.route} name={item.name} />
                ))}
                <a className="px-4 py-2 border border-neutral-400 inline-flex gap-2 items-center" href="AedanGallivan-Resume2025.pdf" target="_blank">
                    Resumé <span>{Icons.ArrowTopRight("size-4")}</span>
                </a>
            </div>
            <div className="md:hidden block">
                <DropdownMenu icon={Icons.Hamburger} activeIcon={Icons.Hamburger}>
                    {routes.map(item => (
                        <Link key={item.name} to={item.route} className="font-semibold">{item.name}</Link>
                    ))}    
                    <a className="px-4 py-2 border border-neutral-400 inline-flex gap-2 items-center" href="AedanGallivan-Resume2025.pdf" target="_blank">
                        Resumé <span>{Icons.ArrowTopRight("size-4")}</span>
                    </a>
                </DropdownMenu>
            </div>
        </nav>
    )
}

export default NavBar;
