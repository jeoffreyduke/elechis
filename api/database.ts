import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebaseConfig";
import { Dayjs } from "dayjs";
import { generateDate, generateTime } from "./helperFunctions";

export function updateItem(id: any, payload: any) {
  const itemRef = doc(db, "menu", id);
  updateDoc(itemRef, payload);
}

export function deleteItem(id: any, collection: string) {
  const itemRef = doc(db, collection, id);
  deleteDoc(itemRef);
}

export function addMenuItem(
  name: string,
  title: string,
  desc: string,
  price: string,
  category: string,
  image: string
) {
  const menuRef = collection(db, "menu");

  addDoc(menuRef, {
    id: "",
    name,
    title,
    desc,
    price,
    category,
    image,
  }).then((item: any) => {
    const itemRef = doc(db, "menu", item.id);

    updateDoc(itemRef, {
      id: item.id,
    });
  });
}

export function addReservation(
  name: string,
  phoneNumber: string,
  email: string,
  date: Dayjs,
  time: Dayjs,
  partySize: string,
  request: string
) {
  const reservationsRef = collection(db, "reservations");

  addDoc(reservationsRef, {
    id: "",
    name,
    phoneNumber,
    email,
    date: generateDate(date),
    time: generateTime(time),
    partySize,
    request,
  }).then((reservation: any) => {
    const reservationRef = doc(db, "reservations", reservation.id);

    updateDoc(reservationRef, {
      id: reservation.id,
    });
  });
}
