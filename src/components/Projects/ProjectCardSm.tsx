import { NavLink } from "react-router";
import { useState, useEffect } from "react";

interface ProjectCardSmProps {
  link: string;
  img: string;
  alt: string;
  dateType: string;
  title: string;
  stackArr: string[];
  desc: string;
}

const ProjectCardSm = ({
  link,
  img,
  alt,
  dateType,
  title,
  stackArr,
  desc,
}: ProjectCardSmProps) => {
  const [offset, setOffset] = useState("0s");
  useEffect(() => {
    setOffset(`-${(Math.random() * 42069).toFixed(2)}s`);
  }, []);

  const techStack = stackArr.map((item) => (
    <li className="text-sm border border-slate-400 px-2">{item}</li>
  ));

  const isExternal = link.startsWith("http");

  const CardContent = (
    <div
      className="animated-gradient glow-hover w-full h-fit py-4 px-4 rounded-xl  
      bg-slate-600/5 inset-shadow-lg hover:inset-shadow-bright backdrop-blur-xs border border-slate-400/40
       shadow-slate-300 dark:shadow-slate-900 transition ease-in-out
        flex flex-col md:flex-row gap-4 group
        "
      style={{"--spin-offset": offset} as React.CSSProperties}
    >
      <div className="rounded-lg basis-2/5 h-36 shrink-0 overflow-hidden">
        <img
          src={img}
          alt={alt}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition ease-in-out"
        />
      </div>
      <div className="space-y-1 basis-3/5">
        <p className="text-sm">{dateType}</p>
        <h5 className="text-2xl">{title}</h5>
        <ul className="flex flex-row gap-1 flex-wrap">{techStack}</ul>
        <h5 className="text-sm text-neutral-800 dark:text-neutral-50">
          {desc}
        </h5>
      </div>
    </div>
  );

  return isExternal ? (
    <a href={link} target="_blank" rel="noopener noreferrer">
      {CardContent}
    </a>
  ) : (
    <NavLink to={link}>{CardContent}</NavLink>
  );
};

export default ProjectCardSm;
