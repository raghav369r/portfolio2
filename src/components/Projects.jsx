import { useState } from "react";
import { AiFillGithub, AiOutlineEye } from "react-icons/ai";

const Projects = () => {
  const projects = [
    {
      title: "Code Master",
      img_link: "/images/code_master.png",
      gitHub_link: "https://github.com/raghav369r/online-code",
      live: "https://codee-pract.web.app/",
      description: "This App Was Build Using React, Node, mongodb",
    },
    {
      title: "TwinGram",
      img_link: "/images/twingram.png",
      gitHub_link: "https://github.com/raghav369r/twingram",
      live: "https://twingram-app.web.app/",
      description: "This App Was Build Using React, Node, mongodb",
    },
    {
      title: "Netflix-GPT",
      img_link: "/images/netflix.png",
      gitHub_link: "https://github.com/raghav369r/netflix-gpt",
      live: "https://netflix-6137c.web.app/",
      description: "This App Was Build Using React",
    },
    {
      title: "Portfolio",
      img_link: "/images/portfolio.png",
      gitHub_link: "https://github.com/raghav369r/portfolio",
      live: "https://r-portfolio-r.web.app/",
      description: "This App Was Build Using React",
    },
    {
      title: "Auth Backend",
      gitHub_link: "https://github.com/raghav369r/auth-api-backend",
      live: null,
      description: "backend for authentication, running code, saving user data",
    },
  ];

  return (
    <div className="ml-2 md:ml-20 my-10">
      <h1 className="text-5xl font-semibold text-primary my-8">Projects</h1>
      <div className="grid grid-cols-2 md:grid-cols-4">
        {projects.map((ele, ind) => (
          <Project key={ind} ele={ele} />
        ))}
      </div>
    </div>
  );
};

export default Projects;

const Project = ({ ele }) => {
  return (
    <div className="p-3 m-2 md:m-4 bg-gray-800 rounded-lg transform hover:scale-110 cursor-pointer border-4 border-gray-800 hover:border-primary group">
      <img
        src={ele.img_link}
        className="object-cover group-hover:opacity-50 transform"
      />
      <h1 className="text-lg font-bold p-2">{ele.title}</h1>
      <p className="text-gray-500 p-2">{ele.description}</p>
      <div className="absolute hidden group-hover:flex top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[150%] justify-center gap-10">
        <a target="_blank" href={ele.gitHub_link}>
          <AiFillGithub className="size-10 transform hover:scale-105" />
        </a>
        <a target="_blank" href={ele.live}>
          <AiOutlineEye className="size-10 transform hover:scale-105" />
        </a>
      </div>
    </div>
  );
};
