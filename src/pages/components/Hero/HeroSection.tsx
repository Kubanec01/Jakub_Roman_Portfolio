import { ShaderGradient, ShaderGradientCanvas } from "@shadergradient/react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <div
      className="w-full h-[820px]
      bg-radial-[160%_145%_at_50%_100%] from-[rgba(255,255,255,0)] from-47% to-[#6834f7] to-100%
      "
    >
      <section className="relative h-full flex justify-center items-center">
        <div
        className="w-[90%] max-w-[1500px] lg:-mt-14 z-50">
          <h1 className="xl:text-[78px] md:text-6xl text-5xl md:font-normal font-medium text-center bg-gradient-to-b from-[#ffffff] from-34% to-[#3b3b3b] bg-clip-text text-transparent">
            Hi, I'm Jacob
          </h1>
          <div className="xl:text-7xl md:text-5xl text-2xl text-nowrap text-center xl:-mt-2 text-[#ef44f2]">
            <TypeAnimation
              sequence={[
                "Front End Developer",
                3000,
                "UI/UX Designer",
                3000,
                "Interface Developer",
                3000,
                "Digital Experience Creator",
                3000,
                "Interaction Engineer",
                3000,
              ]}
              speed={20}
              repeat={Infinity}
            />
          </div>
          <div className="">
            <p className="text-[#a9a9a9] xl:text-2xl text-xl md:font-normal font-medium text-center mx-auto mt-6 xl:w-[35%] md:w-[45%] sm:w-[70%] w-[90%]">
              Welcome to my portfolio, where you can find out who I am and what
              I can do.
            </p>
            <section className="mt-4 mx-auto p-4 flex justify-center items-center gap-7">
              <button className="relative overflow-hidden text-white md:text-lg md:px-4 px-2 py-2 rounded-[8px] flex justify-center items-center gap-2">
                <span className="absolute z-40">
                  <ShaderGradientCanvas
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                    lazyLoad={false}
                    fov={100}
                    pixelDensity={1}
                    pointerEvents="none"
                  >
                    <ShaderGradient
                      animate="on"
                      type="waterPlane"
                      wireframe={false}
                      shader="defaults"
                      uTime={5}
                      uSpeed={0.21}
                      uStrength={1.3}
                      uDensity={2.1}
                      uFrequency={0}
                      uAmplitude={0}
                      positionX={0}
                      positionY={0}
                      positionZ={0}
                      rotationX={50}
                      rotationY={0}
                      rotationZ={-60}
                      color1="#242880"
                      color2="#7056da"
                      color3="#212121"
                      reflection={0.1}
                      // View (camera) props
                      cAzimuthAngle={180}
                      cPolarAngle={80}
                      cDistance={2.8}
                      cameraZoom={9.1}
                      // Effect props
                      lightType="3d"
                      brightness={1.5}
                      envPreset="city"
                      grain="on"
                      // Tool props
                      toggleAxis={false}
                      zoomOut={false}
                      hoverState=""
                      // Optional - if using transition features
                      enableTransition={false}
                    />
                  </ShaderGradientCanvas>
                </span>
                <span className="z-50 ">
                  <FaLinkedin />
                </span>
                <a
                  className="z-50 font-medium"
                  href="https://www.linkedin.com/in/jakub-roman-4b1664338/"
                  target="_blank"
                >
                  Linked In
                </a>
              </button>
              <button className="border border-[#5e5d5d] hover:border-[#ffffff] duration-200 ease-in text-white cursor-pointer md:text-lg md:px-4 px-2 py-2 rounded-[8px] flex justify-center items-center gap-2">
                <span>
                  <FaGithub />
                </span>
                <a href="https://github.com/Kubanec01" target="_blank">
                  GitHub
                </a>
              </button>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
