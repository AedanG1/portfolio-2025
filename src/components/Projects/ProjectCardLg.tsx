import { NavLink } from "react-router";

interface ProjectCardLgProps {
    link: string;
    img: string;
    dateType: string;
    title: string;
    stackArr: string[];
    desc: string;
}

const ProjectCardLg = ({link, img, dateType, title, stackArr, desc}: ProjectCardLgProps) => {

    const techStack = stackArr.map(item => (
        <li className="text-sm border border-neutral-400 px-2">{item}</li>
    ))

    const isExternal = link.startsWith("http");

    const CardContent = (
        <div className="w-full py-4 px-4 border border-neutral-400 
            bg-neutral-100/50 dark:bg-neutral-700/50 
            shadow-md shadow-neutral-300 dark:shadow-neutral-900 transition ease-in-out
            flex flex-col gap-4 group flex-1 h-full">
            <div className="overflow-hidden">
                <img src={img} className="group-hover:scale-105 transition ease-in-out"></img>
            </div>
            <div className="space-y-1">
                <p className="text-sm">{dateType}</p>
                <h2 className="text-2xl">{title}</h2>
                <ul className="flex flex-row gap-1 flex-wrap">
                    {techStack}
                </ul>
                <div className="text-md text-neutral-800 dark:text-neutral-50">{desc}</div>
            </div>
        </div>
    )

    return isExternal ? (
        <a href={link} target="_blank" rel="noopener noreferrer">
            {CardContent}
        </a>
    ) : (
        <NavLink to={link}>
            {CardContent}
        </NavLink>
    );
}

export default ProjectCardLg;