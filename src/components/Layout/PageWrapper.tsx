import { motion } from "motion/react";

const PageWrapper = ({children}: any) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 30 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -30 }}
			transition={{ duration: 0.3 }}
			onAnimationComplete={() => window.scrollTo(0, 0)}
			className="w-full"
		>
			{children}
		</motion.div>
	)
};

export default PageWrapper;
