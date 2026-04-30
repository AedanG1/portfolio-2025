import ProjectCardSm from "../Projects/ProjectCardSm";
import { meshHero } from "@assets/meshchat"
import { paliaHero } from "@assets/paliascheduler"
import { bjjvsHero } from "@assets/bjjvs"

const ProjectsSummary = () => {

    return (
        <section className="flex flex-col md:flex-row mt-44 space-y-6 md:space-y-0">
            <h4 className="text-5xl font-semibold w-full md:w-4/6">Projects</h4>
            <div className="w-full md:w-full flex flex-col gap-4">
                <ProjectCardSm
                    link="/projects/meshchat"
                    img={meshHero}
                    alt="A screenshot of the mesh topology of the mesh chat app"
                    dateType="2026 · personal project"
                    title="Mesh Chat"
                    stackArr={["Express.js", "React", "TypeScript", "WebSockets", "WebCrypto", "SQLite3"]}
                    desc="
                        An End-to-End Encrypted chat app with an n-to-n mesh server topology.
                    "
                />
                <ProjectCardSm
                    link="/projects/paliascheduler"
                    img={paliaHero}
                    alt="A screenshot of the palia scheduler app"
                    dateType="2025 · personal project"
                    title="Palia Scheduler"
                    stackArr={["Next.js", "Tailwind", "Python", "Vitest"]}
                    desc="
                        A scheduling app for Palia (videogame). Users can schedule in-game events and get notified when they're
                        about to go live.
                    "
                />
                <ProjectCardSm 
                    link="/projects/bjjvs"
                    img={bjjvsHero}
                    alt="A screenshot of a video sharing web app"
                    dateType="2025 · personal project"
                    title="Video Sharing Web App"
                    stackArr={["React", "Tailwind", "Express.js", "PostgreSQL", "AWS"]}
                    desc="
                        A video sharing app where Admins can upload videos for users to watch and favorite.
                        Filter by tags to find specific videos by topic.
                    "
                />
                <div>View more of my projects on <a className="underline" target="blank" href="https://github.com/AedanG1">GitHub</a></div>
            </div>
        </section>
    )
}

export default ProjectsSummary;
