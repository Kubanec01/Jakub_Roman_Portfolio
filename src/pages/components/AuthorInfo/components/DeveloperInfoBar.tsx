import { PiBrainThin } from "react-icons/pi";

import { userInfoData } from "../../../../data/infoBarsData";
import { motion } from "motion/react";

const DeveloperInfoBar = () => {
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
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
      }}
      style={{
        borderRadius: "14px 2px 2px 2px",
      }}
      className="w-[50%] h-[310px] border border-[#424040aa] bg-[#141414] p-5"
    >
      <div className="text-[#fffffff6] h-[70%] w-full pl-4">
        <h1 className="text-4xl mt-4">{data.developerBar.title}</h1>
        <p className="text-xl mt-2 w-[80%] text-[#a9a9a9]">
          {data.developerBar.desc}
        </p>
      </div>
      <div className="w-full h-[30%] flex items-center justify-end">
        <span className="text-[#a9a9a9] text-6xl mr-2">
          <PiBrainThin />
        </span>
      </div>
    </motion.div>
  );
};

export default DeveloperInfoBar;
