import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Box, ChevronLeft } from "lucide-react";
import React from "react";

const Login = () => {
  return (
    <div className="bg-orange-400">
      <div className="flex gap-2 items-center text-white p-3">
        <ChevronLeft />
        Home page
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen -translate-y-20">
        <div className="flex gap-3 justify-center my-5 text-white">
          <Box />
          Craftsy
        </div>
        <div className="flex flex-col items-center text-center justify-center bg-white w-90 px-10 border-2 rounded-2xl shadow-md">
          <div className="my-7">
            <h3 className="font-bold ">Welcome Back!</h3>
            <p className="text-neutral-400 text-xs">
              We missed you! Please enter your details.
            </p>
          </div>
          <div className="w-full">
            <div className="my-3">
              <p className="text-left ml-2 mb-1 text-xs font-bold">Email</p>
              <Input placeholder="Enter your Email" className="rounded-lg " />
            </div>
            <div className="mb-3">
              <p className="text-left ml-2 mb-1 text-xs font-bold">Password</p>
              <Input placeholder="Enter Password" className="rounded-lg" />
            </div>
            <div className="flex justify-between items-center mb-10 px-3 -translate-y-1">
              <div className="text-xs flex ">
                <Checkbox className="border-2 border-stone-400" />
                <label className="mx-2 text-neutral-400">Remember me</label>
              </div>
              <div className="text-xs text-orange-300">Forgot password?</div>
            </div>
          </div>
          <Button className="bg-orange-400 w-full rounded-lg py-5 shadow-md hover:bg-orange-600">
            Sign in
          </Button>
          <p className="my-5 text-xs text-neutral-400">
            Don't have an account?
            <span className="text-orange-300"> Sign up</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
