import { IoMdClose } from "react-icons/io";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Item = ({ name, close }) => {
  return (
    <AnchorLink
      className="w-48 py-2 rounded-full font-semibold border-primary border-[3px] text-primary 
        hover:text-black hover:bg-white hover:border-white text-center "
      href={"#" + name}
      onClick={close}
    >
      {name}
    </AnchorLink>
  );
};
const SidePanel = ({ close }) => {
  return (
    <div className="z-20 absolute h-[100vh]  bg-opacity-50 w-full backdrop-blur-lg">
      <ul className="relative flex flex-col gap-6 bg-neutral-800 rounded-r-3xl justify-center items-center w-64  h-full">
        <IoMdClose
          className="absolute size-9 top-5 right-5 cursor-pointer hover:rotate-90 duration-200"
          onClick={close}
        />
        <Item close={close} name="Home" />
        <Item close={close} name="About" />
        <Item close={close} name="Resume" />
        <Item close={close} name="Education" />
        <Item close={close} name="Skills" />
        <Item close={close} name="Projects" />
        <Item close={close} name="Contact" />
      </ul>
    </div>
  );
};

export default SidePanel;
