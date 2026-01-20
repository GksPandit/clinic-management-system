import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

export const getAllPatients = async () => {
  const snapshot = await getDocs(collection(db, "patients"));
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};
