import { skillsData } from "../../../data/skillsData";
import { customStyles } from "../../../styles/styles";
import SkillBar from "./components/SkillBar";

const SkillsSection = () => {
  const data = skillsData;

  const style = customStyles;

  return (
    <section className="w-full mt-[220px] mb-[300px]">
      <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-[#16d0ff] from-[30%] via-[#37ffcaf0] to-[#ffffff] to-[65%] text-center font-medium text-[2.8em] mt-[50px]">
        Technologies I Love Working With
      </h1>
      <p className={`text-[${style.colors.darkWhite}] text-center text-[22px]`}>
        Frameworks, languages, and tools I rely on
      </p>
      <div className="mx-auto w-[90%] max-w-[1100px] p-2 mt-[80px]">
        <ul className="flex justify-center items-center w-[94%] mx-auto flex-row gap-8 flex-wrap">
          {data.map((i) => (
            <li>
              <SkillBar
                key={i.name}
                image={i.image}
                name={i.name}
                shadowColor={i.shadowColor}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

// ! toto bude asi najvacsi problem, skills bars budu rozne od seba a budu robene v Parallax efekte (na to stiahnem nejaku kniznicu),
// ! netusim este ako to budem rozmiestnovat ani ako sa to bude spravat, toto bude problem vratim sa k tomu neskorsie
// ! tu treba dorobit to aby kazdy tien mal inu farbu ale nechapem p[reco to nejde...toto bude pronlem]

export default SkillsSection;
