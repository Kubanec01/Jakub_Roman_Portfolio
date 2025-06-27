import { useIsScrollOnTheTop } from "../../hooks/useScreenTopPositionValue";

const Navbar = () => {
  const isScreenOnTheTop = useIsScrollOnTheTop();

  console.log(isScreenOnTheTop);

  return (
    <div
      className={`w-[600px] fixed top-4 left-[50%] -translate-x-[50%] z-[1000] ${
        isScreenOnTheTop
          ? "bg-transparent"
          : "bg-[#181717ac] border border-[#8080802d]"
      } backdrop-blur-sm rounded-[40px]`}
    >
      <ul className="max-w-[800px] w-[90%] py-[14px] mx-auto flex justify-center items-center gap-[50px] text-lg">
        <li>
          <a
            href=""
            className={`${
              isScreenOnTheTop
                ? "text-[white] hover:text-[#ff5ade]"
                : "text-[#ffffff7a] hover:text-[white]"
            } ease-in duration-150`}
          >
            About
          </a>
        </li>
        <li>
          <a
            href=""
          className={`${
              isScreenOnTheTop
                ? "text-[white] hover:text-[#ff5ade]"
                : "text-[#ffffff7a] hover:text-[white]"
            } ease-in duration-150`}
          >
            Stack
          </a>
        </li>
        <li>
          <a
            href=""
          className={`${
              isScreenOnTheTop
                ? "text-[white] hover:text-[#ff5ade]"
                : "text-[#ffffff7a] hover:text-[white]"
            } ease-in duration-150`}
          >
            Projects
          </a>
        </li>
        <li className="ml-[60px]">
          <a href="" className="border border-[white] text-white px-8 py-1 rounded-2xl">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
