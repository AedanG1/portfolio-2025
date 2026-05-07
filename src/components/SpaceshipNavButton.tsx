import { Link, useLocation } from "react-router"

type SpaceshipButtonProps = {
  text: 'HOME' | 'PROJECTS';
  route: '/' | '/projects';
}

const SpaceshipNavButton = ({ text, route }: SpaceshipButtonProps) => {
  const location = useLocation();
  const variant = location.pathname === route ? 'active' : 'default';

  const variants = {
    default: 'text-nav-button-subtle from-nav-button-light to-nav-button-dark',
    active: 'text-nav-button-loud from-nav-button-active-dark to-nav-button-active-light'
  }

  return (
    <Link to={route} className={`relative font-nav-button px-3 py-2 rounded-lg border-3 border-black 
    inset-shadow-white/40 inset-shadow-xs shadow-nav-button bg-linear-to-b ${variants[variant]}`}>
      {variant === 'active' &&
        <span className="absolute blur-sm text-nav-button-louder">{text}</span>
      }
      {text}
    </Link>
  )
}

export default SpaceshipNavButton;
