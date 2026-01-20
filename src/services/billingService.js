import { db } from "./firebase";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { addLog } from "./logService";

export const createBill = async (billData) => {
  await addDoc(collection(db, "bills"), {
    ...billData,
    createdAt: Timestamp.now(),
  });

  await addLog(
    "CREATE_BILL",
    `Bill generated for patient ID ${billData.patientId}`,
    "receptionist"
  );
};
