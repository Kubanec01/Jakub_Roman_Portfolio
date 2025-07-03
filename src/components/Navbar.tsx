import { useState } from "react";
import { useIsScrollOnTheTop } from "../hooks/useScreenTopPositionValue";
import { BsThreeDots } from "react-icons/bs";

const Navbar = () => {
  const isScreenOnTheTop = useIsScrollOnTheTop();

  const [isOpen, setIsOpen] = useState(false);


  return (
    <>
      {/* CLASSIC MENU */}
      <div
        className={`w-[600px] fixed top-4 left-[50%] -translate-x-[50%] z-[1000]
                    ${
                      isScreenOnTheTop
                        ? "translate-y-0 ease-in-out duration-300"
                        : "-translate-y-[100px] duration-200"
                    }
            `}
      >
        <ul className="max-w-[800px] w-[90%] py-[14px] mx-auto flex justify-center items-center lg:gap-[50px] sm:gap-[40px] gap-[20px] lg:text-lg sm:text-base text-xs">
          <li>
            <a
              href="#author-info-section"
              className="text-[white] hover:text-[#ff5ade] duration-150 ease-in"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills-section"
              className="text-[white] hover:text-[#ff5ade] duration-150 ease-in"
            >
              Stack
            </a>
          </li>
          <li>
            <a
              href="#projects-section"
              className="text-[white] hover:text-[#ff5ade] duration-150 ease-in"
            >
              Projects
            </a>
          </li>
          <li className="lg:ml-[60px] sm:ml-[20px] ml-3">
            <a
              href=""
              className="bg-[#3639eb5b] hover:bg-[#3e3eff8f] duration-150 ease-in text-[#ffffff] sm:px-8 px-3 py-1 rounded-2xl"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
      {/* MINI MENU */}
      <div
        onMouseEnter={() => setIsOpen((v) => !v)}
        onMouseLeave={() => setIsOpen((v) => !v)}
        className={`z-[1000] border border-[#ffffff29] fixed top-[20px] left-[50%] -translate-x-[50%] rounded-[30px] backdrop-blur-[20px] bg-[#29292969]
        flex justify-center items-center ${
          isOpen
            ? "duration-[0.25s] ease-in w-[360px] h-[52px]"
            : "w-[60px] h-[52px] duration-[0.2s] ease-in "
        }
        ${
          isScreenOnTheTop
            ? "-translate-y-[100px]"
            : "translate-y-0 ease-in-out"
        }
        `}
      >
        <div className="w-full h-full flex justify-center items-center">
          {isOpen ? (
            <ul
              className={`w-full px-[38px] h-full mx-auto opacity-0 hover:opacity-100 duration-[0.9s] flex justify-between items-center`}
            >
              <li>
                <a
                  className="text-[#ffffff6a] hover:text-[white] duration-150 ease-in"
                  href="#author-info-section"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="text-[#ffffff6a] hover:text-[white] duration-150 ease-in"
                  href="#skills-section"
                >
                  Stack
                </a>
              </li>
              <li>
                <a
                  className="text-[#ffffff6a] hover:text-[white] duration-150 ease-in"
                  href="#projects-section"
                >
                  Projects
                </a>
              </li>
            </ul>
          ) : (
            <span className="text-[#ffffffd9] text-[25px] text-center">
              <BsThreeDots />
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;


// ! tu treba doriesit aby mal v mobile screen navbar viditelny text, nieco tam robi galibu