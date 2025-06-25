const SkillsSection = () => {
  return (
    <section className="border border-white w-full mt-[100px] h-[700px]">
      <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-[#16d0ff] from-[30%] via-[#37FFC9] to-[#ffffff] to-[65%] text-center font-medium text-[2.8em] mt-[50px]">
        Technologies I Love Working With
      </h1>
      <div className="h-[80%] relative mx-auto w-[90%] max-w-[1500px]">
        {/* toto tiez spravim formou data.map */}
        <div className="border border-white rounded-[14px] aspect-square w-[120px] absolute top-0 left-0  flex justify-center items-center">
          <span className="border border-white aspect-square w-[60%]">
            <img
              className="w-full h-full object-cover"
              src=""
              alt="testing-img"
            />
          </span>
        </div>
      </div>
    </section>
  );
};

// ! toto bude asi najvacsi problem, skills bars budu rozne od seba a budu robene v Parallax efekte (na to stiahnem nejaku kniznicu),
// ! netusim este ako to budem rozmiestnovat ani ako sa to bude spravat, toto bude problem vratim sa k tomu neskorsie

export default SkillsSection;
