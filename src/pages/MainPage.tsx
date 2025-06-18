import AuthorInfoSection from "./components/AuthorInfo/AuthorInfoSection";
import HeroSection from "./components/Hero/HeroSection";
import ProjectsSection from "./components/Projects/ProjectsSection";
import SkillsSection from "./components/Skills/SkillsSection";

const MainPage = () => {
  return (
    <>
      <HeroSection />
      <AuthorInfoSection />
      <SkillsSection />
      <ProjectsSection />
    </>
  );
};

export default MainPage;
