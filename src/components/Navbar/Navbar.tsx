import { useIsScrollOnTheTop } from "../../hooks/useScreenTopPositionValue";
import { BsThreeDots } from "react-icons/bs";

const Navbar = () => {
  const isScreenOnTheTop = useIsScrollOnTheTop();

  // Testing variable
  const isOpen = false;

  return (
    <>
      {isScreenOnTheTop ? (
        <div
          className={`w-[600px] fixed top-4 left-[50%] -translate-x-[50%] z-[1000]`}
        >
          <ul className="max-w-[800px] w-[90%] py-[14px] mx-auto flex justify-center items-center gap-[50px] text-lg">
            <li>
              <a
                href=""
                className="text-[white] hover:text-[#ff5ade] duration-150 ease-in"
              >
                About
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-[white] hover:text-[#ff5ade] duration-150 ease-in"
              >
                Stack
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-[white] hover:text-[#ff5ade] duration-150 ease-in"
              >
                Projects
              </a>
            </li>
            <li className="ml-[60px]">
              <a
                href=""
                className="border border-[white] text-white px-8 py-1 rounded-2xl"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      ) : (
        // Closed Menu
        <div
          className={`z-[1000] border border-[#ffffff29] fixed top-[20px] left-[50%] -translate-x-[50%] w-[60px] h-[52px] rounded-[30px] backdrop-blur-[20px] bg-[#292929a0]
        flex justify-center items-center p-2  ${isOpen ? "" : "hover:scale-[106%] cursor-pointer duration-100 ease-in"}`}
        >
          <div className="w-full h-full flex justify-center items-center">
            {isOpen ? (
              ""
            ) : (
              <span className="text-[#ffffffd9] text-[25px]">
                <BsThreeDots />
              </span>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
