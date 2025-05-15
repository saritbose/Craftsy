import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Users/Login";
import Register from "./pages/Users/Register";
import FreelancerDashboard from "./pages/Freelancer Dashboard/FreelancerDashboard";
import ProtectedRoutes from "./Component/ProtectedRoutes";
import JobDetails from "./pages/JobDetails";
import ClientDashboard from "./pages/Client Dashboard/ClientDashboard";
import Profile from "./pages/Users/Profiles/Profile";
import PublicProfile from "./pages/Users/Profiles/PublicProfile";
import NotFound from "./pages/Error Page/NotFound";
import PostAJob from "./pages/PostAJob";
import { ToastContainer } from "react-toastify";

export default function App() {
  return (
    <>
      <ToastContainer />
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
          path="/freelancer/job/:id"
          element={
            <ProtectedRoutes requiredRole="Freelancer">
              <JobDetails />
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
        <Route
          path="/client/post-job"
          element={
            <ProtectedRoutes requiredRole="Client">
              <PostAJob />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/client/edit-job/:id"
          element={
            <ProtectedRoutes requiredRole="Client">
              <PostAJob />
            </ProtectedRoutes>
          }
        />
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit-profile/:profileId" element={<Profile />} />
        <Route path="/profile/:id" element={<PublicProfile />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}
