import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMenu, IoMdClose } from "react-icons/io";

import Button from "./shared/Button";
import SidePanel from "./shared/SidePanel";
import { GITHUB_LINK, LINKEDIN_LINK, RESUME_LINK } from "../config/constants";

const Home = () => {
  const [open, SetOpen] = useState(false);
  return (
    <div className={"relative flex h-[100vh] "}>
      <div className="flex flex-col justify-between w-1/3 bg-primary h-full">
        <h1 className="text-black font-semibold text-5xl text-center p-4 font-mixed">
          RaGhav
        </h1>
        <div className="flex justify-center gap-10 py-10">
          <a href={GITHUB_LINK} target="_blank">
            <FaGithub
              className="size-10 cursor-pointer hover:scale-110"
              color="black"
            />
          </a>
          <a href={LINKEDIN_LINK} target="_blank">
            <FaLinkedin
              className="size-10 cursor-pointer hover:scale-110"
              color="black"
            />
          </a>
        </div>
      </div>
      <div className="flex flex-col relative w-2/3 bg-neutral-800 h-full items-center justify-center">
        <div>
          <img
            className="object-fill z-10 absolute top-[calc(50vh-150px)] -left-[150px] size-[300px] rounded-full bg-neutral-500"
            src="/images/profile.jpeg"
            alt=""
          />
          <h2 className="ml-[150px] text-2xl py-2 font-semibold md:max-w-none max-w-[350px]">
            Full stack Developer
          </h2>
          <h1 className="ml-[150px] text-4xl font-semibold pb-5 md:max-w-none max-w-[350px]">
            Raghav Reddy
          </h1>
          <p className="ml-[150px] text-neutral-400 max-w-[350px] md:max-w-1/2 text-justify">
            If you consistently pursue the things you&apos;re passionate about,
            whether you&apos;re within the confines of a workplace or out
            exploring the streets, you&apos;ll find that every day feels like a
            holiday.
          </p>
          <div className="py-4 flex justify-center gap-4">
            <a target="_blank" href={RESUME_LINK}>
              <Button name="Resume" />
            </a>
            <Button name="Contact" />
          </div>
        </div>
      </div>
      {!open && (
        <IoMdMenu
          className="absolute size-12 right-8 top-8 cursor-pointer"
          onClick={() => SetOpen(!open)}
        />
      )}
      {open && (
        <IoMdClose
          className="absolute size-12 right-8 top-8 cursor-pointer "
          onClick={() => SetOpen(!open)}
        />
      )}
      {open && <SidePanel close={() => SetOpen(false)} />}
    </div>
  );
};

export default Home;
