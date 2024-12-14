"use client";
import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MenuItem from "./components/MenuItem";
import { categories } from "./data";
import Image from "next/image";
import rice from "../../../public/assets/saucerice.jpg";
import { MenuItem as MenuItemProp } from "./data";
import { collection } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { db } from "../../../firebaseConfig";

const Menu = () => {
  const menuRef = collection(db, "menu");
  const [menu, loading] = useCollectionData(menuRef);

  const [query, setQuery] = useState("");

  const filterCategory = (category: string, item: MenuItemProp) => {
    return category.toLowerCase() === item.category.toLowerCase();
  };

  const itemChecker = (item: MenuItemProp) => {
    if (
      item.name.toLowerCase().includes(query.toLowerCase()) ||
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.desc.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
    )
      return item;
  };

  const search = () => {
    if (menu === undefined) return [];
    return menu.filter((item: any) => itemChecker(item));
  };

  return (
    <main className="h-[100vh]">
      <Header />
      <section className="w-100vw flex justify-center">
        <div className="relative flex justify-center w-[90vw] h-[50vh] max-sm:h-[30vh]">
          <Image
            style={{ filter: "brightness(0.8) contrast(1.1) opacity: 0.7" }}
            src={rice}
            objectFit="cover"
            layout="fill"
            fill
            alt="menu"
          />

          <div className="absolute bottom-8 w-[60vw] h-[10vh] max-sm:h-[10vh] max-sm:w-[85vw] max-sm:text-[1.2rem] flex justify-center items-center text-center p-3 bg-[rgba(30,24,0,0.45)] text-[3rem] text-white">
            <p>Our Menu</p>
          </div>
        </div>
      </section>

      <input
        className="h-[3rem] w-[30%] max-sm:w-[85vw] bg-transparent border border-[rgb(34,20,0)] mt-8 ml-[4rem] p-4 max-sm:ml-8 outline-[rgb(34,20,0)] text-[rgb(34,20,0)] placeholder-[rgba(34,20,0,0.69)] caret-[rgb(34,20,0)]"
        placeholder="Search our menu"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {!loading && menu && menu.length > 0 && (
        <>
          {query.length > 0 && (
            <section className="p-16 max-sm:p-4">
              <p className="bg-[rgb(233,186,0)] w-fit mb-[1rem] p-3 pr-[3rem] text-[1.5rem]">
                <b>
                  Result{search().length > 1 && "s"} for "{query}"
                </b>
              </p>
              <div className="flex flex-wrap gap-10">
                {search().map((item: any) => (
                  <MenuItem data={item} admin={false} />
                ))}
              </div>
            </section>
          )}

          {categories.map((category: string) => {
            return (
              <section className="p-[4rem] max-sm:p-8">
                <p className="bg-[rgb(233,186,0)] w-fit mb-[1rem] p-3 pr-[3rem] text-[1.5rem]">
                  <b>{category.toUpperCase()}</b>
                </p>
                <div className="flex flex-wrap gap-10">
                  {menu
                    .filter((item: any) => filterCategory(category, item))
                    .map((item: any) => (
                      <MenuItem data={item} admin={false} />
                    ))}
                </div>
              </section>
            );
          })}
        </>
      )}
      <Footer />
    </main>
  );
};

export default Menu;
