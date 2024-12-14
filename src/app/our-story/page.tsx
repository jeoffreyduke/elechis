import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import sunflower from "../../../public/assets/sunflower.jpg";
import one from "../../../public/assets/1.jpeg";
import two from "../../../public/assets/2.jpeg";
import three from "../../../public/assets/3.jpeg";
import four from "../../../public/assets/4.jpeg";
import five from "../../../public/assets/5.jpeg";
import six from "../../../public/assets/6.jpeg";
import seven from "../../../public/assets/7.jpeg";
import eight from "../../../public/assets/8.jpeg";
import nine from "../../../public/assets/9.jpeg";
import ten from "../../../public/assets/10.jpeg";
import eleven from "../../../public/assets/11.jpeg";
import twelve from "../../../public/assets/12.jpeg";
import thirteen from "../../../public/assets/13.jpeg";
import fourteen from "../../../public/assets/14.jpeg";
import fifteen from "../../../public/assets/15.jpeg";
import sixteen from "../../../public/assets/16.jpeg";
import seventeen from "../../../public/assets/17.jpeg";
import { ImageData } from "../components/Carousel";
import AnimatedCollage from "../components/AnimatedCollage";

const images: ImageData[] = [
  { src: one, alt: "image one" },
  { src: two, alt: "image two" },
  { src: three, alt: "image three" },
  { src: four, alt: "image four" },
  { src: five, alt: "image five" },
  { src: six, alt: "image six" },
  { src: seven, alt: "image seven" },
  { src: eight, alt: "image eight" },
  { src: nine, alt: "image nine" },
  { src: ten, alt: "image ten" },
  { src: eleven, alt: "image eleven" },
  { src: twelve, alt: "image twelve" },
  { src: thirteen, alt: "image thirteen" },
  { src: fourteen, alt: "image fourteen" },
  { src: fifteen, alt: "image fifteen" },
  { src: sixteen, alt: "image sixteen" },
  { src: seventeen, alt: "image seventeen" },
];

const OurStory = () => {
  return (
    <main className="h-[100vh]">
      <Header />
      <section className="w-100vw flex justify-center">
        <div className="relative flex justify-center w-[90vw] h-[50vh] max-sm:h-[30vh]">
          <Image
            style={{ filter: "brightness(0.8) contrast(1.1) opacity: 0.7" }}
            src={sunflower}
            objectFit="cover"
            layout="fill"
            fill
            alt="menu"
          />
          <div className="absolute bottom-8 w-[60vw] h-[10vh] max-sm:h-[10vh] max-sm:w-[85vw] max-sm:text-[1.2rem] flex justify-center items-center text-center p-3 bg-[rgba(30,24,0,0.45)] text-[3rem] text-white">
            <p>Our Story</p>
          </div>
        </div>
      </section>

      <section className="flex justify-center my-8">
        <div className="w-fit mx-16 max-sm:mx-8 flex max-sm:flex-col flex-wrap gap-4 bg-[rgb(233,186,0)] p-8">
          <p className="w-full text-center text-[14px]">
            Elechi's is named after a Nigerian American who transitioned from
            earth four months after turning 18. She had a deep love for Nigeria
            and Memphis. When you step inside Elechis', we want to share
            everything that shaped her incredible life, influenced by these two
            amazing cultures she loved.
          </p>
        </div>
      </section>

      <section className="w-full flex justify-center my-20">
        <AnimatedCollage images={images} />
      </section>

      <section className="flex justify-center my-8">
        <div className="w-fit mx-16 max-sm:mx-8 flex max-sm:flex-col flex-wrap gap-4 bg-[rgb(233,186,0)] p-8">
          <p className="w-full text-center text-[14px]">
            Welcome to experiencing Elechi’s. Enjoy your time here, she would
            want you to!
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default OurStory;
