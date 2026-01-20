import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCjpPnHhQBZaZeDTioz5b63kpivGeMPbOE",
  authDomain: "clinic-management-system-b379f.firebaseapp.com",
  projectId: "clinic-management-system-b379f",
  storageBucket: "clinic-management-system-b379f.firebasestorage.app",
  messagingSenderId: "154930432010",
  appId: "1:154930432010:web:a75533c488c420e8b4f7f3"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
