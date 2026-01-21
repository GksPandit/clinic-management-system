import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import DoctorDashboard from "./pages/DoctorDashboard";
import ReceptionistDashboard from "./pages/ReceptionistDashboard";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route
        path="/doctor"
        element={
          <ProtectedRoute role="doctor">
            <DoctorDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/receptionist"
        element={
          <ProtectedRoute role="receptionist">
            <ReceptionistDashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
