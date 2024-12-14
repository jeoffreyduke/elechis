"use client";
import React, { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";

export interface ImageData {
  src: StaticImageData;
  alt: string;
}

interface CarouselProps {
  images: ImageData[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <>
      {images.map((imageData, index) => (
        <Image
          style={{ filter: "brightness(0.8) contrast(1.1) opacity: 0.7" }}
          src={imageData.src}
          objectFit="cover"
          layout="fill"
          fill
          key={imageData.alt}
          className={`absolute inset-0 object-cover w-full h-full opacity-0 transition-opacity duration-500 ease-in-out ${
            currentImageIndex === index ? "opacity-100" : ""
          }`}
          alt={imageData.alt}
        />
      ))}
    </>
  );
};

export default Carousel;
