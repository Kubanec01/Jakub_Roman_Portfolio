import { customStyles } from "../../../../styles/styles";

export type SkillBarProps = {
  image: string;
  name: string;
  neonColor?: string;
};

const SkillBar = ({ image, name, neonColor }: SkillBarProps) => {
  const style = customStyles;

  return (
    <div
      className={`bg-[${style.colors.darkGray}] border border-[${style.colors.brightGray}]
       rounded-[14px] aspect-square w-[114px] flex justify-center items-center
       hover:-translate-y-1.5 duration-150 ease-in hover:shadow-lg/50 hover:shadow-[${neonColor}]
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
