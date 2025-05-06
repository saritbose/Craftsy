import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { Box, ChevronLeft } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const backend_url = import.meta.env.VITE_BACKEND_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { email, password };
    try {
      const res = await axios.post(`${backend_url}/api/user/login`, formData);
      localStorage.setItem("token", res.data.token);
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <div className="bg-orange-400">
      <Link to={"/"} className="flex gap-2 items-center text-white p-3">
        <ChevronLeft />
        Home page
      </Link>
      <div className="flex flex-col items-center justify-center min-h-screen pb-32">
        <Link to={"/"} className="flex gap-3 justify-center my-5 text-white">
          <Box />
          Craftsy
        </Link>
        <div className="flex flex-col items-center text-center justify-center bg-white/30 shadow-lg backdrop-blur-lg border border-white/10 w-90 px-10 rounded-2xl">
          <div className="my-7">
            <h3 className="font-bold ">Welcome Back!</h3>
            <p className="text-white text-xs">
              We missed you! Please enter your details.
            </p>
          </div>
          <div className="w-full">
            <div className="my-3">
              <p className="text-left ml-2 mb-1 text-xs font-bold">Email</p>
              <Input
                placeholder="Enter your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-lg text-white"
              />
            </div>
            <div className="mb-3">
              <p className="text-left ml-2 mb-1 text-xs font-bold">Password</p>
              <Input
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="rounded-lg text-white"
              />
            </div>
            <div className="flex justify-between items-center mb-10 px-3 -translate-y-1">
              <div className="text-xs flex ">
                <Checkbox className="border-2 border-orange-400" />
                <label className="mx-2 text-white">Remember me</label>
              </div>
              <div className="text-xs text-orange-500">Forgot password?</div>
            </div>
          </div>
          <Button
            onClick={handleSubmit}
            className="bg-orange-400 w-full rounded-lg py-5 shadow-md hover:bg-orange-600"
          >
            Sign in
          </Button>
          <p className="my-5 text-xs text-white">
            Don't have an account?
            <Link to={"/register"} className="text-orange-500">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
