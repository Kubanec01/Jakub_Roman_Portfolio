const AuthorInfoSection = () => {
  return (
    <div className="w-full border border-white p-2">
      <h1 className="text-white text-center text-[2.8em] mt-8">
        More Than Just a Portfolio
      </h1>
      <section className=" mx-auto w-[90%] max-w-[1100px] mt-14">
        {/* INFO BARS */}
        <div className="p-2 flex justify-between items-center gap-2">
          {/* Developer alebo Engineer */}
          <div
            style={{
              borderRadius: "14px 0 0 0",
            }}
            className="w-[50%] h-[340px] bg-red-600 p-5"
          ></div>
          {/* UI/UX Designer */}
          <div
            style={{
              borderRadius: "0 14px 0 0",
            }}
            className="w-[50%] h-[340px] bg-green-500 p-5"
          ></div>
        </div>
        <div
          style={{
            borderRadius: "0 0 14px 14px",
          }}
          className="border border-white mx-auto w-[98.6%] h-[360px] flex justify-between items-center p-5"
        >
          {/* AUTHOR INFO BAR */}
          <div className="w-[38%] h-full flex justify-end items-center mr-3 p-2">
            {/* AUTHOR IMG */}
            <img
              className="border border-white aspect-square w-[290px] rounded-[20px]"
              src=""
              alt=""
            />
          </div>
          <div className=" w-[62%] h-full p-3">
            {/* AUTHOR TITLE AND DESC */}
            <h2 className="text-4xl text-white">Testing Title</h2>
            <p className="text-2xl text-white mt-1">Testing Desc</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AuthorInfoSection;
