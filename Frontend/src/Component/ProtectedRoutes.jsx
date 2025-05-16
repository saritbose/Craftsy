import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

// Routes protected by roles

const ProtectedRoutes = ({ children, requiredRole }) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  // Checking authentication and required role for accessing a page
  if (!token || role !== requiredRole) {
    toast.error("You dont have the required role and token.");
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoutes;
