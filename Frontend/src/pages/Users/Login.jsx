import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { Box, ChevronLeft } from "lucide-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const backend_url = import.meta.env.VITE_BACKEND_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { email, password };
    try {
      const res = await axios.post(`${backend_url}/api/user/login`, formData);
      toast.success("Login successful!");
      const role = res.data.role;
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", role);
      if (role === "Client") {
        navigate("/client/dashboard");
      } else {
        navigate("/freelancer/dashboard");
      }
    } catch (error) {
      if (error.response) {
        const status = error.response.status;
        if (status === 400 || status === 404) {
          toast.error("Invalid email or password");
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
            <h3 className="font-bold font-mono">Welcome Back!</h3>
            <p className="text-white font-mono text-xs">
              We missed you! Please enter your details.
            </p>
          </div>
          <div className="w-full">
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
            <div className="flex justify-between items-center mb-10 px-3 -translate-y-1">
              <div className="text-xs flex ">
                <Checkbox className="border-2 border-orange-400 cursor-pointer" />
                <label className="mx-2 text-white">Remember me</label>
              </div>
              <div className="text-xs text-orange-500 cursor-pointer">
                Forgot password?
              </div>
            </div>
          </div>
          <Button
            onClick={handleSubmit}
            className="bg-orange-400 w-full cursor-pointer rounded-lg py-5 shadow-md hover:bg-orange-600"
          >
            Sign in
          </Button>
          <p className="my-5 text-xs text-white font-mono">
            Don't have an account?
            <Link to={"/register"} className="text-orange-500 cursor-pointer">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
