import SkillSummary from "./SkillSummary";
import ProjectsSummary from "./ProjectsSummary";
import Icons from "../Icons/Icons";

const Home = () => {

    return(
        <div className="mb-64 space-y-24">
            <div className="flex md:flex-row">
                <div className="md:w-1/2">
                    <h1 className="font-primary text-3xl text-neutral-500 dark:text-neutral-400">Aedan Gallivan</h1>
                    <h2 className="text-5xl font-semibold">Web Designer and Developer</h2>
                    <h3 className="mt-4 text-xl text-neutral-500 dark:text-neutral-400">
                        With a foundation in design, I turn ideas into
                        engaging full-stack web applications by blending user-centered design
                        principles with modern web development.
                    </h3>
                    <div className="mt-8">
                        <a className="px-4 py-2 border border-neutral-400 inline-flex items-center gap-2" href="AedanGallivan-Resume2025.pdf" target="_blank" >
                            View Resumé <span>{Icons.ArrowTopRight("size-4")}</span>
                        </a>
                    </div>
                </div>
            </div>
            <SkillSummary />
            <ProjectsSummary />
        </div>
    )
};

export default Home;
