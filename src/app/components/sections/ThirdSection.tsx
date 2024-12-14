import Image from "next/image";
import React from "react";
import afang from "../../../../public/assets/Afang-soup.jpeg";

const ThirdSection = () => {
  return (
    <section className="h-[100vh] max-sm:h-[50vh] flex max-sm:flex-col-reverse p-2 px-[7rem] items-center justify-center">
      <div className="w-[50vw] max-sm:w-[90vw] max-sm:justify-center max-sm:mt-4 flex text-[0.8rem]">
        <div className="w-[30rem] bg-[rgb(233,186,0)] p-4">
          <p className="w-full max-sm:w-[80vw] max-sm:text-center">
            Discover a variety of dishes at our restaurant, each with its own
            unique flavors and stories. Let us transport you to a place that
            feels like home, where every bite brings you closer to the heart of
            our culinary traditions.
          </p>
        </div>
      </div>
      <div className="relative w-[50vw] h-[80vh] max-sm:h-[30vh] max-sm:w-[80vw]">
        <Image src={afang} alt="curry rice" fill objectFit="contain" />
      </div>
    </section>
  );
};

export default ThirdSection;
