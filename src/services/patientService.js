import { db } from "./firebase";
import {
  collection,
  getDocs,
  query,
  orderBy,
  limit,
} from "firebase/firestore";

export const getNextToken = async () => {
  const q = query(
    collection(db, "patients"),
    orderBy("token", "desc"),
    limit(1)
  );

  const snapshot = await getDocs(q);

  if (snapshot.empty) {
    return 1; // first patient
  }

  const lastToken = snapshot.docs[0].data().token;
  return lastToken + 1;
};
