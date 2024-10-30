import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
// import { GrBold } from "react-icons/gr";
import { FaFire } from "react-icons/fa";

type TabsProps = {
  children: React.ReactNode;
  setPosition: React.Dispatch<
    React.SetStateAction<{
      left: number;
      width: number;
      opacity: number;
    }>
  >;
  href: string
};

const Header = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
    const handleClickScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ul
      onMouseLeave={() => {
        setPosition((posisi) => ({
          ...posisi,
          opacity: 0,
        }));
      }}
      className="fixed w-full h-dvh z-10 flex justify-between flex-col items-center"
    >
      <div className="flex w-fit rounded-full border-2 border-textColor bg-backgroundColor my-8">
        <Tabs href="#" setPosition={setPosition}>Home</Tabs>
        <Tabs href="#story" setPosition={setPosition}>Story</Tabs>
        <Tabs href="#figure" setPosition={setPosition}>Figure</Tabs>

        <Cursor position={position} />
      </div>

      <div className="my-8 flex gap-2 items-center">
        <span>Bandung</span>
        <FaFire />
        <span>Ablaze</span>
      </div>
    </ul>
  );
};

const Tabs = ({ children, href, setPosition }: TabsProps) => {
  const ref = useRef<HTMLAnchorElement | null>(null);

  return (
    <a
    href={href}
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          width,
          opacity: 1,
          left: ref.current.offsetLeft,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
    >
      {children}
    </a>
  );
};

type Position = {
  left: number;
  width: number;
  opacity: number;
};

type CursorProps = {
  position: Position;
};

const Cursor = ({ position }: CursorProps) => {
  return (
    <motion.li
      animate={position}
      className="absolute z-0 h-7 rounded-full w-36 bg-textColor md:h-12"
    />
  );
};

export default Header;
