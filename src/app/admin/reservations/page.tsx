"use client";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import { collection } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../../../../firebaseConfig";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { CloseRounded } from "@mui/icons-material";
import { deleteItem } from "../../../../api/database";
import { Modal } from "@mui/material";

const Reservations = () => {
  const reservationsRef = collection(db, "reservations");
  const [reservations, loading] = useCollectionData(reservationsRef);

  const [modalIsActive, setModalIsActive] = useState(false);
  const [activeId, setActiveId] = useState("");

  const trashItem = () => {
    deleteItem(activeId, "reservations");
    setModalIsActive(false);
  };

  return (
    <main className="h-[100vh] overflow-hidden">
      <Header />
      <section className="h-[75vh] max-sm:h-[68vh] overflow-y-auto max-sm:overflow-scroll p-8 max-sm:p-4">
        <main>
          <div className="flex gap-8 max-sm:gap-4">
            <div className="w-[15%] max-sm:min-w-[5rem] sm:overflow-x-auto no-scrollbar font-bold text-[0.8rem] whitespace-nowrap">
              Name
            </div>
            <div className="w-[15%] max-sm:min-w-[5rem] sm:overflow-x-auto no-scrollbar font-bold text-[0.8rem] whitespace-nowrap">
              Party Size
            </div>
            <div className="w-[15%] max-sm:min-w-[5rem] sm:overflow-x-auto no-scrollbar font-bold text-[0.8rem] whitespace-nowrap">
              Time
            </div>
            <div className="w-[15%] max-sm:min-w-[5rem] sm:overflow-x-auto no-scrollbar font-bold text-[0.8rem] whitespace-nowrap">
              Date
            </div>
            <div className="w-[15%] max-sm:min-w-[5rem] sm:overflow-x-auto no-scrollbar font-bold text-[0.8rem] whitespace-nowrap">
              Email
            </div>
            <div className="w-[15%] max-sm:min-w-[5rem] sm:overflow-x-auto no-scrollbar font-bold text-[0.8rem] whitespace-nowrap">
              Phone Number
            </div>
            <div className="w-[15%] max-sm:min-w-[5rem] sm:overflow-x-auto no-scrollbar font-bold text-[0.8rem] whitespace-nowrap">
              Request
            </div>
            <div className="w-[15%] max-sm:min-w-[5rem] sm:overflow-x-auto no-scrollbar font-bold text-[0.8rem] whitespace-nowrap">
              Action
            </div>
          </div>
          {!loading &&
            reservations?.map((reservation: any) => (
              <>
                <div className="flex justify-between gap-8 max-sm:gap-4">
                  <div className="w-[15%] max-sm:min-w-[5rem] my-2 overflow-x-auto no-scrollbar text-[0.8rem] whitespace-nowrap">
                    {reservation.name}
                  </div>
                  <div className="w-[15%] max-sm:min-w-[5rem] my-2 overflow-x-auto no-scrollbar text-[0.8rem] whitespace-nowrap">
                    {reservation.partySize}
                  </div>
                  <div className="w-[15%] max-sm:min-w-[5rem] my-2 overflow-x-auto no-scrollbar text-[0.8rem] whitespace-nowrap">
                    {reservation.time}
                  </div>
                  <div className="w-[15%] max-sm:min-w-[5rem] my-2 overflow-x-auto no-scrollbar text-[0.8rem] whitespace-nowrap">
                    {reservation.date}
                  </div>
                  <div className="w-[15%] max-sm:min-w-[5rem] my-2 overflow-x-auto no-scrollbar text-[0.8rem] whitespace-nowrap">
                    {reservation.email}
                  </div>
                  <div className="w-[15%] max-sm:min-w-[5rem] my-2 overflow-x-auto no-scrollbar text-[0.8rem] whitespace-nowrap">
                    {reservation.phoneNumber}
                  </div>
                  <div className="w-[15%] max-sm:min-w-[5rem] my-2 overflow-x-auto no-scrollbar text-[0.8rem] whitespace-nowrap">
                    {reservation.request}
                  </div>
                  <div
                    data-twe-target="tooltip"
                    className="w-[15%] max-sm:min-w-[5rem] my-2 overflow-x-auto no-scrollbar text-[0.8rem] whitespace-nowrap text-[red] cursor-pointer"
                    onClick={() => {
                      setActiveId(reservation.id);
                      setModalIsActive(true);
                    }}
                  >
                    <a data-twe-toggle="tooltip" title="Close Reservation">
                      <CloseRounded />
                    </a>
                  </div>
                </div>
              </>
            ))}
        </main>

        <Modal
          open={modalIsActive}
          onClose={() => setModalIsActive(false)}
          className="flex flex-col justify-center items-center"
        >
          <main className="bg-[rgb(233,186,0)] max-sm:w-[80%] p-8">
            <section>Are you sure you want to close this reservation?</section>
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
      </section>

      <Footer />
    </main>
  );
};

export default Reservations;
