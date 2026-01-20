import Navbar from "../components/Navbar";
import PatientList from "../components/PatientList";

function DoctorDashboard() {
  return (
 <>
  <Navbar />
  <div className="container">
    <h1>Doctor Dashboard</h1>
    <PatientList />
  </div>
</>

  );
}

export default DoctorDashboard;
