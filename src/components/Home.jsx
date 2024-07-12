import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { SiLeetcode } from "react-icons/si";
import AnchorLink from "react-anchor-link-smooth-scroll";

import Button from "./shared/Button";
import SidePanel from "./shared/SidePanel";
import {
  GITHUB_LINK,
  LEETCODE_LINK,
  LINKEDIN_LINK,
  RESUME_LINK,
} from "../config/constants";

const Home = () => {
  const [open, SetOpen] = useState(false);
  return (
    <div
      id="Home"
      className="relative flex flex-col md:flex-row h-auto md:h-[100vh] "
    >
      <div className="h-[200px]  flex flex-col justify-between w-full md:w-1/3 bg-primary md:h-full">
        <h1 className="text-black font-semibold text-2xl md:text-5xl text-left md:text-center p-4 m-5 font-mixed">
          RaGhav
        </h1>
        <div className="hidden md:flex justify-center gap-10 py-10">
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
          <a href={LEETCODE_LINK} target="_blank">
            <SiLeetcode
              className="size-10 cursor-pointer hover:scale-110"
              color="black"
            />
          </a>
        </div>
      </div>
      <div className="flex flex-col relative w-full md:w-2/3 bg-neutral-800 h-full items-center justify-center">
        <div className="">
          <img
            className="size-[200px] -top-[100px] right-1/2 translate-x-1/2 md:translate-x-0 block object-fill z-10 absolute md:top-[calc(50vh-150px)] md:-left-[150px] md:size-[300px] rounded-full backdrop-blur-lg border-[7px] border-bgcol"
            src="/images/profile.jpeg"
            alt=""
          />
          <h2 className="mt-[105px] text-gray-500 md:mt-0 md:ml-[150px] text-center text-2xl py-2 font-semibold md:max-w-none max-w-[350px]">
            Full stack Developer
          </h2>
          <h1 className="md:ml-[150px] text-center text-4xl font-semibold pb-5 md:max-w-none max-w-[350px]">
            Raghav Reddy
          </h1>
          <p className="md:ml-[150px] text-neutral-400 max-w-[350px] md:max-w-1/2 text-justify">
            I am Raghav, a third-year BTech student in Computer Science and
            Engineering (CSE) with a passion for full-stack development.
            Currently seeking full-time opportunities to apply and expand my
            skills in the field.
          </p>
          <div className="py-4 flex justify-center gap-4">
            <a target="_blank" href={RESUME_LINK}>
              <Button name="Resume" />
            </a>
            <AnchorLink href="#Contact">
              <Button name="Contact" />
            </AnchorLink>
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
