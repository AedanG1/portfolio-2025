import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import FrontendSkills from "./FrontendSkills";
import BackendSkills from "./BackendSkills";
import OtherSkills from "./OtherSkills";

type SelectOptions = "frontend" | "backend" | "other";

type SkillOption = {
    name: SelectOptions;
    component: any;
};

const SkillSummary = () => {
    const [selectedSkill, setSelectedSkill] = useState<SelectOptions | "">("frontend");

    const handleSkillClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const skill  = event.currentTarget.name as SelectOptions;
        setSelectedSkill(skill);
    }

    const svgSizes: string = "size-9 md:size-12";

    const options: SkillOption[] = [
        {"name": "frontend", "component": <FrontendSkills key={"frontend"} svgSizes={svgSizes} />},
        {"name": "backend", "component": <BackendSkills key={"backend"} svgSizes={svgSizes} />},
        {"name": "other", "component": <OtherSkills key={"other"} svgSizes={svgSizes} />}
    ]

    return(
        <section className="space-y-2">
            <h4 className="w-full md:w-1/2 text-xl place-self-center">My tools so far,</h4>
            <div className="w-full md:w-1/2 place-self-center px-2 py-2 flex flex-row">
                {options.map((option) => (
                    <button
                        key={`button-${option.name}`}
                        name={option.name}
                        onClick={handleSkillClick}
                        type="button"
                        data-active={selectedSkill === option.name}
                        className={`relative w-1/3 text-sm py-2 px-2 hover:cursor-pointer hover:text-neutral-800 hover:dark:text-neutral-50
                            ${selectedSkill === option.name ? "text-neutral-800 dark:text-neutral-50" : "text-neutral-500 dark:text-neutral-400"}`}
                    >
                        {option.name.charAt(0).toUpperCase() + option.name.slice(1)}
                        {selectedSkill === option.name && <motion.div
                            // layoutId="skillUnderline"
                            className="absolute w-full h-full top-0 left-0 right-0 border border-neutral-400" 
                        ></motion.div>}
                    </button>
                ))}
            </div>
            <div className="flex flex-row items-center justify-center gap-4 w-full md:w-1/2 h-40 
                bg-neutral-100/50 dark:bg-neutral-700/50 
                border border-neutral-400 place-self-center py-4 px-4">
                <AnimatePresence mode="wait">
                        {options
                            .filter(option => selectedSkill === option.name)
                            .map(option => (
                                <motion.div
                                    key={`div-${option.name}`}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.2 }}
                                    className="flex flex-row items-center justify-center gap-4 w-full flex-wrap"
                                >
                                {option.component}
                                </motion.div>
                             ))}
                </AnimatePresence>
            </div>
        </section>
    )
};

export default SkillSummary;