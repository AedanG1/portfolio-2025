import { NavLink } from "react-router";

interface ProjectCardSmProps {
    link: string;
    img: string;
    alt: string;
    dateType: string;
    title: string;
    stackArr: string[];
    desc: string;
}

const ProjectCardSm = ({link, img, alt, dateType, title, stackArr, desc}: ProjectCardSmProps) => {

    const techStack = stackArr.map(item => (
        <li className="text-sm border border-neutral-400 px-2">{item}</li>
    ))

    const isExternal = link.startsWith("http");

    const CardContent = (
        <div className="w-full h-fit py-4 px-4 border border-neutral-400 
        bg-neutral-100/50 dark:bg-neutral-700/50 
        shadow-md shadow-neutral-300 dark:shadow-neutral-900 transition ease-in-out
        flex flex-col md:flex-row gap-4 group
        ">
            <div className="basis-2/5 h-[144px] shrink-0 overflow-hidden">
                <img src={img} alt={alt} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition ease-in-out" />
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

export default ProjectCardSm;