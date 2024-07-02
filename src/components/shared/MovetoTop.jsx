import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { FaChevronUp } from "react-icons/fa";

const MovetoTop = () => {
  const moveRef = useRef(null);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const handleScroll = (event) => {
      if (window.scrollY > 20) setShow(true);
      else setShow(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  ``;
  return show ? (
    <AnchorLink className="flex" href="#Home">
      <FaChevronUp
        className="fixed bottom-8 right-8 rounded-full bg-white text-black z-10 size-10 p-2 cursor-pointer
      hover:-translate-y-2"
      />
    </AnchorLink>
  ) : (
    ""
  );
};

export default MovetoTop;
