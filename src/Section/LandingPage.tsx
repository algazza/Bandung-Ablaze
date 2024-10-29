import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import React from "react";
import { illustrasi } from "../helper";

const SECTION_HEIGHT = 1500;

const LandingPage = () => {
    const {scrollY} = useScroll()

    const clip1 = useTransform(scrollY, [0, SECTION_HEIGHT], [25, 0])
    const clip2 = useTransform(scrollY, [0, SECTION_HEIGHT], [75, 100])
    const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`

    const opacity = useTransform(scrollY, [SECTION_HEIGHT, SECTION_HEIGHT + 500], [1, 1])

    const backgroundSize = useTransform(scrollY, [0, SECTION_HEIGHT + 500], ["170%", "100%"])


  return (
      <div
          className="relative w-full"
          style={{ height: `calc(${SECTION_HEIGHT}px + 100dvh)` }}
    >
      <motion.div
        className="sticky top-0 h-screen w-full flex justify-center items-center "
        style={{
          opacity,
          backgroundSize,
          clipPath,
          backgroundImage: `url(${illustrasi})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="text-6xl font-medium text-center text-accent">Bandung Lautan Api</h1>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-primary/0 to-primary" />
    </div>
  );
};

export default LandingPage;
