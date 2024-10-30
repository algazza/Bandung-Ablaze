import React from "react";
import { styles } from "../helper";

const ConclusionPage = () => {
  return (
    <div className="md:rounded-full rounded-[4rem] border-2 border-textColor md:p-4 p-6 md:px-12 pl-6 bg-backgroundColor md:w-2/3 mx-auto">
      <h1 className={styles.heading4}>Kesimpulan</h1>
      <p className="mt-2">
        Bandung Lautan Api menunjukkan cinta dan pengorbanan besar rakyat
        Bandung demi kemerdekaan, dengan semangat pantang menyerah menghadapi
        ancaman. Peristiwa ini menjadi simbol bahwa kemerdekaan diraih melalui
        perjuangan dan pengorbanan seluruh rakyat.
      </p>
    </div>
  );
};

export default ConclusionPage;
