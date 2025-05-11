import axios from "axios";
import React, { useEffect, useState } from "react";

const Profile = () => {
  const [user, setUser] = useState(null);
  const role = localStorage.getItem("role");
  const token = localStorage.getItem("token");
  const backend_url = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`${backend_url}/api/user/me`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, []);

  return (
    <div className="bg-orange-400 h-[calc(100vh-1px)] overflow-hidden ">
      <div className="flex flex-col items-center rounded-lg border-1 border-orange-500 shadow-lg m-6 p-3 h-[94%] overflow-hidden font-mono bg-orange-400">
        <h1 className="text-4xl font-bold mt-4 mb-2">Profile Page</h1>
        <p className="text-md ">Welcome to {user.name} profile!</p>
        <div className="my-3 flex flex-col items-center">
          <div className="bg-black rounded-full w-15 h-15 mb-2"></div>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
        <div className="border-2 w-[90%] p-5 my-2">
          {role === "Freelancer" ? (
            <div className="flex flex-col items-center">
              {/* Freelancer */}
              <p className="">Title </p>
              <p className="">About me </p>
              <div className="">Expected rate</div>
              <div className="">Level </div>
              <p className="">Skills </p>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              {/* Client */}
              <p className="">Company Name </p>

              <p className="">Description </p>
              <p className="">Company Size </p>
              <p className="">Payment Method Added </p>
            </div>
          )}
        </div>
        <div className="flex w-[90%] gap-50 px-2 text-nowrap">
          <div className="hover:text-white cursor-pointer">
            Change Password{" "}
          </div>
          <div className="hover:text-white cursor-pointer">Save </div>
        </div>

        <div className="flex flex-col items-center m-6 p-3 h-screen font-mono ">
          <p className="text-md hover:text-popover">
            You can add more features in the future.
          </p>
          <p className="text-md hover:text-popover">
            Thank you for using our application!
          </p>
          <p className="text-md hover:text-popover">Have a great day!</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
