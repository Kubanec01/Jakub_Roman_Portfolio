import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import type { IconType } from "react-icons";

const Footer = () => {
  // style
  const iconStyle =
    "text-xl aspect-square w-[50px] p-2 flex items-center justify-center border rounded-[8px] border-[#ffffffd7] text-[#ffffffd7] hover:border-[#e1cffdf0] hover:text-[#e1cffdf0]";

  // data
  interface iconsDataProps {
    id: string;
    icon: IconType;
    linkUrl: string;
  }

  const iconsData: iconsDataProps[] = [
    {
      id: "linkedId",
      icon: FaLinkedinIn,
      linkUrl: "https://www.linkedin.com/in/jakub-roman-4b1664338/",
    },
    {
      id: "github",
      icon: FaGithub,
      linkUrl: "https://github.com/Kubanec01",
    },
    {
      id: "whatsApp",
      icon: FaWhatsapp,
      linkUrl: "tel:+421 903 871 518",
    },
    {
      id: "gmail",
      icon: BiLogoGmail,
      linkUrl: "mailto:jakub.z.roman@gmail.com",
    },
  ];

  return (
    <div className="w-full h-[320px] bg-[#141313] mt-[120px]">
      {/* body */}
      <div className="w-[90%] h-full mx-auto max-w-[1000px] px-4 overflow-hidden">
        <div className="w-full m-auto">
          <h1 className="text-center text-4xl mt-[24px] bg-clip-text bg-linear-to-r from-[#e5def0] via-[#e1cffdf0] to-[white] to-75% text-transparent">
            Thank you for visiting!
          </h1>
          <h2 className="text-[#ffffff9a] text-center text-xl mt-[6px]">
            You can <span className="text-[#ffffff]">reach</span> me on:
          </h2>
        </div>
        {/* contact icons */}
        <div className="w-full">
          <ul className="w-[360px] mx-auto flex items-center justify-center gap-[34px] mt-[26px]">
            {iconsData.map((i) => (
              <li key={i.id}>
                <a className={iconStyle} href={i.linkUrl} target="_blank">
                  <i.icon />
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* gmail and number */}
        <div className="w-full">
          <ul className="mx-auto flex flex-col justify-center items-center text-[#ffffffa7] mt-[77px]">
            <li>jakub.z.roman@gmail.com</li>
            <li className="mt-1 text-[15px]">+ 421 903 871 518</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
