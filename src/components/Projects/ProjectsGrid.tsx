import ProjectCardLg from "./ProjectCardLg";

const ProjectsGrid = () => {
    return (
        <div className="space-y-12 mb-40">
            <h1 className="text-4xl font-semibold w-full">Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <ProjectCardLg 
                    link="/projects/paliascheduler"
                    img={"/paliascheduler-hero.png"}
                    alt="A screenshot of the palia scheduler app"
                    dateType="2025 · personal project"
                    title="Palia Scheduler"
                    stackArr={["Next.js", "Tailwind", "Python", "Vitest"]}
                    desc="
                        A scheduling app for Palia (videogame). Users can schedule in-game events and get notified when they're
                        about to go live.
                    "
                />
                <ProjectCardLg 
                    link="/projects/bjjvs"
                    img={"/bjjvs-hero.png"}
                    alt="A screenshot of a video sharing web app"
                    dateType="2025 · personal project"
                    title="Video Sharing Web App"
                    stackArr={["React", "Tailwind", "Express.js", "PostgreSQL", "AWS"]}
                    desc="
                        A video sharing app where Admins can upload videos for users to watch and favorite.
                        Filter by tags to find specific videos by topic.
                    "
                />
                <div className="mt-12">View more of my projects on <a className="underline" target="blank" href="https://github.com/AedanG1">GitHub</a></div>
            </div>
        </div>
    )
}

export default ProjectsGrid;
