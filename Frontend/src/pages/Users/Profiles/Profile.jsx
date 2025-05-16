import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProfileDetails from "./Components/ProfileDetails";
import { toast } from "react-toastify";

// Profile for Freelancer, currently not available for Clients

const Profile = () => {
  const [user, setUser] = useState("");
  const [profile, setProfile] = useState("");
  const navigate = useNavigate();
  const role = localStorage.getItem("role");
  const token = localStorage.getItem("token");
  const backend_url = import.meta.env.VITE_BACKEND_URL;
  const { profileId } = useParams();
  const isEditMode = Boolean(profileId); // Checking if On Edit Mode or not

  const handleSubmit = async (profileData) => {
    try {
      await axios.post(
        `${backend_url}/api/profile/updateprofile`,
        profileData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      toast.success("Profile updated."); // Profile Updated Notification
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    } catch (error) {
      toast.error("Profile not updated. Try again!");
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        // Fetching user details
        const user = await axios.get(`${backend_url}/api/profile/userinfo`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(user.data);
      } catch (error) {
        console.error("Failed to fetch user info: ", error);
      }
    };
    fetchUser();
  }, []);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        // Fetching profile details
        const profile = await axios.get(
          `${backend_url}/api/profile/profileinfo`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setProfile(profile.data);
      } catch (error) {
        console.error("Failed to fetch profile info: ", error);
      }
    };
    fetchProfile();
  }, []);

  return (
    <div
      className={`flex justify-center bg-orange-400 ${
        role === "Freelancer" ? "h-full min-h-screen" : "h-screen"
      }`}
    >
      <div
        className={`flex flex-col items-center rounded-lg border-1 border-orange-500 shadow-lg m-6 p-3 w-113.5 font-mono bg-orange-400/80 ${
          role === "Freelancer" ? "h-full" : "h-calc(100vh - 2rem)"
        }`}
      >
        <h1 className="text-4xl font-bold mt-4 mb-2">Profile Page</h1>
        <p className="text-md ">Welcome to {user.name}'s profile!</p>
        <div className="my-3 flex flex-col items-center">
          <div
            style={{ backgroundColor: profile.profileBg }}
            className="rounded-full w-15 h-15 mb-2 pt-3"
          >
            <span className="text-black text-3xl ml-5.5 ">
              {profile?.user?.name.charAt(0).toUpperCase()}
            </span>
          </div>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
        {/* Profile Details */}
        <div className="flex flex-col items-end">
          {role === "Freelancer" ? (
            isEditMode ? (
              <ProfileDetails
                id={profileId}
                isEditMode={isEditMode}
                onSubmit={handleSubmit}
              />
            ) : (
              <>
                <div className="flex flex-col items-center text-center border-2 shadow-lg border-orange-500 w-sm p-5 my-2">
                  {/* Freelancer | Accessing the current user profile */}
                  {profile ? (
                    <>
                      <p>
                        <span className="font-semibold">Title: </span>
                        {profile.title}
                      </p>
                      <p className="font-semibold mt-2">About me </p>
                      <p className="text-sm">{profile.aboutMe}</p>
                      <p className="mt-2">
                        <span className="font-semibold">
                          Expected hourly rate:
                        </span>{" "}
                        {profile.expectedRate}
                      </p>
                      <p>
                        <span className="font-semibold">Experience: </span>
                        {profile.experience}
                      </p>
                      <p className="font-semibold mt-2">Skills </p>
                      <p>{profile.skills + "."}</p>
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
                <div
                  onClick={() =>
                    navigate(`/edit-profile/${profile?._id || user._id}`)
                  }
                  className="w-fit px-2 hover:text-white cursor-pointer"
                >
                  Edit
                </div>
              </>
            )
          ) : (
            <></>
          )}
        </div>
        <div className="flex flex-col items-center text-center text-nowrap m-6 p-3 font-mono ">
          <p className="text-md hover:text-popover">
            You can add more features in the future.
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

export default Profile;
