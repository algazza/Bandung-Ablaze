import React, { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import LandingPage from "./Section/LandingPage.tsx";
import ReactLenis from "lenis/react";
import { motion, useInView } from "framer-motion";
import RoundedPage from "./Section/RoundedPage.tsx";
import { image1, image2, styles } from "./helper/index.ts";
import Horizontal from "./Horizontal.tsx";
import SecttionRoundLeft from "./Section/SecttionRoundLeft.tsx";
import SectionRound from "./Section/SectionRound.tsx";

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
    <div
      className={`${bgColor} ${styles.fontBody} font-Playfair transition-colors duration-500`}
    >
      <ReactLenis root options={{ lerp: 0.095 }}>
        <Header />
        <main className="py-[6rem]">
          <section  className="">
            <LandingPage />
          </section>

          <motion.section ref={ref} className={`${styles.paddingY} px-6 md:px-0`}>
          <SectionRound
              rowReverse="flex-row-reverse"
              imageDocs={image2}
              roundedImg="rounded-bl-[5rem]"
              roundedText="rounded-tl-[5rem] pl-8 left-[8rem]"
              shadowPlace="-top-12 -left-12"
              title="Kehadiran Pasukan Sekutu"
              description={`Sekutu mulai memasuki Bandung pada akhir tahun 1945. Mereka 
                ingin menguasai kota Bandung dan melucuti senjata pejuang Indonesia, yang 
                menimbulkan ketegangan antara rakyat Indonesia dan pasukan Sekutu.`}
            />

            <div className="rounded-full border-2 border-black p-4 pl-10 bg-backgroundColor w-2/3 mx-auto">
              <h1 className={styles.heading4}>Dilema Pejuang</h1>
              <p className="mt-2">
                Pada awal Maret 1946, Sekutu mengeluarkan ultimatum kepada para
                pejuang dan warga Bandung agar mengosongkan kota bagian selatan
                dalam waktu 24 jam. Jika tidak, mereka mengancam akan
                menggunakan kekuatan militer.
              </p>
            </div>

            <SectionRound
              rowReverse=""
              imageDocs={image1}
              roundedImg="rounded-tr-[5rem]"
              roundedText="rounded-br-[5rem] right-[8rem]"
              shadowPlace="bottom-0 -right-12"
              title="Situasi Pasca-Proklamasi"
              description={`Setelah Proklamasi Kemerdekaan pada 17 Agustus 1945, 
                kondisi di Indonesia masih belum stabil. Di banyak wilayah, pasukan 
                Sekutu (yang dipimpin Inggris) kembali masuk ke Indonesia dengan tujuan 
                melucuti tentara Jepang yang sudah kalah pada Perang Dunia II. Namun, 
                seringkali pasukan Sekutu juga membantu Belanda untuk kembali menguasai 
                wilayah Indonesia.`}
            />

          </motion.section>

          <section className={`${styles.marginX} ${styles.paddingY}`}>
            <RoundedPage />
          </section>

          <section>
            <Horizontal />
          </section>
        </main>
      </ReactLenis>
    </div>
  );
};

export default App;
