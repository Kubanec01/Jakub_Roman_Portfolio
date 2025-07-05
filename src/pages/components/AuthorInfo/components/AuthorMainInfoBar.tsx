import { userInfoData } from "../../../../data/infoBarsData";
import authorImg2 from "../../../../assets/author-img-2.png";
import { motion } from "motion/react";

const AuthorMainInfoBar = () => {
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
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 100, y: 0 },
      }}
      className="bg-[#141414] border border-[#424040aa] rounded-b-[14px] md:rounded-t-[2px] rounded-t-[14px] backdrop-opacity-50 mx-auto sm:w-[98.6%] w-[96%] flex md:flex-row flex-col justify-between items-center sm:px-5 px-3 py-7"
    >
      {/* AUTHOR INFO BAR */}
      <div className="md:pl-6 p-3">
        {/* AUTHOR IMG */}
        <div className="bg-[#1d1d1d] aspect-square md:w-[260px] rounded-[20px] object-cover opacity-95">
          <img
            className="aspect-square md:w-[260px] sm:w-[230px] w-[200px] rounded-[20px] object-cover opacity-95"
            src={authorImg2}
            alt="author-img"
          />
        </div>
      </div>
      <div className=" md:w-[68%] h-full">
        {/* AUTHOR TITLE AND DESC */}
        <h1 className="sm:text-3xl text-2xl sm:font-semibold text-[#fffffff6] mt-2 md:w-[90%] md:mx-0 mx-auto md:text-left text-center">
          {data.mainInfoBar.title}
        </h1>
        <p className="lg:text-lg sm:font-medium text-[#a9a9a9] mt-1 lg:w-[87%] sm:w-[96%] md:mx-0 mx-auto md:text-left text-center">
          {data.mainInfoBar.desc}
        </p>
      </div>
    </motion.div>
  );
};

export default AuthorMainInfoBar;
