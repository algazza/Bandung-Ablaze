import React from "react";
import { MuhTohha, styles, TokohPenting } from "../helper";

const FigurePage = () => {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-4 justify-around">
      {TokohPenting.map((tokoh, index) => (
        <div
          key={index}
          className={`flex flex-col items-center md:px-6 py-6 ${
            index === 1
              ? "md:border-x-2 md:border-y-0 border-y-2 border-textColor"
              : ""
          }`}
        >
          <img
            src={tokoh.img}
            alt={tokoh.img}
            className="rounded-t-full md:w-[300px] max-h-[730px] border-2 border-textColor"
          />

          <div className="">
            <h2 className={styles.heading2}>{tokoh.tokoh}</h2>

            <p className="text-justify">{tokoh.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FigurePage;
