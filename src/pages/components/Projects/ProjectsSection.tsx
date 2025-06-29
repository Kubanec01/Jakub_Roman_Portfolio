import { projectsData } from "../../../data/projectsData";
import ProjectBar from "./ProjectBar";

const ProjectsSection = () => {
  const data = projectsData;

  return (
    <div className="w-full h-[900px] max-w-[1600px] mt-[80px] mx-auto">
      <h1 className="text-white text-center text-[3.4em] mt-4">
        Digital Creations
      </h1>
      <p className="text-[#a9a9a9] text-center text-xl text-medium mx-auto w-[360px]">
        A selection of my main projects you can explore right away.
      </p>
      <section className="w-[90%] h-[600px] mx-auto mt-20">
        <ul className="w-full h-full flex justify-between items-center gap-4">
          {/* toto spravim jednoznacne data.map cestou */}
          {data.map((i) => (
            <ProjectBar
              id={i.id}
              image={i.image}
              title={i.title}
              desc={i.desc}
            />
          ))}
        </ul>
      </section>
    </div>
  );
};

// ! predstavujem si to na formu obrazkov hned vedla seba, ako nahle sa na to klikne tak sa ukaze nejaky napis alebo tam bude cez to napios a descriptoion celu doibu len sa zosvetli
// ! samozrejme, ze bars budu clickable a este uvidim ako to cele chchem spravit, vratim sa k tomu neskorsie

// ! bude to ciernobiele a ked sa na to ukaze mysou tak to bude farebn

export default ProjectsSection;
