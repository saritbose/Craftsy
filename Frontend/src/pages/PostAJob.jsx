import { Button } from "@/components/ui/button";
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
import { Box, ChevronLeft, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import countries from "world-countries";

const PostAJob = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [budget, setBudget] = useState("");
  const [structure, setStructure] = useState("");
  const [level, setLevel] = useState("");
  const [skills, setSkills] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [location, setLocation] = useState("");
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const backend_url = import.meta.env.VITE_BACKEND_URL;
  const { id } = useParams();
  const isEditMode = Boolean(id);

  // Fetching country data from the world-countries package
  const countryOptions = countries.map((country) => ({
    value: country.cca2,
    label: country.name.common,
  }));

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
    const jobData = {
      title,
      description,
      structure,
      budget: Number(budget),
      level,
      skills,
      location,
    };

    try {
      // On Edit Mode
      if (isEditMode) {
        await axios.put(`${backend_url}/api/client/edit-job/${id}`, jobData, {
          headers: { Authorization: `Bearer ${token}` },
        });
        toast.success("Job edited successfully");
      }
      // Normally Adding
      else {
        await axios.post(`${backend_url}/api/client/post-job`, jobData, {
          headers: { Authorization: `Bearer ${token}` },
        });
        toast.success("Job added successfully");
      }
    } catch (error) {
      if (error.response) {
        const status = error.response.status;
        if (status === 400 || status === 404) {
          toast.error("Didn't work. Try Again!");
        } else {
          toast.error("Something went wrong.Try again later");
        }
      } else {
        toast.error("Network error. Please check your connection.");
      }
      console.error(error);
    }
    navigate(-1);
  };

  useEffect(() => {
    if (isEditMode) {
      // Fetching Job Data
      const fetchOldJobData = async () => {
        try {
          const res = await axios.get(
            `${backend_url}/api/client/get-job/${id}`,
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );
          setTitle(res.data.title);
          setDescription(res.data.description);
          setBudget(res.data.pricing.budget);
          setStructure(res.data.pricing.structure);
          setLevel(res.data.experience);
          setSkills(res.data.skills);
          setLocation(res.data.location);
        } catch (error) {
          console.error("Failed to fetch job data: ", error);
        }
      };
      fetchOldJobData();
    }
  }, [id]);

  return (
    <div className="bg-orange-400">
      <Link
        to={"/"}
        onClick={() => navigate(-1)}
        className="flex gap-2 items-center text-white p-3"
      >
        <ChevronLeft />
        Return
      </Link>
      <div className="flex flex-col items-center justify-center min-h-screen pb-32">
        <Link
          to={"/"}
          className="flex gap-3 justify-center my-5 font-mono font-bold"
        >
          <Box />
          Craftsy
        </Link>
        <div className="flex flex-col items-center text-center justify-center bg-white/30 shadow-lg backdrop-blur-lg border border-white/10 w-90 px-10 rounded-2xl">
          <div className="my-7">
            <h3 className="font-bold font-mono ">Post A JOB</h3>
            <p className="text-white font-mono text-xs">
              Please fill in the job details.
            </p>
          </div>
          <div className="w-full">
            <div className="my-3">
              <p className="text-white text-left ml-2 mb-1 text-sm font-mono">
                Job Title
              </p>
              <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Role"
                className="rounded-lg  cursor-pointer"
              />
            </div>
            <div className="mb-3">
              <p className="text-white text-left ml-2 mb-1 text-sm font-mono">
                Description
              </p>
              <Textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter the job description"
                className="rounded-lg  h-auto cursor-pointer"
              />
            </div>
            <div className="mb-3">
              <p className="text-white text-left ml-2 mb-1 text-sm font-mono">
                Price Structure
              </p>
              <div className="flex">
                <Input
                  type="number"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  placeholder="Budget"
                  className="rounded-r-none w-auto cursor-pointer no-spinner"
                />
                <Select
                  value={structure}
                  onValueChange={(e) => setStructure(e)}
                >
                  <SelectTrigger className="w-lg border-l rounded-l-none cursor-pointer">
                    <SelectValue placeholder="Structure" />
                  </SelectTrigger>
                  <SelectContent className="bg-orange-300">
                    <SelectItem value="fixed">Fixed</SelectItem>
                    <SelectItem value="hourly">Hourly</SelectItem>
                    <SelectItem value="monthly">Monthly</SelectItem>
                    <SelectItem value="yearly">Yearly</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="mb-3">
              <p className="text-white text-left ml-2 mb-1 text-sm font-mono">
                Experience Level
              </p>
              <Select value={level} onValueChange={(e) => setLevel(e)}>
                <SelectTrigger className="w-full cursor-pointer">
                  <SelectValue placeholder="Level" />
                </SelectTrigger>
                <SelectContent className="bg-orange-300">
                  <SelectItem value="noexperience">No Experience</SelectItem>
                  <SelectItem value="entrylevel">Entry-level</SelectItem>
                  <SelectItem value="beginner">Beginner</SelectItem>
                  <SelectItem value="intermediate">Intermediate</SelectItem>
                  <SelectItem value="expert">Expert</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="mb-3">
              <p className="text-white text-left ml-2 mb-1 text-sm font-mono">
                Skills Required
              </p>
              <div className="flex flex-wrap gap-2 mt-2 ">
                <Input
                  type="text"
                  placeholder="Enter skills required"
                  className="cursor-pointer"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={addSkill}
                />
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className=" bg-orange-400 rounded-full px-3 py-1 flex items-center gap-2 group"
                  >
                    {skill}
                    <button
                      className="bg-orange-400 hidden group-hover:block"
                      onClick={() => removeSkill(index)}
                    >
                      <X className="hover:text-white w-4 mt-1.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="mb-8">
              <p className="text-white text-left ml-2 mb-1 text-sm font-mono">
                Location
              </p>
              <Select value={location} onValueChange={(e) => setLocation(e)}>
                <SelectTrigger className="w-full cursor-pointer">
                  <SelectValue placeholder="Country" />
                </SelectTrigger>
                <SelectContent className="bg-orange-300">
                  <SelectItem value="worldwide">Worldwide</SelectItem>
                  <SelectItem value="remote">Remote</SelectItem>
                  {countryOptions.map((country) => (
                    <SelectItem key={country.value} value={country.value}>
                      {country.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <Button
            onClick={handleSubmit}
            className="bg-orange-400 w-full rounded-lg py-5 mb-5 shadow-md hover:bg-orange-600 cursor-pointer"
          >
            {isEditMode ? "SAVE" : "POST"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PostAJob;
