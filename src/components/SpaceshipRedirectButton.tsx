import { ReactNode } from "react";
import { Link } from "react-router";

type SpaceshipRedirectButtonProps = {
  text: string | null;
  color: string;
  shape: 'circle' | 'default';
  icon: ReactNode | null;
  url: string;
}

const SpaceshipRedirectButton = ({
  text,
  color,
  shape,
  icon,
  url
}: SpaceshipRedirectButtonProps) => {

  const shapeStyle = {
    'circle': 'px-2 py-2 rounded-4xl',
    'default': 'px-3 py-2 rounded-lg'
  };

  return (
    <Link to={url} target="_blank" className={`${shapeStyle[shape]} ${color} flex flex-row items-center gap-2 font-nav-button
    border-2 border-black inset-shadow-white/40 inset-shadow-xs shadow-nav-button`}>
      {text}
      <span>{icon}</span>
    </Link>
  )
}

export default SpaceshipRedirectButton;
