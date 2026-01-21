import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../services/firebase";
import BillingForm from "./BillingForm";

function ReceptionistPatientList() {
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);

  useEffect(() => {
    async function loadPatients() {
      const snap = await getDocs(collection(db, "patients"));
      setPatients(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    }
    loadPatients();
  }, []);

  return (
    <div>
      <h2>Patient List (Billing)</h2>

      {patients.map(p => (
        <div key={p.id} className="patient-card">
          <p><b>Token:</b> {p.token}</p>
          <p><b>Name:</b> {p.name}</p>

          <button onClick={() => setSelectedPatient(p)}>
            Generate Bill
          </button>
        </div>
      ))}

      {selectedPatient && <BillingForm patient={selectedPatient} />}
    </div>
  );
}

export default ReceptionistPatientList;
