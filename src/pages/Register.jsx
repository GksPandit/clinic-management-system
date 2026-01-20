import { useState } from "react";
import { registerUser } from "../services/authService";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("doctor");

  const handleRegister = async () => {
    try {
      await registerUser(email, password, role);
      alert("User registered successfully");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div>
      <h2>Register</h2>

      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <select onChange={(e) => setRole(e.target.value)}>
        <option value="doctor">Doctor</option>
        <option value="receptionist">Receptionist</option>
      </select>

      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Register;
