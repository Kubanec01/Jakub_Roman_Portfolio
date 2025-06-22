import { userInfoData } from "../../../../data/infoBarsData";
import { customStyles } from "../../../../styles/styles";
import authorImg2 from "../../../../assets/author-img-2.png";

const AuthorMainInfoBar = () => {
  const data = userInfoData;

  const style = customStyles;

  return (
    <div
      style={{
        borderRadius: "2px 2px 14px 14px",
      }}
      className="bg-[#141414] border border-[#424040aa] backdrop-opacity-50 mx-auto w-[98.6%] flex justify-between items-center px-5 py-7"
    >
      {/* AUTHOR INFO BAR */}
      <div className="w-[32%] h-full flex justify-center items-center p-2">
        {/* AUTHOR IMG */}
        <div className="bg-[#1d1d1d] aspect-square w-[260px] rounded-[20px] object-cover opacity-95">
          <img
            className="aspect-square w-[260px] rounded-[20px] object-cover opacity-95"
            src={authorImg2}
            alt="author-img"
          />
        </div>
      </div>
      <div className=" w-[68%] h-full">
        {/* AUTHOR TITLE AND DESC */}
        <h2 className="text-3xl font-semibold text-[#fffffff6] mt-2">
          {data.mainInfoBar.title}
        </h2>
        <p
          className={`text-lg font-medium text-[${style.colors.darkWhite}] mt-1 w-[87%]`}
        >
          {data.mainInfoBar.desc}
        </p>
      </div>
    </div>
  );
};

export default AuthorMainInfoBar;
