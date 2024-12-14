import React from "react";
import Link from "next/link";
import Carousel, { ImageData } from "../Carousel";
import rice from "../../../../public/assets/rice.jpg";
import afang from "../../../../public/assets/afang.jpg";
import jollof from "../../../../public/assets/jollof.jpg";

const images: ImageData[] = [
  { src: jollof, alt: "Jollof Rice" },
  { src: afang, alt: "Afang Soup" },
  { src: rice, alt: "Rice and Stew" },
];

const FirstSection = () => {
  return (
    <section className="relative h-[91vh] max-sm:h-[76vh] bg-[rgb(239,226,215)]">
      <div className="relative w-full h-full flex flex-col items-center">
        <div className="relative flex justify-center w-[90vw] h-[70vh] max-sm:h-[100vh] bg-black">
          <Carousel images={images} />
          <div className="absolute bottom-8 w-[60vw] h-[30vh] max-sm:h-[10vh] max-sm:w-[85vw] flex justify-center items-center text-center p-3 bg-[rgba(30,24,0,0.45)] text-[3rem] max-sm:text-[1.2rem] text-white">
            <p>Allow your tongue to save you a trip to Africa.</p>
          </div>
        </div>

        <Link href="/menu">
          <button className="bg-[rgb(30,24,0)] text-[rgb(233,186,0)] m-5 rounded-md h-[3rem] w-[20rem] mx-1">
            <b>See our menu</b>
          </button>
        </Link>

        {/* <div className="flex justify-center items-center">
          <Lottie
            animationData={sun}
            loop
            play
            className=" w-[7rem] h-[7rem]"
          />
          <button className="bg-[rgb(233,186,0)] rounded-md h-[3rem] w-[20rem] mx-1">
            <b>See our menu</b>
          </button>
          <Lottie
            animationData={sun}
            loop
            play
            className=" w-[7rem] h-[7rem]"
          />
        </div> */}
      </div>

      {/* <Image
        className="absolute left-0 bottom-[-2rem] z-10"
        src={left}
        height={250}
        width={250}
        alt="left"
      />

      <Image
        className="absolute -right-5 bottom-[-2rem]"
        src={right}
        height={250}
        width={250}
        alt="right"
      /> */}
    </section>
  );
};

export default FirstSection;
