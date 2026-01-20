import { useState } from "react";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { db } from "../services/firebase";
import { getNextToken } from "../services/patientService";

function AddPatient() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");

  const handleAddPatient = async () => {
    if (!name || !age || !phone) {
      alert("Fill all fields");
      return;
    }

    try {
      const token = await getNextToken();

      await addDoc(collection(db, "patients"), {
        name,
        age,
        phone,
        token,
        createdAt: Timestamp.now(),
      });

      alert(`Patient registered successfully. Token No: ${token}`);

      setName("");
      setAge("");
      setPhone("");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="form-box">
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <input
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button onClick={handleAddPatient}>Generate Token</button>
    </div>
  );
}

export default AddPatient;
