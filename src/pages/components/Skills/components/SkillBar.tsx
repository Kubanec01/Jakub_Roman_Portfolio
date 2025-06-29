import { useState } from "react";

export type SkillBarProps = {
  image: string;
  name: string;
  shadowColor?: string;
};

const SkillBar = ({ image, name, shadowColor }: SkillBarProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          boxShadow: `0 0 30px ${isHovered ? `${shadowColor}` : "transparent"}`,
        }}
        className={`bg-[#141414] border border-[#424040aa]
        relative rounded-[14px] aspect-square w-[105px] flex justify-center items-center
        hover:-translate-y-1 duration-[2s] hover:duration-200
        `}
      >
        <span className="aspect-square w-[48%] rounded-[6px] overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={image}
            alt="testing-img"
          />
        </span>
        {/* Tool Pit Bar */}
        <div
          className={`absolute bg-[#141414] border border-[#424040aa] rounded-[6px] w-[96px] h-[34px] -bottom-3 -right-4 flex justify-center items-center
            ${isHovered ? "opacity-100 delay-[0.9s]" : "opacity-0"}
            `}
        >
          <p className="text-[#ffffffdb] text-[15px]">{name}</p>
        </div>
      </div>
    </>
  );
};

export default SkillBar;
