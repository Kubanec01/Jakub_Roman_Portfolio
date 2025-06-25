import type { SkillBarProps } from "../pages/components/Skills/components/SkillBar";
import reactImg from "../assets/React.png";
import tsImg from "../assets/TypeScript.png";
import nextImg from "../assets/Next.js.png";
import jsImg from "../assets//JavaScript.png";
import firebaseImg from "../assets//Firebase.png";
import gitImg from "../assets//Git.png";
import tailwindImg from "../assets//Tailwind CSS.png";
import sassImg from "../assets//Sass.png";
import htmlImg from "../assets//HTML5.png";
import bootstrapImg from "../assets//Bootstrap.png";
import figmaImg from "../assets//Figma.png";

export const skillsData: SkillBarProps[] = [
  {
    name: "React",
    image: reactImg,
    neonColor: "#61DAFB", // azúrová
  },
  {
    name: "TypeScript",
    image: tsImg,
    neonColor: "#2B96D9", // modrá TypeScript
  },
  {
    name: "JavaScript",
    image: jsImg,
    neonColor: "#F7DF1E", // žltá JavaScript
  },
  {
    name: "Next.Js",
    image: nextImg,
    neonColor: "#000000", // čierna (typické pre Next.js logo)
  },
  {
    name: "Firebase",
    image: firebaseImg,
    neonColor: "#FFCA28", // žltá Firebase
  },
  {
    name: "Git",
    image: gitImg,
    neonColor: "#F05032", // oranžovo-červená Git
  },
  {
    name: "Tailwind",
    image: tailwindImg,
    neonColor: "#38BDF8", // svetlomodrá Tailwind
  },
  {
    name: "Sass",
    image: sassImg,
    neonColor: "#CD6799", // ružovo-fialová Sass
  },
  {
    name: "HTML5",
    image: htmlImg,
    neonColor: "#E34F26", // oranžová HTML5
  },
  {
    name: "Bootstrap",
    image: bootstrapImg,
    neonColor: "#7952B3", // fialová Bootstrap
  },
  {
    name: "Figma",
    image: figmaImg,
    neonColor: "#F24E1E", // oranžovo-červená (horný kruh Figma loga)
  },
];
