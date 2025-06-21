
const ProjectsSection = () => {
  return (
    <div className="border border-white w-full h-[900px] mt-[80px]">
      <h1 className="text-white text-center text-[3.4em] mt-4">
        Digital Creations
      </h1>
      <p className="text-white text-center text-xl text-medium mx-auto w-[360px]">
        A selection of my main projects you can explore right away.
      </p>
      <section className="w-[86%] h-[600px] mx-auto mt-20">
        <ul className="w-full h-full flex justify-between items-center gap-4">
          {/* toto spravim jednoznacne data.map cestou */}
          <li className="border border-white h-full w-[25%] rounded-[14px]"></li>
          <li className="border border-white h-full w-[25%] rounded-[14px]"></li>
          <li className="border border-white h-full w-[25%] rounded-[14px]"></li>
          <li className="border border-white h-full w-[25%] rounded-[14px]"></li>
        </ul>
      </section>
    </div>
  );
};

// ! predstavujem si to na formu obrazkov hned vedla seba, ako nahle sa na to klikne tak sa ukaze nejaky napis alebo tam bude cez to napios a descriptoion celu doibu len sa zosvetli
// ! samozrejme, ze bars budu clickable a este uvidim ako to cele chchem spravit, vratim sa k tomu neskorsie

export default ProjectsSection;
