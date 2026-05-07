import SkillSummary from "./SkillSummary";
import ProjectsSummary from "./ProjectsSummary";
import Icons from "../../assets/Icons/Icons";

const Home = () => {
  return (
    <section className="space-y-24">
      <header className="flex flex-col">
        <h1 className="text-3xl text-body-normal">
          Aedan Gallivan
        </h1>
        <div>
          <span className="absolute pointer-events-none blur bg-linear-to-b from-moon/30 to-moon-light/30 bg-clip-text text-transparent text-5xl font-semibold py-2">
            Full-Stack Developer<br></br>& Designer
          </span>
          <h2 className="text-nowrap relative bg-linear-to-b from-moon to-moon-light bg-clip-text text-transparent text-5xl font-semibold py-2">
            Full-Stack Developer<br></br>& Designer
          </h2>
        </div>
        <p className="text-md mt-4 w-110">
          With a background in Product Design I take products from ideas to
          deployment, prioritizing user experience on the front end and clean,
          readable code throughout.
        </p>
        <div className="mt-8">
          <a
            className="relative text-body-loud px-4 py-2 inline-flex items-center gap-2"
            href="Aedan_Gallivan_Resume.pdf"
            target="_blank"
          >
            <svg className="absolute pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" viewBox="0 0 160 160" width="200" height="160" xmlns="http://www.w3.org/2000/svg">
              <g transform="matrix(0.966, -0.1, 0.55, 0.433, 80, 80)">
                <path d="M 0,70 A 65,70 0 0,0 65,0 5,5 0 0,1 75,0 75,70 0 0,1 0,70Z" fill="#98c0ef" opacity="0.6">
                  <animateTransform attributeName="transform" type="rotate" from="360 0 0" to="0 0 0" dur="4s" repeatCount="indefinite" />
                </path>
              </g>
            </svg>
            View Resumé <span>{Icons.ArrowTopRight("size-4")}</span>
          </a>
        </div>
      </header>
      <SkillSummary />
      <ProjectsSummary />
    </section>
  );
};

export default Home;
