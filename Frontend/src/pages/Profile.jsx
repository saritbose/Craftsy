import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import { X } from "lucide-react";
import React, { useEffect, useState } from "react";

const Profile = () => {
  const [user, setUser] = useState("");
  const [profile, setProfile] = useState("");
  const [edit, setEdit] = useState(false);
  const [title, setTitle] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  const [expectedRate, setRate] = useState("");
  const [experience, setExperience] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [skills, setSkills] = useState([]);
  const role = localStorage.getItem("role");
  const token = localStorage.getItem("token");
  const backend_url = import.meta.env.VITE_BACKEND_URL;
  let meData = user;
  let profileData = profile;

  const addSkill = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      e.preventDefault(); // Prevent form submission
      setSkills([...skills, inputValue.trim()]); // Add the skill to the array
      setInputValue("");
    }
  };

  const removeSkill = (index) => {
    setSkills(skills.filter((_, i) => i !== index)); // Remove the skill from the array
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const profileData = {
      title,
      aboutMe,
      expectedRate,
      experience,
      skills,
    };

    // Check if any of the fields are empty
    if (
      !title &&
      !aboutMe &&
      !expectedRate &&
      !experience &&
      skills.length === 0
    ) {
      setEdit(!edit);
    } else if (!title || !aboutMe || !expectedRate || !experience) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      const res = await axios.post(
        `${backend_url}/api/profile/myprofile`,
        profileData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const profile = await axios.get(
          `${backend_url}/api/profile/updatedinfo`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setProfile(profile.data);
        let profileData = profile.data;
      } catch (error) {
        console.log(error);
      }
    };
    fetchProfile();
  }, []);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await axios.get(`${backend_url}/api/profile/me`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(user.data);
        let meData = user.data;
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, []);

  return (
    <div className="flex justify-center bg-orange-400 h-[calc(100vh-1px)] overflow-hidden">
      <div className="flex flex-col items-center rounded-lg border-1 border-orange-500 shadow-lg m-6 p-3 h-[94%] w-113.5 overflow-hidden font-mono bg-orange-400/80">
        <h1 className="text-4xl font-bold mt-4 mb-2">Profile Page</h1>
        <p className="text-md ">Welcome to {meData.name} profile!</p>
        <div className="my-3 flex flex-col items-center">
          <div className="bg-black rounded-full w-15 h-15 mb-2"></div>
          <p>{meData.name}</p>
          <p>{meData.email}</p>
        </div>
        <div className="flex flex-col items-end">
          {role === "Freelancer" ? (
            edit ? (
              <>
                <div className="flex flex-col gap-3 items-stretch border-2 border-orange-500 w-sm p-5 my-2">
                  {/* Freelancer */}
                  <p className="flex gap-2 items-center">
                    Title:{" "}
                    <Input
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="w-full"
                    />
                  </p>
                  <p>
                    About me
                    <Textarea
                      value={aboutMe}
                      onChange={(e) => setAboutMe(e.target.value)}
                      className="w-full text-left"
                    />
                  </p>
                  <p className="flex gap-2 items-center text-nowrap">
                    Expected hourly rate:{" "}
                    <Input
                      value={expectedRate}
                      onChange={(e) => setRate(e.target.value)}
                      className="w-full"
                    />
                  </p>
                  <p className="flex gap-2 items-center text-nowrap">
                    Experience level:{" "}
                    <Input
                      value={experience}
                      onChange={(e) => setExperience(e.target.value)}
                      className="w-full"
                    />
                  </p>
                  <div>
                    <p>Skills</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <Input
                        type="text"
                        placeholder="Enter your skills."
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={addSkill}
                      />
                      {skills.map((skill, index) => (
                        <div
                          key={index}
                          className=" bg-orange-500 rounded-full px-3 py-1 flex items-center gap-2 group"
                        >
                          {skill}
                          <button
                            className="bg-orange-500 hidden group-hover:block"
                            onClick={() => removeSkill(index)}
                          >
                            <X className="hover:text-white w-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex gap-50 px-2 text-nowrap">
                  <div className="hover:text-white cursor-pointer">
                    Change Password
                  </div>
                  <div
                    onClick={handleSubmit}
                    className="hover:text-white cursor-pointer"
                  >
                    Save
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="flex flex-col items-center border-2 border-orange-500 w-sm p-5 my-2">
                  {/* Freelancer */}
                  <p>Title: {profileData.title}</p>
                  <p>About me </p>
                  <p>{profileData.aboutMe}</p>
                  <p>Expected hourly rate: {profileData.expectedRate}</p>
                  <p>Experience: {profileData.experience} </p>
                  <p>Skills </p>
                  <p>{profileData.skills + ""}</p>
                </div>
                <div
                  onClick={() => setEdit(!edit)}
                  className="w-fit px-2 hover:text-white cursor-pointer"
                >
                  Edit
                </div>
              </>
            )
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
