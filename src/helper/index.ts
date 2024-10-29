import image1 from "../img/download.jpeg"
import image2 from "../img/download(2).jpeg"
import image3 from "../img/download(3).jpeg"
import image4 from "../img/download(4).jpeg"
import image5 from "../img/download(5).jpeg"
import illustrasi from "../img/ilustrasiBandung.jpeg"
import MuhTohha from "../img/Muhammad_Toha.jpg"
import AbdulHaris from "../img/Kolonel Abdul Haris Nasution.jpeg"
import MayorRukana from "../img/Silhouettes_.jpeg"
import video from "../img/WIN_20231107_09_55_52_Pro.mp4"

export {
    image1,
    image2,
    image3,
    image4,
    image5,
    illustrasi,
    MuhTohha,
    AbdulHaris,
    MayorRukana,
    video,
}

export const styles = {
    inputSpan: "grid grid-col",

    heading1: "font-bold xs:text-[61.04px] text-[41.8px]",
    heading2: "font-bold xs:text-[48.83px] text-[34.84px]",
    heading3: "font-bold xs:text-[39.06px] text-[29.03px]",
    heading4: "font-bold xs:text-[31.25px] text-[24.19px]",
    heading5: "font-bold xs:text-[25px] text-[20.16px]",
    heading6: "font-bold xs:text-[20px] text-[16.8px] leading-[24px] xs:leading-[28px] ",
    heading6Normal: "xs:text-[20px] text-[16.8px]",
    fontBodyBold: "font-bold xs:text-[16px] text-[14px]",
    fontBody: "xs:text-[16px] text-[14px]",
    fontSmallBold: "font-bold xs:text-[12.8px] text-[11.67px]",
    fontSmall: "xs:text-[12.8px] text-[11.67px]",
    fontCaption: "xs:text-[10.24px] text-[9.72px]",

    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",
    
    flexJusEnd: "flex justify-end items-center",

    paddingX: "sm:px-12 px-6",
    paddingY: "sm:py-12 py-6",
    padding: "sm:px-12 px-6 sm:py-12 py-4",

    marginX: "sm:mx-12 mx-6",
    marginY: "sm:my-12 my-6",
}

export type Tokoh = {
    img: string
    tokoh: string
    description: string
}

export const TokohPenting: Tokoh[] = [
    {
        img: AbdulHaris,
        tokoh: "Kolonel Abdul Haris Nasution",
        description: `Pada masa itu, Kolonel Abdul Haris Nasution atau A.H Nasution bertugas sebagaiKomandan Divisi III. 
        Dia termasuk pemimpin bangsa yang tidak mau mengosongkan Kota Bandung. KolonelNasution pun berdiskusi dengan 
        pemerintahan sipil, polisi, DPRD dan Karesidenan. Hingga perintah pembakaran disetujui, dia meminta seluruh warga 
        Bandung dievakuasi. Dia menugaskanmiliter untuk menjalankan keputusan tersebut.`,
    },
    {
        img: MuhTohha,
        tokoh: "Muhammad Tohha",
        description: `Muhammad Toha adalah anggotaBRI atau Barisan Rakyat Indonesia. 
        Pada peristiwa Bandung Lautan Api, dia bertugas untukmenghancurkan gudang 
        senjata dan amunisi milik pasukan Sekutu. Muhammad Toha berhasil menjalankan tugasnya. 
        Akan tetapi kesuksesan itu dibayar dengan nyawanya. Ya, dia berhasil meledakkan gudang 
        senjata menggunakan dinamit. Muhammad Toha gugur pada 24 Maret 1946.`,
    },
    {
        img: MayorRukana,
        tokoh: "Mayor Rukana",
        description: `Tokoh Bandung Lautan Api ketiga adalahMayor Rukana. Dia adalahseorang komandan 
        Polisi Militer Bandung Dia juga adalah pencetus ide untuk melakukan pembakaran Bandung Selatan.`,
    },
]