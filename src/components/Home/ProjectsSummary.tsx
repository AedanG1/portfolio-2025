import { NavLink } from "react-router";

const ProjectsSummary = () => {

    return (
        <div className="flex flex-col md:flex-row mt-44 space-y-6 md:space-y-0">
            <h4 className="text-5xl font-semibold w-full md:w-4/6">Projects</h4>
            <div className="w-full md:w-full flex flex-col gap-12">
                <NavLink to="/projects/bjjvs">
                    <div className="w-full h-fit py-4 px-4 border border-neutral-400 
                    bg-neutral-100/50 dark:bg-neutral-700/50 
                    shadow-md shadow-neutral-300 dark:shadow-neutral-900 transition ease-in-out
                    flex flex-col md:flex-row gap-4 group
                    ">
                        <div className="basis-2/5 overflow-hidden">
                            <img src="/bjjvs-hero.png" className="group-hover:scale-105 transition ease-in-out" />
                        </div>
                        <div className="space-y-1 basis-3/5">
                            <p className="text-sm">2025 · personal project</p>
                            <h5 className="text-2xl">Video Sharing Webapp</h5>
                            <ul className="flex flex-row gap-1 flex-wrap">
                                <li className="text-sm border border-neutral-400 px-2">React</li>
                                <li className="text-sm border border-neutral-400 px-2">Tailwind</li>
                                <li className="text-sm border border-neutral-400 px-2">Express.js</li>
                                <li className="text-sm border border-neutral-400 px-2">PostgreSQL</li>
                                <li className="text-sm border border-neutral-400 px-2">AWS</li>
                            </ul>
                            <h5 className="text-sm text-neutral-800 dark:text-neutral-50">
                                A video sharing app where Admins can upload videos for users to watch and favorite.
                                Filter by tags to find specific videos by topic.
                            </h5>
                        </div>
                    </div>
                </NavLink>
                <div>View more of my projects on <a className="underline" target="blank" href="https://github.com/AedanG1">GitHub</a></div>
            </div>
        </div>
    )
}

export default ProjectsSummary;
