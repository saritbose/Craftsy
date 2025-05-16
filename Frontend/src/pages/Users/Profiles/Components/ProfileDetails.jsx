import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import { X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProfileDetails = ({ id, isEditMode, onSubmit }) => {
  const [title, setTitle] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  const [rate, setRate] = useState("");
  const [experience, setExperience] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [skills, setSkills] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const backend_url = import.meta.env.VITE_BACKEND_URL;

  const addSkill = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      e.preventDefault();
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
      rate: Number(rate),
      experience,
      skills,
    };
    onSubmit(profileData);
    navigate(-1);
  };

  useEffect(() => {
    if (isEditMode) {
      const fetchOldJobData = async () => {
        try {
          const res = await axios.get(
            `${backend_url}/api/profile/userprofile/${id}`,
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );
          setTitle(res.data.title);
          setAboutMe(res.data.aboutMe);
          setRate(res.data.expectedRate);
          setExperience(res.data.experience);
          setSkills(res.data.skills);
        } catch (error) {
          console.error("Error fetching profile details: ", error);
        }
      };
      fetchOldJobData();
    }
  }, [id]);

  return (
    <>
      <div className="flex flex-col gap-3 border-2 items-stretch shadow-lg border-orange-500 w-sm p-5 my-2">
        {/* Freelancer */}
        <p className="flex gap-2 items-center">
          Title:{" "}
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full cursor-pointer"
          />
        </p>
        <p>
          About me
          <Textarea
            value={aboutMe}
            onChange={(e) => setAboutMe(e.target.value)}
            className="w-full cursor-pointer"
          />
        </p>
        <p className="flex gap-2 items-center text-nowrap">
          Expected hourly rate:{" "}
          <Input
            type="number"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            className="w-full cursor-pointer no-spinner"
          />
        </p>
        <p className="flex gap-2 items-center text-nowrap">
          Experience level:{" "}
          <Select value={experience} onValueChange={setExperience}>
            <SelectTrigger className="w-full cursor-pointer">
              <SelectValue placeholder="Experience" />
            </SelectTrigger>
            <SelectContent className="bg-orange-300">
              <SelectItem value="noexperience">No Experience</SelectItem>
              <SelectItem value="entrylevel">Entry-level</SelectItem>
              <SelectItem value="beginner">Beginner</SelectItem>
              <SelectItem value="intermediate">Intermediate</SelectItem>
              <SelectItem value="expert">Expert</SelectItem>
            </SelectContent>
          </Select>
        </p>
        <div>
          <p>Skills</p>
          <div className="flex flex-wrap gap-2 mt-2">
            <Input
              type="text"
              placeholder="Enter your skills."
              className="cursor-pointer"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={addSkill}
            />
            {skills.map((skill, index) => (
              <div
                key={index}
                className=" bg-orange-500 rounded-full px-3 py-1 flex items-center gap-2 group cursor-pointer"
              >
                {skill}
                <button
                  className="bg-orange-500 hidden group-hover:block cursor-pointer"
                  onClick={() => removeSkill(index)}
                >
                  <X className="hover:text-white w-4 cursor-pointer" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex gap-50 px-2 text-nowrap">
        <div className="hover:text-white cursor-pointer">Change Password</div>
        <div onClick={handleSubmit} className="hover:text-white cursor-pointer">
          Save
        </div>
      </div>
    </>
  );
};

export default ProfileDetails;
