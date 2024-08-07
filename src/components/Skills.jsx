import Marquee from "react-fast-marquee";
const Skills = () => {
  const data = [
    { tech: "ReactJs", imgUrl: "" },
    { tech: "NodeJs", imgUrl: "" },
    { tech: "ExpressJs", imgUrl: "" },
    { tech: "Git", imgUrl: "" },
    { tech: "Git-Hub", imgUrl: "" },
    { tech: "JavaScript", imgUrl: "" },
    { tech: "MongoDB", imgUrl: "" },
    { tech: "HTML", imgUrl: "" },
    { tech: "CSS", imgUrl: "" },
    { tech: "TailwindCSS", imgUrl: "" },
  ];
  return (
    <div id="Skills" className="container mx-auto p-2">
      <h1 className="text-3xl md:text-5xl text-primary font-semibold my-10">Skills</h1>
      <Marquee pauseOnHover={true} speed={100}>
        {data.map((ele, ind) => (
          <div
            key={ind}
            className="size-28 m-5 shadow-primary shadow-lg rounded-lg hover:scale-125 cursor-pointer flex justify-center items-center font-semibold"
          >
            {ele.tech}
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Skills;
