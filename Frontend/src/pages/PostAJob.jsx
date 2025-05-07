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
import { Box, ChevronLeft, X } from "lucide-react";
import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import countries from "world-countries";

const PostAJob = () => {
  const [country, setCountry] = useState("");
  const [skills, setSkills] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  // Fetching country data from the world-countries package
  const countryOptions = countries.map((country) => ({
    value: country.cca2,
    label: country.name.common,
  }));

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
        <Link to={"/"} className="flex gap-3 justify-center my-5 ">
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
              <Input placeholder="Role" className="rounded-lg " />
            </div>
            <div className="mb-3">
              <p className="text-white text-left ml-2 mb-1 text-sm font-mono">
                Description
              </p>
              <Textarea
                placeholder="Enter the job description"
                className="rounded-lg  h-auto"
              />
            </div>
            <div className="mb-3">
              <p className="text-white text-left ml-2 mb-1 text-sm font-mono">
                Price Structure
              </p>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-orange-300">
                  <SelectItem value="fixed">Fixed</SelectItem>
                  <SelectItem value="hourly">Hourly</SelectItem>
                  <SelectItem value="monthly">Monthly</SelectItem>
                  <SelectItem value="yearly">Yearly</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="mb-3">
              <p className="text-white text-left ml-2 mb-1 text-sm font-mono">
                Experience Level
              </p>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue />
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
              <div className="flex flex-wrap gap-2 mt-2">
                <Input
                  type="text"
                  placeholder="Enter skills required"
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
                Country
              </p>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue />
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
          <Button className="bg-orange-400 w-full rounded-lg py-5 mb-5 shadow-md hover:bg-orange-600">
            POST
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PostAJob;
