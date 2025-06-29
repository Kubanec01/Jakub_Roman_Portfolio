import { useState } from "react";
import type { ProjectsData } from "../../../data/projectsData";

interface ProjectBarProps extends ProjectsData {}

const ProjectBar = ({ id, image, title, desc, pageUrl }: ProjectBarProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li
      onClick={() => window.open(pageUrl)}
      key={id}
      onMouseEnter={() => setIsHovered((v) => !v)}
      onMouseLeave={() => setIsHovered((v) => !v)}
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className={`border h-full w-[400px] rounded-[14px] overflow-hidden cursor-pointer
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
        <div className="w-full p-3 pl-6 mb-[50px]">
          <h1 className="text-2xl text-[white]">{title}</h1>
          <p className="w-[90%] text-[#a9a9a9]">{desc}</p>
        </div>
      </div>
    </li>
  );
};

export default ProjectBar;
