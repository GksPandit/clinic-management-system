import { useState } from "react";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { db } from "../services/firebase";

function BillingForm({ patient }) {
  const [amount, setAmount] = useState("");

  const handleBill = async () => {
    if (!amount) return alert("Enter amount");

    await addDoc(collection(db, "bills"), {
      patientId: patient.id,
      patientName: patient.name,
      token: patient.token,
      amount,
      createdAt: Timestamp.now(),
    });

    alert("Bill generated successfully");
    setAmount("");
  };

  return (
  <div className="form-box">
      <h3>Billing for {patient.name}</h3>
      <input
        placeholder="Amount"
        value={amount}
        onChange={e => setAmount(e.target.value)}
      />
      <button onClick={handleBill}>Confirm Bill</button>
    </div>
  );
}

export default BillingForm;
