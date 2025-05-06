import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Box, ChevronLeft } from "lucide-react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const PostAJob = () => {
  const navigate = useNavigate();

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
        <Link to={"/"} className="flex gap-3 justify-center my-5 text-white">
          <Box />
          Craftsy
        </Link>
        <div className="flex flex-col items-center text-center justify-center bg-white/30 shadow-lg backdrop-blur-lg border border-white/10 w-90 px-10 rounded-2xl">
          <div className="my-7">
            <h3 className="font-bold ">Post A JOB</h3>
            <p className="text-white text-xs">
              Please fill in the job details.
            </p>
          </div>
          <div className="w-full">
            <div className="my-3">
              <p className="text-left ml-2 mb-1 text-xs font-bold">Job Title</p>
              <Input placeholder="Role" className="rounded-lg text-white" />
            </div>
            <div className="mb-3">
              <p className="text-left ml-2 mb-1 text-xs font-bold">
                Description
              </p>
              <Textarea
                placeholder="Enter the job description"
                className="rounded-lg text-white h-auto"
              />
            </div>
            <div className="mb-3">
              <p className="text-left ml-2 mb-1 text-xs font-bold">
                Price Structure
              </p>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="fixed">Fixed</SelectItem>
                  <SelectItem value="hourly">Hourly</SelectItem>
                  <SelectItem value="monthly">Monthly</SelectItem>
                  <SelectItem value="yearly">Yearly</SelectItem>
                  <SelectItem></SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="mb-3">
              <p className="text-left ml-2 mb-1 text-xs font-bold">
                Experience Level
              </p>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="noexperience">No Experience</SelectItem>
                  <SelectItem value="entrylevel">Entry-level</SelectItem>
                  <SelectItem value="beginner">Beginner</SelectItem>
                  <SelectItem value="intermediate">Intermediate</SelectItem>
                  <SelectItem value="expert">Expert</SelectItem>
                  <SelectItem></SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="mb-3">
              <p className="text-left ml-2 mb-1 text-xs font-bold">
                Experience Level
              </p>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="noexperience">No Experience</SelectItem>
                  <SelectItem value="entrylevel">Entry-level</SelectItem>
                  <SelectItem value="beginner">Beginner</SelectItem>
                  <SelectItem value="intermediate">Intermediate</SelectItem>
                  <SelectItem value="expert">Expert</SelectItem>
                  <SelectItem></SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <Button className="bg-orange-400 w-full rounded-lg py-5 mb-5 shadow-md hover:bg-orange-600">
            Sign in
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PostAJob;
