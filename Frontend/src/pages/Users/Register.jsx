import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { Box, ChevronLeft } from "lucide-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();
  const backend_url = import.meta.env.VITE_BACKEND_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { name, email, password, role };
    try {
      // Registering
      const res = await axios.post(
        `${backend_url}/api/user/register`,
        formData
      );
      toast.success("Register successful!"); // Registered Notification
      const role = res.data.role;
      // Setting data in local storage for easy access
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", role);
      try {
        // Creating a random profile colour
        const profileBg = async () => {
          const codes = "0123456789abcdef";
          let bgColor = "#";
          for (let i = 0; i < 6; i++) {
            bgColor += codes[Math.floor(Math.random() * 16)];
          }
          const bg = await axios.post(
            `${backend_url}/api/profile/updateprofilecolor`,
            { bgColor },
            {
              headers: { Authorization: `Bearer ${res.data.token}` },
            }
          );
        };
        profileBg();
      } catch (error) {
        console.error(error);
      }
      // Checking role to determine dashboards
      if (role === "Client") {
        navigate("/client/dashboard");
      } else {
        navigate("/freelancer/dashboard");
      }
    } catch (error) {
      if (error.response) {
        const status = error.response.status;
        if (status === 400) {
          toast.error("Already registered");
        } else {
          toast.error("Something went wrong.Try again later");
        }
      } else {
        toast.error("Network error. Please check your connection.");
      }
      console.error(error);
    }
  };

  return (
    <div className="bg-orange-400">
      <Link to={"/"} className="flex gap-2 items-center text-white p-3">
        <ChevronLeft />
        Home page
      </Link>
      <div className="flex flex-col items-center justify-center min-h-screen pb-32">
        <Link
          to={"/"}
          className="flex gap-3 justify-center my-5 text-white font-mono font-bold"
        >
          <Box />
          Craftsy
        </Link>
        <div className="flex flex-col items-center text-center justify-center bg-white/30 shadow-lg backdrop-blur-lg border border-white/10 w-90 px-10 rounded-2xl">
          <div className="my-7">
            <h3 className="font-bold font-mono">New Here?</h3>
            <p className="text-white text-xs font-mono">
              Have a nice day! Please enter your details.
            </p>
          </div>
          <div className="w-full mb-10">
            <div className="mb-3">
              <p className="text-left ml-2 mb-1 text-xs font-mono text-white">
                Name
              </p>
              <Input
                placeholder="Enter your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="rounded-lg text-black cursor-pointer"
              />
            </div>
            <div className="my-3">
              <p className="text-left ml-2 mb-1 text-xs font-mono text-white">
                Email
              </p>
              <Input
                placeholder="Enter your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-lg text-black cursor-pointer"
              />
            </div>
            <div className="mb-3">
              <p className="text-left ml-2 mb-1 text-xs font-mono text-white">
                Password
              </p>
              <Input
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="rounded-lg text-black cursor-pointer"
              />
            </div>
            <div>
              <p className="text-left ml-2 mb-1 text-xs font-mono text-white">
                Role
              </p>
              <div className="flex flex-row gap-5 justify-center">
                <button
                  onClick={() => setRole("Client")}
                  disabled={role === "Client"}
                  className={`bg-orange-300 p-2 w-1/2 cursor-pointer rounded-2xl font-semibold font-mono text-white ${
                    role === "Client" ? "bg-orange-400" : "bg-orange-200"
                  }`}
                >
                  Client
                </button>
                <button
                  onClick={() => setRole("Freelancer")}
                  disabled={role === "Freelancer"}
                  className={`bg-orange-300 p-2 w-1/2 cursor-pointer rounded-2xl font-semibold font-mono text-white ${
                    role === "Freelancer" ? "bg-orange-400" : "bg-orange-200"
                  }`}
                >
                  Freelancer
                </button>
              </div>
            </div>
          </div>
          <Button
            onClick={handleSubmit}
            className="bg-orange-400 w-full cursor-pointer rounded-lg py-5 shadow-md hover:bg-orange-600"
          >
            Sign up
          </Button>
          <p className="my-5 text-xs text-white font-mono">
            Don't have an account?
            <Link to={"/login"} className="text-orange-500 cursor-pointer">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
