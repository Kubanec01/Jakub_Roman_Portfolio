import DesignerInfoBar from "./components/DesignerInfoBar";
import DeveloperInfoBar from "./components/DeveloperInfoBar";
import AuthorMainInfoBar from "./components/AuthorMainInfoBar";

const AuthorInfoSection = () => {


  return (
    <section
    id="author-info-section"
    className="w-full p-2 border">
      <h1 className="text-center text-[2.9em] font-medium mt-8 bg-gradient-to-r from-[#f86f6f] from-[10%] via-[#e755fa] to-[white] to-[57%] bg-clip-text text-transparent">
        More Than Just a Portfolio
      </h1>
      <p
      className={`text-[#a9a9a9] text-center text-[22px]`}
      >
        A Brief Look Into Who I Am
      </p>
      <section className=" mx-auto w-[90%] max-w-[1100px] mt-14">
        {/* POSITIONS INFO BARS */}
        <div className="p-2 flex justify-between items-center gap-2">
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
