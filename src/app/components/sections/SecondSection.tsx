import Image from "next/image";
import React from "react";
import egusi from "../../../../public/assets/egusi.jpg";

const SecondSection = () => {
  return (
    <section className="h-[100vh] flex max-sm:flex-col p-2 items-center justify-center">
      <div className="relative w-[60vw] h-[80vh] max-sm:h-[30vh] max-sm:w-[80vw]">
        <Image src={egusi} alt="curry rice" fill objectFit="contain" />
      </div>
      <div className="w-[50vw] max-sm:w-[90vw] max-sm:justify-center max-sm:mt-4 flex text-[0.8rem]">
        <div className="w-[30rem] bg-[rgb(233,186,0)] p-4">
          <p className="w-full max-sm:w-[80vw] max-sm:text-center">
            Elechi's Place brings the African cuisine to you, in a way you have
            probably never experienced, the taste, the aroma, the soul, these
            are what make our dishes. Experience the rich flavors of Africa at
            Elechi's! Our savory dishes will transport you to the heart of the
            continent with their unique taste, enticing aroma, and soulful
            essence. Join us and let Elechi's bring the vibrant spirit of Africa
            to your plate like never before.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
