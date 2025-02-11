import ProjectCardLg from "./ProjectCardLg";

const ProjectsGrid = () => {
    return (
        <div className="space-y-12 mb-40">
            <h1 className="text-4xl font-semibold w-full">Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <ProjectCardLg 
                    link="/projects/bjjvs"
                    img={"/bjjvs-hero.png"}
                    dateType="2025 · personal project"
                    title="Video Sharing Webapp"
                    stackArr={["React", "Tailwind", "Express.js", "PostgreSQL", "AWS"]}
                    desc="
                        A video sharing app where Admins can upload videos for users to watch and favorite.
                        Filter by tags to find specific videos by topic.
                    "
                />
                <ProjectCardLg 
                    link="/projects/welcomebook"
                    img={"/welcomebook.png"}
                    dateType="2024 · personal project"
                    title="Airbnb Welcomebook app"
                    stackArr={["Python", "Django", "JavaScript"]}
                    desc="A welcomebook app for an Airbnb host to provide information, activities, and rules
                    for their guests."
                />
                <ProjectCardLg 
                    link="/projects/moviewatchlist"
                    img={"/moviewatchlist.png"}
                    dateType="2024 · personal project"
                    title="Movie Watchlist"
                    stackArr={["JavaScript", "HTML", "CSS"]}
                    desc="A movie watchlist app that queries the IMDB database and the OMDB database to provide movie
                    details and available streaming services according to region."
                />
                <ProjectCardLg 
                    link="#"
                    img={"/passwordgenerator.png"}
                    dateType="2024 · personal project"
                    title="Password Generator"
                    stackArr={["React"]}
                    desc="A small password generator app"
                />
                <div className="mt-12">View more of my projects on <a className="underline" target="blank" href="https://github.com/AedanG1">GitHub</a></div>
            </div>
        </div>
    )
}

export default ProjectsGrid;
