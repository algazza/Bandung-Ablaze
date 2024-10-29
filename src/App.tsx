import React, { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import MuseumPage from "./Section/MuseumPage.tsx";
import LandingPage from "./Section/LandingPage.tsx";
import ReactLenis from "lenis/react";
import { motion, useInView } from "framer-motion";
import RoundedPage from "./Section/RoundedPage.tsx";
import { styles } from "./helper/index.ts";
import SectionVidBg from "./Section/SectionVidBg.tsx";

const App = () => {
  const [bgColor, setBgColor] = useState("bg-backgroundColor");

  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-400px",
    once: false,
  });

  useEffect(() => {
    if (isInView) {
      setBgColor("bg-primary");
      document.body.classList.add("bg-primary");
      document.body.classList.remove("bg-backgroundColor");
    } else {
      setBgColor("bg-backgroundColor");
      document.body.classList.add("bg-backgroundColor");
      document.body.classList.remove("bg-primary");
    }

    return () => {
      document.body.classList.remove("bg-primary", "bg-backgroundColor");
    };
  }, [isInView]);


  return (
    <div className={`${bgColor} ${styles.fontBody} font-Playfair transition-colors duration-500`}>
      <ReactLenis root options={{ lerp: 0.095 }}>
        <Header />
        <main className="py-[6rem]">
          <motion.section ref={ref} className="">
            <LandingPage />
          </motion.section>

          <section className={`${styles.paddingY} px-6 md:px-0`}>
            <SectionVidBg/>
          </section>

          <section className={`${styles.marginX} ${styles.paddingY}`}>
            <RoundedPage />
          </section>
        </main>
      </ReactLenis>
    </div>
  );
};

export default App;
