import SpaceshipNavButton from "./SpaceshipNavButton";
import SpaceshipRedirectButton from "./SpaceshipRedirectButton";

const SpaceshipNav = () => {

  const VENT_AMOUNT = 5;
  const vents = []
  for (let i = 0; i < VENT_AMOUNT + 1; i++) {
    vents.push(
      <span className="block w-4 h-0.5 bg-[#141414] border-t border-b border-t-[#252525] border-b-[#616161]" />
    )
  }

  return (
    <nav className="z-50 w-full max-w-7xl mx-auto flex flex-row items-center fixed top-0 left-0 right-0 mt-24">
      <div className="flex flex-row gap-2 ml-auto">
        <SpaceshipNavButton text="HOME" route="/"/>
        <SpaceshipNavButton text="PROJECTS" route="/projects"/>
        <div className="flex flex-col gap-0.75 justify-center mx-4">
          {vents}
        </div>
        <SpaceshipRedirectButton type="github"/>
        <SpaceshipRedirectButton type="linkedin"/>
        <SpaceshipRedirectButton type="resume"/>
      </div>
    </nav>
  )
}

export default SpaceshipNav;