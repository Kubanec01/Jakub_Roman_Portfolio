import { userInfoData } from "../../../../data/infoBarsData";
import { IoIosColorFilter } from "react-icons/io";

const DesignerInfoBar = () => {
  const data = userInfoData;


  return (
    <div
      style={{
        borderRadius: "2px 14px 2px 2px",
      }}
      className="w-[50%] h-[310px] border border-[#424040aa] bg-[#141414] p-5 
         hover:-translate-y-2 ease-in duration-150 hover:shadow-[#555555] shadow-lg/30"
    >
      <div className="text-[#fffffff6] h-[70%] w-full pl-4">
        <h1 className="text-4xl mt-4">{data.designerBar.title}</h1>
        <p className="text-xl mt-2 w-[80%] text-[#a9a9a9]">
          {data.designerBar.desc}
        </p>
      </div>
      <div className="w-full h-[30%] flex items-center justify-end">
        <span className="text-[#a9a9a9] text-6xl mr-2">
          <IoIosColorFilter />
        </span>
      </div>
    </div>
  );
};

export default DesignerInfoBar;
