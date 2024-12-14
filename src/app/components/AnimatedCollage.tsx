"use client";
import React, { FC, useState, useEffect } from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";
import Image, { StaticImageData } from "next/image";

interface ImageItemProps {
  src: StaticImageData;
  alt: string;
}

interface CollageProps {
  images: { src: StaticImageData; alt: string }[];
  imageWidth?: number;
}

const ImageItem: FC<ImageItemProps> = ({ src, alt }) => (
  <motion.div
    className="relative w-64 h-64 rounded-lg overflow-hidden flex-shrink-0 cursor-pointer"
    whileHover={{ scale: 1.3, opacity: 1 }}
    whileTap={{ scale: 1.3, opacity: 1 }}
  >
    <Image
      src={src}
      alt={alt}
      layout="fill"
      objectFit="cover"
      className="rounded-lg transition duration-300 ease-in-out transform" // Add transition for hover effect
    />
  </motion.div>
);

const AnimatedCollage: FC<CollageProps> = ({ images, imageWidth = 500 }) => {
  const x = useMotionValue(0);
  const controls = useAnimation();
  const [isPaused, setIsPaused] = useState(false);

  const calculateTotalWidth = () => images.length * imageWidth;

  const animate = () => {
    const totalWidth = calculateTotalWidth();
    controls.start({
      x: [-totalWidth, 0],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: images.length * 3,
          ease: "linear",
        },
      },
    });
  };

  useEffect(() => {
    animate();
  }, [controls, images.length, imageWidth]);

  const pause = () => {
    setIsPaused(true);
    controls.stop();
  };

  const resume = () => {
    setIsPaused(false);
    animate();
  };

  return (
    <div className="overflow-hidden w-full">
      <motion.div
        className="flex"
        style={{ x }}
        animate={controls}
        onMouseEnter={pause}
        onMouseLeave={resume}
        onClick={isPaused ? () => resume() : () => pause()}
      >
        {images.map((image, index) => (
          <ImageItem key={index} src={image.src} alt={image.alt} />
        ))}
        {images.map((image, index) => (
          <ImageItem
            key={`${index}-duplicate`}
            src={image.src}
            alt={image.alt}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default AnimatedCollage;
