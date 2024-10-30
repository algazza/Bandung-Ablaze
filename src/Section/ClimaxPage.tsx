import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { image4, styles, video } from "../helper";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const ClimaxPage = () => {
  return (
    <div className="relative md:flex flex-row-reverse">
      <div className="">
        <img
          src={image4}
          alt=""
          className="w-[480px] border-2 border-textColor"
        />
      </div>

      <div className="border-2 rounded-r-[5rem] border-textColor p-4 pr-6 md:absolute md:w-1/3 md:top-[3rem] left-[4rem] bg-primary my-8">
        <h1 className={styles.heading4}>07. Pembakaran Kota</h1>
        <p className="mt-2">
          Pada malam tanggal 23 Maret 1946, para pejuang bersama dengan rakyat
          Bandung mulai membakar gedung-gedung penting, fasilitas umum, dan
          rumah-rumah mereka sendiri. Pembakaran ini dilakukan secara
          terorganisir, dengan tujuan untuk menghancurkan semua yang bernilai
          strategis bagi pasukan Sekutu.
        </p>
      </div>

      <div className="border-2 rounded-r-[5rem] border-textColor p-4 pr-6 md:absolute md:w-1/3 md:top-1/2 left-[22rem] bg-primary">
        <h1 className={styles.heading4}>08. Bandung Menjadi Lautan Api</h1>
        <p className="mt-2">
          Dari kejauhan, kota Bandung terlihat seperti lautan api yang besar.
          Ribuan penduduk meninggalkan kota sambil menyaksikan kobaran api yang
          meluluhlantakkan tempat tinggal dan fasilitas di sekitarnya. Peristiwa
          ini kemudian dikenal sebagai *Bandung Lautan Api*, simbol perjuangan
          dan pengorbanan rakyat Indonesia.
        </p>
      </div>
    </div>
  );
};

export default ClimaxPage;
