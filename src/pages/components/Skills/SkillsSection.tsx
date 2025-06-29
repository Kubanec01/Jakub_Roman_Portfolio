import { skillsData } from "../../../data/skillsData";
import SkillBar from "./components/SkillBar";

const SkillsSection = () => {
  const data = skillsData;

  return (
    <>
      <section className="w-full mt-[220px] mb-[300px] px-2">
        <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-[#16d0ff] from-[30%] via-[#37ffcaf0] to-[#ffffff] to-[65%] text-center font-medium text-[2.8em] mt-[50px]">
          Technologies I Love Working With
        </h1>
        <p className="text-[#a9a9a9] text-center text-[22px] mt-1">
          Frameworks, languages, and tools I rely on
        </p>
        <div className="mx-auto w-[90%] max-w-[1100px] p-2 mt-[70px]">
          <ul className="flex justify-center items-center w-[94%] mx-auto flex-row gap-8 flex-wrap z-50 relative">
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
      <span 
      className="absolute top-[1400px] -left-[590px] w-[1200px] h-[1600px]
      bg-radial from-[#a41cff36] to-transparent to-70%
      "
      />
      <span 
      className="absolute top-[1400px] -right-[590px] w-[1200px] h-[1600px]
      bg-radial from-[#4ddeff3b] to-transparent to-70%
      "
      />
    </>
  );
};

export default SkillsSection;
