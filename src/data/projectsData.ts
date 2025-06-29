import moneySaverImg from "../assets/Money-Saver-img.png";

export interface ProjectsData {
  id: string;
  image: string;
  title: string;
  desc: string;
}

export const projectsData: ProjectsData[] = [
  {
    id: "money-saver-app",
    image: moneySaverImg,
    title: "Money Saver App",
    desc: "Money Saver App is a modern tool designed to support personal finance management and effective money-saving habits. Set your budget, categorize your expenses, and track exactly where your money goes — all in a sleek, space-themed environment.",
  },
];
