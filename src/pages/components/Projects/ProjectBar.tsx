import { useState } from "react";
import type { ProjectsData } from "../../../data/projectsData";
import useInnerWidthValue from "../../../hooks/useInnerWidthValue";

interface ProjectBarProps extends ProjectsData {}

const ProjectBar = ({ image, title, desc, pageUrl }: ProjectBarProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const innerWidthValue = useInnerWidthValue();

  const openPage = (url: string) => {
    if (innerWidthValue > 1024) window.open(url);

    return;
  };

  return (
    <div
      onClick={() => openPage(pageUrl)}
      onMouseEnter={() => setIsHovered((v) => !v)}
      onMouseLeave={() => setIsHovered((v) => !v)}
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className={`border 2xl:w-[400px] sm:w-[340px] w-[260px] sm:h-[600px] h-[400px] rounded-[14px] overflow-hidden cursor-pointer relative
              ${
                isHovered
                  ? "grayscale-0 duration-200 ease-in border-[#b6b4b4bd] -translate-y-2 shadow-xl shadow-[#ffffff58]/25"
                  : "grayscale-100 duration-200 ease-out border-[#6a6969a2]"
              }
              `}
    >
      <div
        className={`flex justify-center items-end w-full h-full bg-linear-370 from-[#000000] from-40% via-[#0000008e] via-50% to-[#00000009]
              ${
                isHovered
                  ? "opacity-100 duration-200 ease-in"
                  : "opacity-0 duration-200 ease-out"
              }`}
      >
        <div className="w-full p-3 pl-6 sm:mb-[50px] mb-[40px]">
          <h1 className="sm:text-2xl text-lg text-[white]">{title}</h1>
          <p className="w-[90%] text-[#a9a9a9] sm:text-base text-sm">{desc}</p>
        </div>
        {innerWidthValue < 1024 && (
          <button
            onClick={() => window.open(pageUrl)}
            className="text-white absolute sm:text-base text-sm right-4 bottom-4"
          >
            See More
          </button>
        )}
      </div>
    </div>
  );
};

export default ProjectBar;
