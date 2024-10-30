import { motion } from "framer-motion";
import React, { useRef, useState } from "react";

type TabsProps = {
  children: React.ReactNode;
  setPosition: React.Dispatch<
    React.SetStateAction<{
      left: number;
      width: number;
      opacity: number;
    }>
  >;
};

const Header = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => {
        setPosition((posisi) => ({
          ...posisi,
          opacity: 0,
        }));
      }}
      className="fixed w-full z-10 my-4 flex justify-center"
    >
      <div className="flex w-fit rounded-full border-2 border-textColor bg-backgroundColor">
        <Tabs setPosition={setPosition}>Home</Tabs>
        <Tabs setPosition={setPosition}>Story</Tabs>
        <Tabs setPosition={setPosition}>Gallery</Tabs>

        <Cursor position={position} />
      </div>
    </ul>
  );
};

const Tabs = ({ children, setPosition }: TabsProps) => {
  const ref = useRef<HTMLLIElement | null>(null);

  return (
    <li
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
    </li>
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
