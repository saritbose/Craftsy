import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Box, ChevronLeft } from "lucide-react";
import React from "react";

const Register = () => {
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
            <h3 className="font-bold ">New Here?</h3>
            <p className="text-neutral-400 text-xs">
              Have a nice day! Please enter your details.
            </p>
          </div>
          <div className="w-full mb-10">
            <div className="mb-3">
              <p className="text-left ml-2 mb-1 text-xs font-bold">Name</p>
              <Input placeholder="Enter your Name" className="rounded-lg" />
            </div>
            <div className="my-3">
              <p className="text-left ml-2 mb-1 text-xs font-bold">Email</p>
              <Input placeholder="Enter your Email" className="rounded-lg " />
            </div>
            <div className="mb-3">
              <p className="text-left ml-2 mb-1 text-xs font-bold">Password</p>
              <Input placeholder="Enter Password" className="rounded-lg" />
            </div>
            <div>
              <p className="text-left ml-2 mb-1 text-xs font-bold">Role</p>
              <div className="flex flex-row gap-5 justify-center">
                <button className="bg-orange-300 p-2 w-1/2 rounded-2xl font-semibold text-white">
                  Client
                </button>
                <button className="bg-orange-300 p-2 w-1/2 rounded-2xl font-semibold text-white">
                  Freelancer
                </button>
              </div>
            </div>
          </div>
          <Button className="bg-orange-400 w-full rounded-lg py-5 shadow-md hover:bg-orange-600">
            Sign up
          </Button>
          <p className="my-5 text-xs text-neutral-400">
            Don't have an account?
            <span className="text-orange-300"> Sign in</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
