import { IoMdClose } from "react-icons/io";

const Item = ({ name }) => {
  return (
    <button
      className="w-48 py-2 rounded-full font-semibold border-primary border-[3px] text-primary 
        hover:text-black hover:bg-white hover:border-white"
    >
      {name}
    </button>
  );
};
const SidePanel = ({ close }) => {
  return (
    <div className="z-20 absolute h-[100vh]  bg-opacity-50 w-screen backdrop-blur-lg">
      <ul className="relative flex flex-col gap-6 bg-neutral-800 rounded-r-3xl justify-center items-center w-64  h-full">
        <IoMdClose className="absolute size-9 top-5 right-5" onClick={close} />
        <Item name="Home" />
        <Item name="About" />
        <Item name="Resume" />
        <Item name="Projects" />
        <Item name="Contact" />
      </ul>
    </div>
  );
};

export default SidePanel;
