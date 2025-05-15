import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const PublicProfile = () => {
  const { id } = useParams();
  const [user, setUser] = useState("");
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const backend_url = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await axios.get(
          `${backend_url}/api/profile/userprofile/${id}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setUser(user.data);
      } catch (error) {
        console.error("Failed to fetch data: ", error);
      }
    };
    fetchUser();
  }, []);

  return (
    <div className="flex justify-center bg-orange-400 h-full min-h-screen">
      <div className="flex flex-col items-center rounded-lg border-1 border-orange-500 shadow-lg m-6 p-3 w-113.5 font-mono bg-orange-400/80 h-full">
        <h1 className="text-4xl font-bold mt-4 mb-2">Profile Page</h1>
        <p className="text-md ">Welcome to {user.name}'s profile!</p>
        <div className="my-3 flex flex-col items-center">
          <div className="bg-black rounded-full w-15 h-15 mb-2"></div>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
        <div className="flex flex-col items-end">
          <div className="flex flex-col items-center text-center border-2 shadow-lg border-orange-500 w-sm p-5 my-2">
            {user.profile ? (
              <>
                <p>
                  <span className="font-semibold">Title: </span>
                  {user.profile?.title}
                </p>
                <p className="font-semibold mt-2">About me </p>
                <p className="text-sm">{user.profile?.aboutMe}</p>
                <p className="mt-2">
                  <span className="font-semibold">Expected hourly rate:</span>
                  {user.profile?.expectedRate}
                </p>
                <p>
                  <span className="font-semibold">Experience: </span>
                  {user.profile?.experience}
                </p>
                <p className="font-semibold mt-2">Skills </p>
                <p>{user.profile?.skills + "."}</p>
              </>
            ) : (
              <>
                <p>Title: </p>
                <p>About me </p>
                <p>Expected hourly rate: </p>
                <p>Experience: </p>
                <p>Skills </p>
              </>
            )}
          </div>
        </div>
        <div className="flex flex-col items-center text-center text-nowrap m-6 p-3 font-mono ">
          <p className="text-md hover:text-popover">
            We will add more features in the future.
          </p>
          <p className="text-md hover:text-popover">
            Thank you for using our application!
          </p>
          <p className="text-md hover:text-popover">Have a great day!</p>
        </div>
        <div
          onClick={() => navigate(-1)}
          className="text-sm cursor-pointer hover:text-white"
        >
          Go Back
        </div>
      </div>
    </div>
  );
};

export default PublicProfile;
