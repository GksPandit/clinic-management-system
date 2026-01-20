import { useEffect, useState } from "react";
import { getAllPatients } from "../services/doctorService";

function PatientList() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    async function load() {
      const data = await getAllPatients();
      setPatients(data);
    }
    load();
  }, []);

  if (patients.length === 0) {
    return <p>No patients found (add from receptionist).</p>;
  }

  return (
    <div>
      {patients.map((p) => (
        <div key={p.id} className="patient-card">
          <p>Token: {p.token}</p>
          <p>Name: {p.name}</p>
        </div>
      ))}
    </div>
  );
}

export default PatientList;
