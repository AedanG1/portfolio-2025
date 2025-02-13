import ProjectCardLg from "./ProjectCardLg";

const ProjectsGrid = () => {
    return (
        <div className="space-y-12 mb-40">
            <h1 className="text-4xl font-semibold w-full">Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
                <ProjectCardLg 
                    link="/projects/welcomebook"
                    img={"/welcomebook.png"}
                    alt="A screenshot of an Airbnb web based welcomebook"
                    dateType="2024 · personal project"
                    title="Airbnb Welcomebook app"
                    stackArr={["Python", "Django", "JavaScript"]}
                    desc="A welcomebook app for an Airbnb host to provide information, activities, and rules
                    for their guests."
                />
                <ProjectCardLg 
                    link="/projects/moviewatchlist"
                    img={"/moviewatchlist.png"}
                    alt="A screenshot of a movie watchlist web app"
                    dateType="2024 · personal project"
                    title="Movie Watchlist"
                    stackArr={["JavaScript", "HTML", "CSS"]}
                    desc="A movie watchlist app that queries the IMDB database and the OMDB database to provide movie
                    details and available streaming services according to region."
                />
                <ProjectCardLg 
                    link="https://aedang1.github.io/"
                    img={"/passwordgenerator.png"}
                    alt="A screenshot of a password generator"
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
