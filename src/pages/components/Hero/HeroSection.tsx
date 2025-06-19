import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="border border-white w-full h-[900px]">
      <section className="border border-white mt-[80px] h-[91%] flex justify-center items-center">
        <div className="w-[90%] max-w-[1500px] -mt-18">
          <h1 className="text-white text-7xl font-medium text-center">
            Hi, I'm Jacob
          </h1>
          <div className="text-7xl font-medium text-center mt-3 text-[#EF44F2]">
            Front End Developer
          </div>
          <div className="">
            <p className="text-white text-2xl text-center mx-auto mt-6 w-[35%]">
              Welcome to my portfolio, where you can find out who I am and what
              I can do.
            </p>
            <div className="mt-4 mx-auto w-[50%] p-4 flex justify-center items-center gap-7">
              <button className="border border-white text-white text-lg px-4 py-2 rounded-[8px] flex justify-center items-center gap-2">
                <span>
                  <FaLinkedin />
                </span>
                Linked In
              </button>
              <button className="border border-white text-white text-lg px-4 py-2 rounded-[8px] flex justify-center items-center gap-2">
                <span>
                  <FaGithub />
                </span>
                GitHub
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
