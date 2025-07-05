import { motion } from "motion/react";
import { skillsData } from "../../../data/skillsData";
import SkillBar from "./components/SkillBar";

const SkillsSection = () => {
  const data = skillsData;

  return (
    <>
      <section
        id="skills-section"
        className="w-full max-w-[1900px] mx-auto mt-[220px] px-2 scroll-m-[200px] relative"
      >
        <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-[#5bd6f4] from-[30%] via-[#7ffad9f0] to-[#ffffff] to-[65%] text-center font-medium md:text-[2.8em] sm:text-[2.5em] text-3xl sm:w-full w-[80%] mx-auto mt-[50px]">
          Technologies I Love Working With
        </h1>
        <p className="text-[#a9a9a9] text-center sm:text-[22px] text-[19px] mx-auto md:w-full w-[80%] mt-1">
          Frameworks, languages, and tools I rely on
        </p>
        <div className="mx-auto w-[90%] max-w-[1100px] p-2 xl:mt-[70px] xm:mt-[50px] mt-[30px]">
          <ul className="flex justify-center items-center w-[94%] mx-auto flex-row gap-8 flex-wrap z-50 relative">
            {data.map((i, index) => (
              <motion.li
                key={i.id}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.9,
                }}
                transition={{ duration: 0.4 + index * 0.1 }}
                variants={{
                  hidden: { opacity: 0, x: -100 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <SkillBar
                  id={i.id}
                  image={i.image}
                  name={i.name}
                  shadowColor={i.shadowColor}
                />
              </motion.li>
            ))}
          </ul>
        </div>
        <span className="aspect-square w-[1500px] absolute -left-[240px] -top-[600px] bg-radial from-[#c906ff2a] to-transparent to-[50%] -z-50" />
        <span className="aspect-square w-[1200px] absolute right-[10px] -top-[180px] bg-radial from-[#1bc1d42e] to-transparent to-[50%] -z-50" />
      </section>
    </>
  );
};

export default SkillsSection;