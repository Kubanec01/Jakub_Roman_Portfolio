import { motion } from "motion/react";
import { userInfoData } from "../../../../data/infoBarsData";
import { IoIosColorFilter } from "react-icons/io";

const DesignerInfoBar = () => {
  const data = userInfoData;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.5,
      }}
      transition={{ duration: 0.7 }}
      variants={{
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0 },
      }}
      className="rounded-tr-[14px] md:rounded-b-[2px] rounded-b-[14px] md:rounded-tl-[2px] rounded-tl-[14px] md:w-[50%] w-full md:h-[310px] sm:h-[220px] border border-[#424040aa] bg-[#141414] sm:p-5 p-6"
    >
      <div className="text-[#fffffff6] h-[70%] w-full sm:pl-4">
        <h1 className="lg:text-4xl sm:text-3xl text-2xl lg:mt-4 sm:mt-1">
          {data.designerBar.title}
        </h1>
        <p className="lg:text-xl sm:text-lg sm:mt-2 lg:w-[80%] sm:w-[90%] w-[94%] text-[#a9a9a9]">
          {data.designerBar.desc}
        </p>
      </div>
      <div className="w-full h-[30%] sm:flex hidden items-center justify-end">
        <span className="text-[#a9a9a9] lg:text-6xl text-5xl lg:mr-2 -mr-2 lg:mt-0 md:mt-13 mt-6">
          <IoIosColorFilter />
        </span>
      </div>
    </motion.div>
  );
};

export default DesignerInfoBar;
