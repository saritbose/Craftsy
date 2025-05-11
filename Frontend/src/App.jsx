import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import FreelancerDashboard from "./pages/FreelancerDashboard";
import ClientDashboard from "./pages/ClientDashboard";
import NotFound from "./pages/NotFound";
import PostJob from "./pages/PostAJob";
import ProtectedRoutes from "./Component/ProtectedRoutes";
import JobDetails from "./pages/JobDetails";
import Profile from "./pages/Profile";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/freelancer/dashboard"
        element={
          <ProtectedRoutes requiredRole="Freelancer">
            <FreelancerDashboard />
          </ProtectedRoutes>
        }
      />
      <Route
        path="/client/dashboard"
        element={
          <ProtectedRoutes requiredRole="Client">
            <ClientDashboard />
          </ProtectedRoutes>
        }
      />
      <Route path="/client/post-job" element={<PostJob />} /> // Client can post
      a job
      <Route path="/freelancer/job/:id" element={<JobDetails />} /> //
      Freelancer can view job details
      <Route path="/profile" element={<Profile />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}
