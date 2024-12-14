// components/Menu.tsx
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface Props {
  active: boolean;
}

const Menu: React.FC<Props> = ({ active }) => {
  const menuVariants = {
    open: {
      opacity: 1,
      height: "100vh",
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
    closed: {
      opacity: 0,
      height: "0px",
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <motion.nav
      className="absolute top-0 left-0 w-full h-full z-30 bg-[rgba(30,24,0,0.8)]"
      initial={false}
      animate={active ? "open" : "closed"}
      variants={menuVariants}
    >
      <div className="flex flex-col items-center justify-center h-full">
        <span className="text-white mb-4">
          <Link href="/">HOME</Link>
        </span>
        <span className="text-white mb-4 no-wrap">
          <Link href="/our-story">OUR STORY</Link>
        </span>
        <span className="text-white mb-4">
          <Link href="/contact">CONTACT</Link>
        </span>
        <span className="text-white mb-4">
          <Link href="/reservation">RESERVATION</Link>
        </span>
      </div>
    </motion.nav>
  );
};

export default Menu;
