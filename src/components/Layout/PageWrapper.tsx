import { useLayoutEffect } from "react";
import { motion } from "motion/react";

const PageWrapper = ({children}: any) => {
	useLayoutEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<motion.div
			initial={{ opacity: 0, y: 30 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -30 }}
			transition={{ duration: 0.3 }}
			className="w-full"
		>
			{children}
		</motion.div>
	)
};

export default PageWrapper;
