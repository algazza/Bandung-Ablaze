import { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import ParallaxPage from "./Section/ParallaxPage.tsx";
import ReactLenis from "lenis/react";
import { motion, useInView } from "framer-motion";
import FigurePage from "./Section/FigurePage.tsx";
import { image1, image2, image3, image6, styles } from "./helper/index.ts";
import SectionRound from "./Section/SectionRound.tsx";
import ClimaxPage from "./Section/ClimaxPage.tsx";
import SimplePage from "./Section/SimplePage.tsx";
import ConclusionPage from "./Section/ConclusionPage.tsx";
import Preload from "./Section/Preload.tsx";

const App = () => {
  const [bgColor, setBgColor] = useState("bg-backgroundColor");
  const [isLoading, setIsLoading] = useState(true);
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

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`${bgColor} ${
        styles.fontBody
      } text-textColor font-Playfair transition-colors duration-500 ${
        isLoading ? "overflow-hidden h-screen" : ""
      }`}
    >
      <ReactLenis root options={{ lerp: 0.095 }}>
        <Header />
        <main className="">
          {isLoading && <Preload />}
          <section className="" id="">
            <ParallaxPage />
          </section>

          <section className={`${styles.paddingY} px-6 md:px-0 `} id="story">
            <h1 className={`${styles.heading1} text-center text-accent`}>
              Latar Belakang
            </h1>

            <SectionRound
              rowReverse="flex-row-reverse"
              imageDocs={image2}
              roundedImg="rounded-bl-[5rem]"
              roundedText="rounded-tl-[5rem] pl-8 left-[8rem]"
              shadowPlace="top-0 -left-12"
              title="01. Kehadiran Pasukan Sekutu"
              description={`Sekutu mulai memasuki Bandung pada akhir tahun 1945. Mereka 
                ingin menguasai kota Bandung dan melucuti senjata pejuang Indonesia, yang 
                menimbulkan ketegangan antara rakyat Indonesia dan pasukan Sekutu.`}
            />

            <div className="md:rounded-full rounded-[4rem] border-2 border-textColor md:p-4 p-6 md:pl-10 pl-6 bg-backgroundColor md:w-2/3 mx-auto">
              <h1 className={styles.heading4}>02. Dilema Pejuang</h1>
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
              shadowPlace="bottom-12 right-0"
              title="03. Situasi Pasca-Proklamasi"
              description={`Setelah Proklamasi Kemerdekaan pada 17 Agustus 1945, 
                kondisi di Indonesia masih belum stabil. Di banyak wilayah, pasukan 
                Sekutu (yang dipimpin Inggris) kembali masuk ke Indonesia dengan tujuan 
                melucuti tentara Jepang yang sudah kalah pada Perang Dunia II. Namun, 
                seringkali pasukan Sekutu juga membantu Belanda untuk kembali menguasai 
                wilayah Indonesia.`}
            />
          </section>

          <section className={`${styles.paddingY} mx-6 md:px-0`}>
            <h1 className={`${styles.heading1} text-center text-accent`}>
              Awal Konflik
            </h1>

            <SimplePage
              alignDirection={styles.flexStart}
              placementDesc="-right-[150px]"
              img={image6}
              title="03. Ultimatum Sekutu"
              description={`Sekutu mulai memasuki Bandung pada akhir tahun 1945. Mereka 
              ingin menguasai kota Bandung dan melucuti senjata pejuang Indonesia, yang 
              menimbulkan ketegangan antara rakyat Indonesia dan pasukan Sekutu.`}
            />

            <SimplePage
              alignDirection={styles.flexEnd}
              placementDesc=" -left-[150px]"
              img={image3}
              title="04. Dilema Pejuang"
              description={`Pada awal Maret 1946, Sekutu mengeluarkan ultimatum kepada para pejuang dan 
              warga Bandung agar mengosongkan kota bagian selatan dalam waktu 24 jam. Jika tidak, 
              mereka mengancam akan menggunakan kekuatan militer.`}
            />
          </section>

          <motion.section ref={ref} className={styles.paddingY}>
            <h1 className={`${styles.heading1} text-center text-accent`}>
              Peristiwa Bandung Lautan Api
            </h1>
            <ClimaxPage />
          </motion.section>

          <section
            className={`${styles.marginX} ${styles.paddingY}`}
            id="figure"
          >
            <h1 className={`${styles.heading1} text-center mb-12 text-accent`}>
              Tokoh-Tokoh Penting
            </h1>
            <FigurePage />
          </section>

          <section className={styles.paddingY}>
            <ConclusionPage />
          </section>
        </main>
      </ReactLenis>
    </div>
  );
};

export default App;
