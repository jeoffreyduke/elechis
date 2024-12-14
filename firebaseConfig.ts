import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBTEJN3w6pLkRB9Huj8bDDh5bKtAYRU4q0",
  authDomain: "localhost",
  projectId: "elechis-restaurant",
  storageBucket: "elechis-restaurant.appspot.com",
  messagingSenderId: "1014693999766",
  appId: "1:1014693999766:web:07b6364e76aad96a2f3eb7",
  measurementId: "G-8J1C6KL8EL",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const store = getStorage(app);
