import DesignerInfoBar from "./components/DesignerInfoBar";
import DeveloperInfoBar from "./components/DeveloperInfoBar";
import AuthorMainInfoBar from "./components/AuthorMainInfoBar";

const AuthorInfoSection = () => {


  return (
    <section
    id="author-info-section"
    className="w-full p-2 scroll-m-[40px]">
      <h1 className="sm:w-full w-[70%] mx-auto text-center md:text-[2.9em] sm:text-[2.5em] text-3xl font-medium mt-8 bg-gradient-to-r from-[#f59191] from-[10%] via-[#ea7cf9] to-[white] sm:to-[57%] to-[80%] bg-clip-text text-transparent">
        More Than Just a Portfolio
      </h1>
      <p
      className={`text-[#a9a9a9] text-center sm:text-[22px] text-[19px] sm:mt-0 mt-1`}
      >
        A Brief Look Into Who I Am
      </p>
      <section className=" mx-auto w-[90%] max-w-[1100px] mt-14">
        {/* POSITIONS INFO BARS */}
        <div className="p-2 flex md:flex-row flex-col justify-between items-center gap-2">
          <DeveloperInfoBar />
          <DesignerInfoBar />
        </div>
        {/* AUTHOR MAIN BAR */}
        <AuthorMainInfoBar />
      </section>
    </section>
  );
};

export default AuthorInfoSection;
