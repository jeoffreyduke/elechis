import React, { useState } from "react";
import { MenuItem as Data } from "../data";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import { deleteItem } from "../../../../api/database";
import { Modal } from "@mui/material";
import Image from "next/image";

interface Props {
  data: Data;
  admin: boolean;
  open?: (id: string) => void;
}

const MenuItem: React.FC<Props> = ({
  data: { name, title, desc, price, id, image },
  admin,
  open,
}) => {
  const [modalIsActive, setModalIsActive] = useState(false);

  const trashItem = () => {
    deleteItem(id, "menu");
    setModalIsActive(false);
  };

  const selectItem = () => {
    open && open(id);
  };

  return (
    <main className="border border-[rgb(30,24,0)] w-[25vw] h-[50vh] max-sm:w-[80vw] max-sm:h-[42vh] cursor-pointer">
      <section className="h-[85%] p-4 overflow-y-scroll no-scrollbar">
        <div className="flex justify-between">
          <p className="mb-3 text-[1.2rem] font-bold" onClick={selectItem}>
            {name}
          </p>
          {admin && (
            <DeleteOutlineRoundedIcon
              className="hover:text-[red] z-20"
              onClick={() => setModalIsActive(true)}
            />
          )}
          <Modal
            open={modalIsActive}
            onClose={() => setModalIsActive(false)}
            className="flex flex-col justify-center items-center"
          >
            <main className="bg-[rgb(233,186,0)] max-sm:w-[80%] p-8">
              <section>Are you sure you want to delete "{name}"?</section>
              <section className="flex justify-between">
                <button
                  className="bg-[rgb(30,24,0)] text-[rgb(233,186,0)] mx-5 rounded-md h-[2.2rem] w-full mt-4"
                  onClick={trashItem}
                >
                  Yes
                </button>
                <button
                  className="bg-[rgb(30,24,0)] text-[rgb(233,186,0)] mx-5 rounded-md h-[2.2rem] w-full mt-4"
                  onClick={() => setModalIsActive(false)}
                >
                  No
                </button>
              </section>
            </main>
          </Modal>
        </div>

        <div
          className={`relative mb-4 ${
            image ? "" : "border border-black"
          } h-36 max-sm:h-32 w-full`}
          onClick={selectItem}
        >
          {image && (
            <Image
              src={image}
              objectFit="cover"
              layout="fill"
              fill
              alt="menu"
            />
          )}
        </div>

        <p className="mb-2 text-[0.8rem]" onClick={selectItem}>
          <b>{title}</b>{" "}
        </p>

        <div className="relative text-[0.8rem]" onClick={selectItem}>
          {desc}
        </div>
      </section>
      <section
        className="h-[15%] flex border-t border-[rgb(30,24,0)] px-4"
        onClick={selectItem}
      >
        <div className="w-[65%] flex items-center border-r border-[rgb(30,24,0)] text-[rgb(233,186,0)]">
          PRICE{" "}
          <span className="ml-2 text-[rgb(30,24,0)] text-[12px]">
            (Price can vary)
          </span>
        </div>
        <div className="flex items-center px-4">{price}</div>
      </section>
    </main>
  );
};

export default MenuItem;
