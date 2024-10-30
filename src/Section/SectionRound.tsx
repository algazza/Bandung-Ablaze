import React, { useState } from "react";
import { illustrasi, image1, styles, video } from "../helper";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

type SectionRoundRightProps = {
  rowReverse: string
  imageDocs: string
  roundedImg: string
  roundedText: string
  shadowPlace: string
  title: string
  description: string
}

const SectionRound = ({rowReverse, imageDocs, roundedImg, roundedText, shadowPlace, title, description}: SectionRoundRightProps) => {
  return (
    <div
      className={`md:flex relative py-12 ${rowReverse}`}
    >
      <div className="">
        <img
          src={imageDocs}
          alt="Dokumentasi Bandung Lautan Api"
          className={`${roundedImg} w-full md:h-[25rem] border-2 border-textColor`}
        />
      </div>

      <div className={`absolute ${shadowPlace} w-[300px] h-[300px] bg-accent blur-[120px]`} />

      <div className={`${roundedText} border-2 border-textColor p-3 md:absolute md:w-1/3 md:top-1/3 right-[8rem] bg-backgroundColor`}>
        <h1 className={styles.heading4}>{title}</h1>
        <p className="mt-2">{description}</p>
      </div>
    </div>
  );
};

export default SectionRound;
