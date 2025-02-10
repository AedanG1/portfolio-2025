import SkillSummary from "./SkillSummary";
import ProjectsSummary from "./ProjectsSummary";

const Home = () => {

    return(
        <div className="mb-64 space-y-24">
            <div className="flex md:flex-row">
                <div className="md:w-1/2">
                    <h1 className="font-primary text-3xl text-neutral-500 dark:text-neutral-400">Aedan Gallivan</h1>
                    <h2 className="text-5xl font-semibold">Web Designer and  Developer</h2>
                    <h3 className="mt-4 text-xl text-neutral-500 dark:text-neutral-400">
                        I design and develop full-stack web applications with a focus on user experience.
                    </h3>
                </div>
            </div>
            <SkillSummary />
            <ProjectsSummary />
        </div>
    )
};

export default Home;