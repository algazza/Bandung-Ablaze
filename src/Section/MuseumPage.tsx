import React, {useRef} from 'react';
import {image1, image5} from "../helper";
import {motion, useInView, AnimatePresence} from "framer-motion";

const MuseumPage = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, {
        margin: "-80px",
        once: false
    })

    const imgAnimation = {
        hidden:{
            clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
        },
        visible: {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
            transition: {
                delay: 0.75,
                duration: 0.5,
                ease: 'easeInOut',
            },
        },
        exit: {
            clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
        }
    }
    const variants = {
        hidden: {opacity: 0, y: 75},
        visible: {opacity: 1, y: 0},
        exit: {opacity: 0, y: -75}
    }

    return (
        <div ref={ref} className="flex justify-center items-center">
            <AnimatePresence>
            <motion.div
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{duration: 0.5, delay: 0.5}}
                    className="relative"
                >
                    <motion.img variants={imgAnimation} initial="hidden" animate="visible" exit="exit" src={image5} alt="" className="" />
                    <div className="md:w-[400px] md:absolute -bottom-[80px] -right-[150px] bg-black p-4">
                        <p className="text-backgroundColor text-sm text-justify">
                            Setelah Proklamasi Kemerdekaan pada 17 Agustus 1945, kondisi di Indonesia masih belum
                            stabil. Di
                            banyak wilayah, pasukan Sekutu (yang dipimpin Inggris) kembali masuk ke Indonesia dengan
                            tujuan
                            melucuti tentara Jepang yang sudah kalah pada Perang Dunia II. Namun, seringkali pasukan
                            Sekutu
                            juga membantu Belanda untuk kembali menguasai wilayah Indonesia.
                        </p>
                    </div>
                </motion.div>
                {/* {isInView &&    ()} */}
            </AnimatePresence>
        </div>
    );
};

export default MuseumPage;