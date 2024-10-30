import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import React, { useRef } from "react";
import { ilustrasi1, image1, image2, image3, image4 } from "../helper";

const SECTION_HEIGHT = 1500;

const ParallaxPage = () => {
  const { scrollY } = useScroll();

  const clip1 = useTransform(scrollY, [0, SECTION_HEIGHT], [25, 0]);
  const clip2 = useTransform(scrollY, [0, SECTION_HEIGHT], [75, 100]);
  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  const opacity = useTransform(
    scrollY,
    [SECTION_HEIGHT, SECTION_HEIGHT + 500],
    [1, 1]
  );

  const backgroundSize = useTransform(
    scrollY,
    [0, SECTION_HEIGHT + 500],
    ["170%", "100%"]
  );

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
          backgroundImage: `url(${ilustrasi1})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="text-6xl font-medium text-center text-accent">
          The Story
        </h1>
      </motion.div>

      <ParallaxImages />

      {/* <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-primary/0 to-primary" /> */}
    </div>
  );
};

const ParallaxImages = () => {
  return (
    <div className="relative z-10 mx-auto max-w-5xl px-4 pt-[200px]">
      <ParallaxImg
        src={image1}
        alt="dokumentasi Bandung Lautan Api"
        start={-200}
        end={200}
        className="w-1/3"
      />
      <ParallaxImg
        src={image2}
        alt="dokumentasi Bandung Lautan Api"
        start={200}
        end={-250}
        className="mx-auto w-2/3"
      />
      <ParallaxImg
        src={image3}
        alt="dokumentasi Bandung Lautan Api"
        start={-200}
        end={100}
        className="ml-auto w-1/3"
      />
      <ParallaxImg
        src={image4}
        alt="dokumentasi Bandung Lautan Api"
        start={0}
        end={-500}
        className="ml-24 w-5/12"
      />
    </div>
  );
};

type ParallaxImgProps = {
  className: string;
  alt: string;
  src: string;
  start: number;
  end: number;
};

const ParallaxImg = ({ className, alt, src, start, end }: ParallaxImgProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });
  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <motion.img
      style={{ opacity, transform }}
      ref={ref}
      src={src}
      alt={alt}
      className={className}
    />
  );
};

export default ParallaxPage;
