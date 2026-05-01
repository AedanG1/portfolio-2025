import Icons from "@assets/Icons/Icons";
import { Link } from "react-router";

type SpaceshipRedirectButtonProps = {
  type: 'github' | 'linkedin' | 'resume';
}

const SpaceshipRedirectButton = ({type}: SpaceshipRedirectButtonProps) => {

  const types = {
    'github': {
      'link': 'https://github.com/AedanG1',
      'text': '',
      'icon': Icons.GitHub("size-6", "#FFFFFF"),
      'style': 'px-2 py-2 rounded-4xl bg-linear-to-b from-redirect-button-light to-redirect-button-dark'
    },
    'linkedin': {
      'link': 'https://linkedin.com/in/aedan-gallivan',
      'text': '',
      'icon': Icons.Linkedin("size-6", "#FFFFFF"),
      'style': 'px-2 py-2 rounded-4xl bg-linear-to-b from-redirect-button-light to-redirect-button-dark'
    },
    'resume': {
      'link': 'Aedan_Gallivan_Resume.pdf',
      'text': 'Resumé',
      'icon': Icons.ArrowTopRight("size-4"),
      'style': 'px-3 py-2 rounded-lg text-resume-button-normal from-resume-button-light to-resume-button-dark'
    }
  };

  const link = types[type].link;
  const icon = types[type].icon;
  const text = types[type].text;
  const style = types[type].style;

  return (
    <Link to={link} target="_blank" className={`${style} flex flex-row items-center gap-2 font-nav-button
    bg-linear-to-b border-2 border-black inset-shadow-white/40 inset-shadow-xs shadow-nav-button`}>
      {text}
      <span>{icon}</span>
    </Link>
  )
}

export default SpaceshipRedirectButton;