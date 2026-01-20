import { useState } from "react";
import { uploadToCloudinary } from "../services/cloudinaryService";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { db } from "../services/firebase";
import { addLog } from "../services/logService";

function ReportUpload({ patientId, role }) {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!file) return alert("Select a file");

    setLoading(true);
    try {
      const url = await uploadToCloudinary(file);

      await addDoc(collection(db, "reports"), {
        patientId,
        fileUrl: url,
        uploadedBy: role,
        createdAt: Timestamp.now(),
      });

      await addLog(
        "UPLOAD_REPORT",
        `Report uploaded for patient ${patientId}`,
        role
      );

      alert("Report uploaded successfully");
      setFile(null);
    } catch (err) {
      alert(err.message);
    }
    setLoading(false);
  };

  return (
    <div style={{ border: "1px dashed gray", padding: 10 }}>
      <input
        type="file"
        accept="image/*,.pdf"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <button onClick={handleUpload} disabled={loading}>
        {loading ? "Uploading..." : "Upload Report"}
      </button>
    </div>
  );
}

export default ReportUpload;
