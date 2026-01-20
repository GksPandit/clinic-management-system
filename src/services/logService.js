import { db } from "./firebase";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { auth } from "./firebase";

export const addLog = async (action, description, role) => {
  const user = auth.currentUser;

  if (!user) return;

  await addDoc(collection(db, "logs"), {
    userId: user.uid,
    role,
    action,
    description,
    timestamp: Timestamp.now(),
  });
};
