import { delay, motion, useAnimate } from "framer-motion";
import { FaFire } from "react-icons/fa";
import React, { useEffect } from "react";
import { styles } from "../helper";

const Preload = () => {
  const [scope] = useAnimate();

  useEffect(() => {
    // Disable scrolling when the component mounts
    document.body.style.overflow = 'hidden';

    // Re-enable scrolling when the component unmounts
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, []);

  const moveCenter = {
    hidden: {
      x: "-80%",
      y: 0,
    },
    visible: {
      x: 0,
      transition: {
        delay: 1,
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const moveUp = {
    hidden: {
      y: "100%",
      x: 0,
    },
    visible: {
      y: 0,
      transition: {
        delay: 1.5,
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };

  const containerUp = {
    hidden: {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    },
    show: {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      display: "none",
      transition: {
        delay: 3,
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      ref={scope}
      variants={containerUp}
      initial="hidden"
      animate="show"
      className="bg-primary h-screen fixed inset-0 overflow-hidden z-50"
    >
      <section className="flex justify-center items-center w-full h-full">
        <div className="overflow-y-clip flex items-center gap-4">
          <motion.h1
            variants={moveUp}
            initial="hidden"
            animate="visible"
            className="font-bold text-[2.5rem]"
          >
            Bandung
          </motion.h1>
          <motion.span variants={moveCenter} initial="hidden" animate="visible">
            <FaFire className="text-[2.5rem]" />
          </motion.span>
          <motion.h1
            variants={moveUp}
            initial="hidden"
            animate="visible"
            className="font-bold text-[2.5rem]"
          >
            Ablaze
          </motion.h1>
        </div>
      </section>
    </motion.div>
  );
};

export default Preload;
