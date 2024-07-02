const About = () => {
  return (
    <div id="About" className="container mx-auto p-2">
      <div className="flex items-center my-20">
        <div className="size-3 rounded-full bg-primary " />
        <div className="size-3 rounded-full bg-primary mx-4" />
        <hr className="w-full border-[3px] border-primary rounded-lg" />
      </div>
      <div className="flex flex-col-reverse md:flex-row">
        <div className="flex w-full md:w-1/2 flex-col gap-5 text-lg text-justify">
          <h1 className="text-3xl md:text-5xl text-primary font-bold">
            About Me
          </h1>
          <p className="">
            I&apos;m a passionate and results-oriented 3rd-year Computer Science
            Engineering student with a strong focus on full-stack web
            development. I&apos;m constantly seeking opportunities to learn and
            grow as a developer, and I&apos;m particularly interested in gaining
            practical experience through an internship.
          </p>
          <p>
            I&apos;m a quick learner, a team player, and highly motivated to
            tackle new challenges. I&apos;m eager to contribute my skills and
            knowledge to a team environment and learn from experienced
            professionals. I have foundation in programming languages,
            frameworks, and development tools. I&apos;m proficient in both
            front-end and back-end technologies, allowing me to work on all
            aspects of the web development process. (like HTML, CSS, JavaScript,
            Nodejs, ReactJs, etc.)
          </p>
        </div>
        <div className="flex w-1/2 mx-auto md:mx-0 justify-center items-center">
          <img
            alt=""
            src="/images/boy.svg"
            className="object-contain max-h-[70vh]"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
