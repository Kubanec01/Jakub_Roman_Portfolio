import { projectsData } from "../../../data/projectsData";
import ProjectBar from "./ProjectBar";

const ProjectsSection = () => {
  const data = projectsData;

  return (
    <section
      id="projects-section"
      className="w-full h-[900px] max-w-[1600px] mt-[260px] mx-auto z-50 scroll-m-[80px]"
    >
      <h1 className="mt-4 bg-gradient-to-r from-[#8888f2] from-[32%] via-[#f58282] to-[#fdf2f2] to-[62%] bg-clip-text text-transparent text-center text-[2.8em] font-medium">
        Explore My Digital Creations
      </h1>
      <p className="text-[#a9a9a9] text-center text-xl text-medium mx-auto w-[360px]">
        A selection of my main projects you can explore right away.
      </p>
      <section className="w-[90%] h-[600px] mx-auto mt-20">
        <ul className="w-full h-full flex justify-center items-center gap-4">
          {data.map((i) => (
            <ProjectBar
              id={i.id}
              image={i.image}
              title={i.title}
              desc={i.desc}
              pageUrl={i.pageUrl}
            />
          ))}
        </ul>
      </section>
    </section>
  );
};

export default ProjectsSection;
