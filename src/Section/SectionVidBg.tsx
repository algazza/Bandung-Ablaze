import React, { useState } from "react";
import { illustrasi, image1, styles, video } from "../helper";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const SectionVidBg = () => {
  return (
    <div
      className="md:flex relative"
    >
      <div className="relative">
        <img
          src={image1}
          alt="Dokumentasi Bandung Lautan Api"
          className="rounded-tr-[5rem] w-full md:h-[25rem]"
        />
        <div
          className="absolute rounded-full w-16 h-16 bg-accent top-1/2 -right-8 cursor-pointer opacity-100 flex justify-center items-center"
        >
          {/* {videoPlay ? <FaRegEyeSlash className="text-[2rem]"/> : <FaRegEye className="text-[2rem]" />} */}
        </div>
      </div>

      <div className="rounded-br-[5rem] border-2 border-black p-3 md:absolute md:w-1/3 md:top-24 right-[8rem]">
        <h1 className={styles.heading4}>Dilema Pejuang</h1>
        <p className="mt-2">
          Pada awal Maret 1946, Sekutu mengeluarkan ultimatum kepada para
          pejuang dan warga Bandung agar mengosongkan kota bagian selatan dalam
          waktu 24 jam. Jika tidak, mereka mengancam akan menggunakan kekuatan
          militer.
        </p>
      </div>
    </div>
  );
};

export default SectionVidBg;
