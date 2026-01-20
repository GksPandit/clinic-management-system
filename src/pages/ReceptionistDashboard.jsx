import Navbar from "../components/Navbar";
import AddPatient from "./AddPatient";
import ReceptionistPatientList from "../components/ReceptionistPatientList";

function ReceptionistDashboard() {
  return (
   <>
  <Navbar />
  <div className="container">
    <h1>Receptionist Dashboard</h1>

    <AddPatient />
    <hr />
    <ReceptionistPatientList />
  </div>
</>

  );
}

export default ReceptionistDashboard;
