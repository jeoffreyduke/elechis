"use client";
import React, { useState } from "react";
import DragHandleRoundedIcon from "@mui/icons-material/DragHandleRounded";
import Menu from "./Menu";
import "../../app/styles.css";
import Image from "next/image";
import logo from "../../../public/assets/logo.png";
import Link from "next/link";
import { CloseRounded } from "@mui/icons-material";

const Header = () => {
  const [active, setActive] = useState(false);

  const toggleMenu = () => {
    setActive(!active);
  };

  return (
    <>
      <header className="max-sm:hidden p-2 px-10 relative w-full flex items-center justify-between">
        <section className="text-[0.75rem]">
          <Link href="/reservation">RESERVATION</Link>
        </section>

        <section>
          <Link href="/" className="flex justify-between items-center">
            <div className="relative w-16 h-16">
              <Image src={logo} fill alt="left" />
            </div>
            <b style={{ fontFamily: "Chromate" }} className="text-[1.8rem]">
              Elechi's
            </b>
          </Link>
        </section>
        <section
          onClick={toggleMenu}
          className="gap-4 text-[0.75rem] flex justify-between items-center cursor-pointer z-40"
        >
          <span>
            <Link href="/">HOME</Link>
          </span>
          <span className="no-wrap">
            <Link href="/our-story">OUR STORY</Link>
          </span>
          <span>
            <Link href="/contact">CONTACT</Link>
          </span>
        </section>
      </header>

      <header className="hidden max-sm:flex py-7 px-10 relative w-full items-center justify-between">
        <section className="relative w-10 h-10">
          <Link href="/">
            <Image className="z-30" src={logo} fill alt="left" />
          </Link>
        </section>

        <section
          onClick={toggleMenu}
          className="text-[0.75rem] flex items-center gap-1 cursor-pointer z-40"
          style={{ color: active ? "white" : "rgb(30,24,0)" }}
        >
          {active ? <CloseRounded /> : <DragHandleRoundedIcon />}
          <span>{active ? "CLOSE" : "MENU"}</span>
        </section>
        <Menu active={active} />
      </header>
    </>
  );
};

export default Header;
