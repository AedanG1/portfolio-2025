import ProjectCardSm from "../Projects/ProjectCardSm";

const ProjectsSummary = () => {

    return (
        <div className="flex flex-col md:flex-row mt-44 space-y-6 md:space-y-0">
            <h4 className="text-5xl font-semibold w-full md:w-4/6">Projects</h4>
            <div className="w-full md:w-full flex flex-col gap-4">
                <ProjectCardSm 
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
                <ProjectCardSm 
                    link="/projects/welcomebook"
                    img={"/welcomebook.png"}
                    dateType="2024 · personal project"
                    title="Airbnb Welcomebook app"
                    stackArr={["Python", "Django", "JavaScript"]}
                    desc="A welcomebook app for an Airbnb host to provide information, activities, and rules
                    for their guests."
                />
                <ProjectCardSm 
                    link="/projects/moviewatchlist"
                    img={"/moviewatchlist.png"}
                    dateType="2024 · personal project"
                    title="Movie Watchlist"
                    stackArr={["JavaScript", "HTML", "CSS"]}
                    desc="A movie watchlist app that queries the IMDB database and the OMDB database to provide movie
                    details and available streaming services according to region."
                />
                <ProjectCardSm 
                    link="https://aedang1.github.io/"
                    img={"/passwordgenerator.png"}
                    dateType="2024 · personal project"
                    title="Password Generator"
                    stackArr={["React"]}
                    desc="A small password generator app"
                />
                <div>View more of my projects on <a className="underline" target="blank" href="https://github.com/AedanG1">GitHub</a></div>
            </div>
        </div>
    )
}

export default ProjectsSummary;
