import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="w-full h-[320px] bg-[#141313] mt-[120px]">
      {/* body */}
      <div className="w-[90%] h-full mx-auto max-w-[1000px] px-4 overflow-hidden">
        <div className="w-full m-auto">
          <h1 className="text-[#e1cffdf0] text-center text-4xl mt-[24px]">
            Thank you for visiting!
          </h1>
          <h2 className="text-[#ffffff9a] text-center text-xl mt-[6px]">
            You can reach me on:
          </h2>
        </div>
        {/* contact icons */}
        <div className="w-full">
          <ul className="w-[360px] mx-auto flex items-center justify-center gap-[34px] mt-[26px]">
            <li>
              <a
                className="text-xl aspect-square w-[50px] p-2 flex items-center justify-center border rounded-[8px] border-[#ffffffd7] text-[#ffffffd7] hover:border-[white] hover:text-white"
                href=""
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li>
              <a
                className="text-xl aspect-square w-[50px] p-2 flex items-center justify-center border rounded-[8px] border-[#ffffffd7] text-[#ffffffd7] hover:border-[white] hover:text-white"
                href=""
              >
                <FaGithub />
              </a>
            </li>
            <li>
              <a
                className="text-2xl aspect-square w-[50px] p-2 flex items-center justify-center border rounded-[8px] border-[#ffffffd7] text-[#ffffffd7] hover:border-[white] hover:text-white"
                href=""
              >
                <FaWhatsapp />
              </a>
            </li>
            <li>
              <a
                className="text-xl aspect-square w-[50px] p-2 flex items-center justify-center border rounded-[8px] border-[#ffffffd7] text-[#ffffffd7] hover:border-[white] hover:text-white"
                href=""
              >
                <BiLogoGmail />
              </a>
            </li>
          </ul>
        </div>
        {/* gmail and number */}
        <div className="w-full">
          <ul className="mx-auto flex flex-col justify-center items-center mt-[77px]">
            <li>
              <a
              className="text-[#ffffffa7] hover:text-white"
              href="">jakub.z.roman@gmail.com</a>
            </li>
            <li className="mt-1 text-[#ffffffa7] hover:text-white">
              <a href="">+ 421 903 871 518</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
