import { PiBrainThin } from "react-icons/pi";

import { userInfoData } from "../../../../data/infoBarsData";
import { customStyles } from "../../../../styles//styles";

const DeveloperInfoBar = () => {
  const data = userInfoData;

  const style = customStyles;

  return (
    <div
      style={{
        borderRadius: "14px 2px 2px 2px",
      }}
      className={`w-[50%] h-[310px] border border-[#424040aa] bg-[#141414] p-5 
      hover:-translate-y-2 ease-in duration-150 hover:shadow-[#555555] shadow-lg/30`}
    >
      <div className="text-[#fffffff6] h-[70%] w-full pl-4">
        <h1 className="text-4xl mt-4">{data.developerBar.title}</h1>
        <p className={`text-xl mt-2 w-[80%] text-[#a9a9a9]`}>
          {data.developerBar.desc}
        </p>
      </div>
      <div className="w-full h-[30%] flex items-center justify-end">
        <span className={`text-[${style.colors.darkWhite}] text-6xl mr-2`}>
          <PiBrainThin />
        </span>
      </div>
    </div>
  );
};

export default DeveloperInfoBar;
