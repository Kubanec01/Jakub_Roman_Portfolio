import { useState } from "react";
import { customStyles } from "../../../../styles/styles";

export type SkillBarProps = {
  image: string;
  name: string;
  shadowColor?: string;
};

const SkillBar = ({ image, name, shadowColor }: SkillBarProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const style = customStyles;

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        boxShadow: `0 0 30px ${isHovered ? `${shadowColor}` : 'transparent'}`,
      }}
      className={`bg-[${style.colors.darkGray}] border border-[${style.colors.brightGray}]
       rounded-[14px] aspect-square w-[114px] flex justify-center items-center
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
    </div>
  );
};

export default SkillBar;
