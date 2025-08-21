import type { SkillBarProps } from "../pages/components/Skills/components/SkillBar";
import reactImg from "../assets/React.png";
import tsImg from "../assets/TypeScript.png";
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
    id: "react",
    name: "React",
    image: reactImg,
    shadowColor: "#61dafb90",
  },
  {
        id: "typeScript",

    name: "TypeScript",
    image: tsImg,
    shadowColor: "#2b96d9af",
  },
  {
    id: "javaScript",
    name: "JavaScript",
    image: jsImg,
    shadowColor: "#f7de1eb4",
  },
  {
    id: "firebase",
    name: "Firebase",
    image: firebaseImg,
    shadowColor: "#ffc928bb",
  },
  {
    id: "git",
    name: "Git",
    image: gitImg,
    shadowColor: "#f04e32ae",
  },
  {
    id: "tailwind",
    name: "Tailwind",
    image: tailwindImg,
    shadowColor: "#38bff8a0",
  },
  {
    id: "sass",
    name: "Sass",
    image: sassImg,
    shadowColor: "#cd6798bc",
  },
  {
    id: "html",
    name: "HTML5",
    image: htmlImg,
    shadowColor: "#e34f26b6",
  },
  {
    id: "bootstrap",
    name: "Bootstrap",
    image: bootstrapImg,
    shadowColor: "#7952b3f2",
  },
  {
    id: "figma",
    name: "Figma",
    image: figmaImg,
    shadowColor: "#f24f1ea3",
  },
];
