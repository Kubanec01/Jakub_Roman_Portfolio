const Navbar = () => {
  return (
    <div className=" w-full fixed">
      <ul className="text-white max-w-[800px] w-[90%] py-[20px] mx-auto flex justify-center items-center gap-[60px] text-lg">
        <li>
          <button>About</button>
        </li>
        <li>
          <button>Tools</button>
        </li>
        <li>
          <button>Projects</button>
        </li>
        <li
        className="ml-[90px]"
        >
          <button
          className="border border-[white] px-8 py-1 rounded-2xl"
          >Contact</button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
