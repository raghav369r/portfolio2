const About = () => {
  return (
    <div id="About" className="mx-2 md:mx-20">
      <div className="flex items-center my-20">
        <div className="size-3 rounded-full bg-primary " />
        <div className="size-3 rounded-full bg-primary mx-4" />
        <hr className="w-full border-[3px] border-primary rounded-lg" />
      </div>
      <div className="flex flex-col-reverse md:flex-row">
        <div className="flex w-full md:w-1/2 flex-col gap-5 text-lg text-justify">
          <h1 className="text-3xl md:text-5xl text-primary font-bold">About Me</h1>
          <p className="">
            A dedicated web developer based in Kerala, India, with a background
            in engineering and a passion for technology, embarked on an exciting
            journey in the realm of web development. Experience includes
            completing the intensive Masai School program, which followed a
            rigorous 9-6-9 schedule spanning 12 hours daily for 8 months. During
            this program, skills in the MERN stack were honed and a strong work
            ethic cultivated. After completing the Masai School program,
            transitioned to Orcasho as a full-stack developer, where various
            projects, including the development of their official website and
            the prestigious Gut Cleansing Program, were led.
          </p>
          <p>
            Subsequently, transitioned to ineuron.ai as an SDE1, contributing to
            innovative projects such as Refer and Earn, Support System, and
            Course Selling. This journey underscores a commitment to continuous
            learning and a drive to excel in delivering cutting-edge solutions
            in the dynamic field of web development.
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
