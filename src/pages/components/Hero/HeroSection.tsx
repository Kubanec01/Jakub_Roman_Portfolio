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
        <div className="w-[90%] max-w-[1500px] -mt-14 z-50">
          <h1 className="text-[78px] font text-center bg-gradient-to-b from-[#ffffff] from-30% to-[#707070] bg-clip-text text-transparent">
            Hi, I'm Jacob
          </h1>
          <div className="text-7xl text-center -mt-2 text-[#ef44f2]">
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
            <p className="text-[#a9a9a9] text-2xl text-center mx-auto mt-6 w-[35%]">
              Welcome to my portfolio, where you can find out who I am and what
              I can do.
            </p>
            <div className="mt-4 mx-auto w-[50%] p-4 flex justify-center items-center gap-7">
              <button className="relative overflow-hidden text-white text-lg px-4 py-2 rounded-[8px] flex justify-center items-center gap-2">
                <span className="absolute z-40">
                  <ShaderGradientCanvas
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                    lazyLoad={undefined}
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
              <button className="border border-[#5e5d5d] hover:border-[#ffffff] duration-200 ease-in text-white cursor-pointer text-lg px-4 py-2 rounded-[8px] flex justify-center items-center gap-2">
                <span>
                  <FaGithub />
                </span>
                <a href="https://github.com/Kubanec01" target="_blank">
                  GitHub
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
