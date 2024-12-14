import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[rgb(233,186,0)] h-fit mt-16 p-16 max-sm:p-8">
      <section className="flex max-sm:flex-col max-sm:gap-8 justify-between sm:items-center text-[12px] max-sm:text-[10px]">
        <div className="flex flex-col gap-2">
          <div className="mr-2">© ELECHI'S PLACE 2024</div>
          <div className="cursor-pointer">1223 PROSPECTIVE ROAD, SUITE 250</div>
          <div className="cursor-pointer">MEMPHIS, TN 37051</div>
          <div className="mt-4">OPENING HOURS</div>
          <div>MONDAY - SATURDAY: 11:30AM - 10:30PM</div>
        </div>

        <div className="flex flex-col gap-2">
          <Link href="/terms">
            <div className="cursor-pointer">TERMS OF SERVICE</div>
          </Link>
          <Link href="/privacy">
            <div className="cursor-pointer">PRIVACY POLICY</div>
          </Link>
          <div className="cursor-pointer">GIFT CARDS</div>
        </div>

        <div className="flex flex-col gap-2">
          <div>IG @ELECHISRESTAURANT</div>
          <div>FB @ELECHISRESTAURANT</div>
          <div>
            <a href="tel:9018008000">(901)-800-8000</a>
          </div>
          <div>
            <a href="mailto:help@elechis.com">HELP@ELECHIS.COM</a>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
