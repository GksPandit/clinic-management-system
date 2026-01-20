import { useState } from "react";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { db } from "../services/firebase";

function PrescriptionForm({ patient }) {
  const [diagnosis, setDiagnosis] = useState("");
  const [medicines, setMedicines] = useState("");

  const savePrescription = async () => {
    if (!diagnosis || !medicines) return alert("Fill all fields");

    await addDoc(collection(db, "prescriptions"), {
      patientId: patient.id,
      diagnosis,
      medicines,
      createdAt: Timestamp.now(),
    });

    alert("Prescription saved");
    setDiagnosis(""); setMedicines("");
  };

  return (
    <div className="form-box">
      <h4>Prescription for {patient.name}</h4>
      <textarea placeholder="Diagnosis"
        value={diagnosis} onChange={e=>setDiagnosis(e.target.value)} />
      <textarea placeholder="Medicines"
        value={medicines} onChange={e=>setMedicines(e.target.value)} />
      <button onClick={savePrescription}>Save</button>
    </div>
  );
}
export default PrescriptionForm;
