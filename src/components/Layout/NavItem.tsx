import { useLocation, Link } from "react-router";
import { motion } from "motion/react";

interface NavItemProps {
    route: string;
    name: string;
}

const NavItem = ({ route, name }: NavItemProps) => {
	const location = useLocation();
	const isActive = location.pathname === route;

	const activeStyles = isActive ? 
		"text-neutral-800 dark:text-neutral-100" 
		: "";

	return (
		<Link 
			to={route}
			className={`relative px-4 py-2 text-neutral-400 
			hover:text-neutral-800 dark:hover:text-neutral-100
			${activeStyles}`}
		>
			<span className="relative z-10">{name}</span>
			{isActive && (
				<motion.div 
					layoutId="navUnderline"
					className="absolute top-0 left-0 h-full w-full border-b-2 border-black dark:border-white"
				>
				</motion.div>
			)}
		</Link>
    )
}

export default NavItem;