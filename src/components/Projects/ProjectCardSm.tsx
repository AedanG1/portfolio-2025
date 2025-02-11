import { NavLink } from "react-router";

interface ProjectCardSmProps {
    link: string;
    img: string;
    dateType: string;
    title: string;
    stackArr: string[];
    desc: string;
}

const ProjectCardSm = ({link, img, dateType, title, stackArr, desc}: ProjectCardSmProps) => {

    const techStack = stackArr.map(item => (
        <li className="text-sm border border-neutral-400 px-2">{item}</li>
    ))

    return (
        <NavLink to={link}>
            <div className="w-full h-fit py-4 px-4 border border-neutral-400 
            bg-neutral-100/50 dark:bg-neutral-700/50 
            shadow-md shadow-neutral-300 dark:shadow-neutral-900 transition ease-in-out
            flex flex-col md:flex-row gap-4 group
            ">
                <div className="basis-2/5 overflow-hidden">
                    <img src={img} className="group-hover:scale-105 transition ease-in-out" />
                </div>
                <div className="space-y-1 basis-3/5">
                    <p className="text-sm">{dateType}</p>
                    <h5 className="text-2xl">{title}</h5>
                    <ul className="flex flex-row gap-1 flex-wrap">
                        {techStack}
                    </ul>
                    <h5 className="text-sm text-neutral-800 dark:text-neutral-50">{desc}</h5>
                </div>
            </div>
        </NavLink>
    )
}

export default ProjectCardSm;