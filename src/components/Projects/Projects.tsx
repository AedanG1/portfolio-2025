import { NavLink } from "react-router";

const Projects = () => {
    return (
        <div className="space-y-12 mb-40">
            <h1 className="text-4xl font-semibold w-full">Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <NavLink to="/projects/bjjvs">
                    <div className="w-full h-fit py-4 px-4 border border-neutral-400 
                        bg-neutral-100/50 dark:bg-neutral-700/50 
                        shadow-md shadow-neutral-300 dark:shadow-neutral-900 transition ease-in-out
                        flex flex-col gap-4 group
                    ">
                        <div className="basis-2/5 overflow-hidden">
                            <img src="bjjvs-hero.png" className="group-hover:scale-105 transition ease-in-out"></img>
                        </div>
                        <div className="space-y-1 basis-3/5">
                            <p className="text-sm">2025 · personal project</p>
                            <h2 className="text-2xl">Video Sharing Webapp</h2>
                            <ul className="flex flex-row gap-1 flex-wrap">
                                <li className="text-sm border border-neutral-400 px-2">React</li>
                                <li className="text-sm border border-neutral-400 px-2">Tailwind</li>
                                <li className="text-sm border border-neutral-400 px-2">Express.js</li>
                                <li className="text-sm border border-neutral-400 px-2">PostgreSQL</li>
                                <li className="text-sm border border-neutral-400 px-2">AWS</li>
                            </ul>
                            <div className="text-md text-neutral-800 dark:text-neutral-50">
                                A video sharing app where Admins can upload videos for users to watch and favorite.
                                Filter by tags to find specific videos by topic.
                            </div>
                        </div>
                    </div>
                </NavLink>
            </div>
        </div>
    )
}

export default Projects;