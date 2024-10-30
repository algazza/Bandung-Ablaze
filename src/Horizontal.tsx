import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { image1, image2, image3, image4, image5 } from "./helper";

const cards: CardProps[] = [
  {
    url: image1,
    title: "Title 1",
    id: 1,
  },
  {
    url: image2,
    title: "Title 2",
    id: 2,
  },
  {
    url: image3,
    title: "Title 3",
    id: 3,
  },
  {
    url: image4,
    title: "Title 4",
    id: 4,
  },
  {
    url: image5,
    title: "Title 5",
    id: 5,
  },
];

const Horizontal = () => {
  return (
    <div className="bg-neutral-800">
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold text-neutral-500">Scroll down</span>
      </div>
      <HorizontalScrollCarousel />
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold text-neutral-500">Scroll Up</span>
      </div>
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const [isHorizontalEnabled, setIsHorizontalEnabled] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  useEffect(() => {
    const checkScreen = () => {
      setIsHorizontalEnabled(window.innerWidth >= 1020);
    };
    checkScreen();

    window.addEventListener("resize", checkScreen);
    return () => {
      window.removeEventListener("resize", checkScreen);
    };
  }, []);

  return (
    <section ref={ref} className="relative h-[300vh] bg-neutral-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

type CardProps = {
  url: string;
  title: string;
  id: number;
};

const Card = ({ card }: { card: CardProps }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-textColor uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default Horizontal;
