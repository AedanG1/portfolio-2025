import { NavLink } from "react-router";
import { useState, useEffect } from "react";

interface ProjectCardProps {
  link: string;
  img: string;
  alt: string;
  dateType: string;
  title: string;
  stackArr: string[];
  desc: string;
  size: 'large' | 'small';
}

const ProjectCard = ({
  link,
  img,
  alt,
  dateType,
  title,
  stackArr,
  desc,
  size
}: ProjectCardProps) => {
  // offset used to make sure the animations across different instances of the component aren't in sync
  const [offset, setOffset] = useState("0s");
  useEffect(() => {
    setOffset(`-${(Math.random() * 42069).toFixed(2)}s`);
  }, []);

  const techStack = stackArr.map((item, i) => (
    <li key={item} className="text-sm">
      {item}
      {i < stackArr.length - 1 &&
        <span className="pl-2 pr-1">·</span>
      }
    </li>
  ));

  const isExternal = link.startsWith("http");

  const variantStyles = {
    container: {
      'large': 'flex-1 h-full',
      'small': 'h-fit md:flex-row'
    },
    imgContainer: {
      'large': 'h-90',
      'small': 'basis-2/5 h-36'
    },
    textContainer: {
      'large': '',
      'small': 'basis-3/5'
    }
  };

  const CardContent = (
    <div
      className={`animated-border__shine glow-hover w-full py-4 px-4 rounded-xl  
      bg-slate-600/5 inset-shadow-lg hover:inset-shadow-bright backdrop-blur-xs border border-slate-400/40
      shadow-slate-300 dark:shadow-slate-900 transition ease-in-out
      flex flex-col gap-4 group ${variantStyles.container[size]}
      `}
      style={{ "--spin-offset": offset } as React.CSSProperties}
    >
      <div className={`${variantStyles.imgContainer[size]} rounded-lg shrink-0 overflow-hidden`}>
        <img
          src={img}
          alt={alt}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition ease-in-out"
        />
      </div>
      <div className={`${variantStyles.textContainer[size]} space-y-1`}>
        <p className="text-sm text-body-muted">{dateType}</p>
        <p className="text-2xl text-moon-light">{title}</p>
        <ul className="flex flex-row gap-1 flex-wrap text-sm text-body-muted">{techStack}</ul>
        <p className="text-sm text-body-loud">{desc}</p>
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

export default ProjectCard;
