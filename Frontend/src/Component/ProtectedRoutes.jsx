import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

const ProtectedRoutes = ({ children, requiredRole }) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  if (!token || role !== requiredRole) {
    toast.error("You dont have the required role and token.");
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoutes;
