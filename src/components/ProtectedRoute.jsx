import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function ProtectedRoute({ children, allowedRole }) {
  const { user, role } = useAuth();

  if (!user) return <Navigate to="/login" />;

  if (allowedRole && role !== allowedRole)
    return <h2>Access Denied</h2>;

  return children;
}

export default ProtectedRoute;
