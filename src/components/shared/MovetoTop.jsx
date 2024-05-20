import AnchorLink from "react-anchor-link-smooth-scroll";
import { FaChevronUp } from "react-icons/fa";

const MovetoTop = () => {
  return (
    <AnchorLink className="inline-flex" href="#Home">
      <FaChevronUp
        className="fixed bottom-8 right-8 rounded-full bg-white text-black z-10 size-10 p-2 cursor-pointer
      hover:-translate-y-2"
      />
    </AnchorLink>
  );
};

export default MovetoTop;
