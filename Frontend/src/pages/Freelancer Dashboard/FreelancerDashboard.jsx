import ExtraTabs from "@/Component/ExtraTabs";
import JobBoard from "./Components/Jobs/JobBoard";
import YourApplications from "./Components/Applications/YourApplications";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  AlignJustify,
  Bell,
  ChevronDown,
  CircleHelp,
  ExternalLink,
  Search,
  X,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const FreelancerDashboard = () => {
  const [nav, setNav] = useState(false);
  const [currentTab, setCurrentTab] = useState("jobBoard");
  const [search, setSearch] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [profile, setProfile] = useState("");
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const backend_url = import.meta.env.VITE_BACKEND_URL;

  // Tabs changing features
  const renderTab = () => {
    switch (currentTab) {
      case "jobBoard":
        return <JobBoard searchText={searchText} />;
      case "applications":
        return <YourApplications searchText={searchText} />;
      case "ongoingWork":
        return <ExtraTabs />;
      case "earnings":
        return <ExtraTabs />;
      default:
        return <></>;
    }
  };

  // Logout Feature
  const logout = () => {
    toast.success("Logged out!");
    navigate("/");
    localStorage.removeItem("token");
    localStorage.removeItem("role");
  };

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        // Fetching profile info
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
    <div className="p-3 relative h-screen overflow-hidden">
      {/* Header */}
      <div className="fixed top-0 h-14 z-50 w-[99%] flex items-center justify-between border-b-2 pb-1 bg-white">
        <div onClick={() => setNav(!nav)} className="md:hidden">
          {nav === true ? (
            <>
              <X className="sm:hidden m-2 cursor-pointer" />
              <div className="fixed top-14 left-0 bg-white w-[50%] border-2 shadow-md">
                <div className="m-5 ">
                  <button
                    onClick={() => setCurrentTab("jobBoard")}
                    className="cursor-pointer hover:text-orange-400"
                  >
                    Browse Jobs
                  </button>
                </div>
                <div className="m-5 ">
                  <button
                    onClick={() => setCurrentTab("applications")}
                    className="cursor-pointer hover:text-orange-400"
                  >
                    Your Applications
                  </button>
                </div>
                <div className="m-5 ">
                  <button
                    onClick={() => setCurrentTab("ongoingWork")}
                    className="cursor-pointer hover:text-orange-400"
                  >
                    Ongoing Work
                  </button>
                </div>
                <div className="m-5 ">
                  <button
                    onClick={() => setCurrentTab("earnings")}
                    className="cursor-pointer hover:text-orange-400"
                  >
                    Earnings
                  </button>
                </div>
                <hr className="w-full bg-neutral-400 " />
                <div className="my-5 mx-3 flex flex-col gap-3">
                  <Link
                    to={"/profile"}
                    className="hover:bg-orange-400 hover:text-white text-center p-2 rounded-3xl w-fit"
                  >
                    My Profile
                  </Link>
                  <div
                    onClick={logout}
                    className="hover:bg-orange-400 hover:text-white cursor-pointer text-center p-2 rounded-3xl w-fit"
                  >
                    Log out
                  </div>
                </div>
              </div>
            </>
          ) : (
            <AlignJustify className="md:hidden m-2 cursor-pointer" />
          )}
        </div>
        <Link to={"/"} className="font-mono font-bold">
          Craftsy
        </Link>
        <div className="hidden md:flex gap-5 items-center">
          <div className="group relative">
            <div className="flex hover:text-orange-300 cursor-pointer">
              Find work <ChevronDown className="translate-y-0.5" />
            </div>
            <div className="hidden group-hover:block absolute bg-white mt-1 py-2 w-64 text-sm border rounded-xl shadow-md">
              <p className="pb-1 px-3 hover:bg-gray-100 cursor-pointer">
                Find work
              </p>
              <p className="pb-1 px-3 hover:bg-gray-100 cursor-pointer">
                Saved jobs
              </p>
              <p className="pb-2 px-3 hover:bg-gray-100 cursor-pointer">
                Proposals & offers
              </p>
              <hr className="w-1vw pb-1 " />
              <p className="pb-1 px-3 text-neutral-400">Reach more clients</p>
              <p className="pb-1 px-3 hover:bg-gray-100 flex gap-1 cursor-pointer">
                Promote with ads
                <ExternalLink className="w-4 h-6" />
              </p>
              <p className="pb-1 px-3 hover:bg-gray-100 cursor-pointer">
                Direct Contracts
              </p>
            </div>
          </div>
          <div className="group relative">
            <div className="flex hover:text-orange-300 cursor-pointer">
              Deliver work <ChevronDown className="translate-y-0.5" />
            </div>
            <div className="hidden group-hover:block absolute bg-white mt-1 py-2 w-64 text-sm border rounded-xl shadow-md">
              <p className="pb-2 px-3 hover:bg-gray-100 cursor-pointer">
                Your active contracts
              </p>
              <p className="pb-2 px-3 hover:bg-gray-100 cursor-pointer">
                Contract history
              </p>
              <p className="pb-2 px-3 hover:bg-gray-100 cursor-pointer">
                Hourly work diary
              </p>
            </div>
          </div>
          <div className="group relative">
            <div className="flex hover:text-orange-300 cursor-pointer">
              Manage finances <ChevronDown className="translate-y-0.5" />
            </div>
            <div className="hidden group-hover:block absolute bg-white mt-1 py-2 w-64 text-sm border rounded-xl shadow-md">
              <p className="pb-2 px-3 hover:bg-gray-100 cursor-pointer">
                Financial overview
              </p>
              <p className="pb-2 px-3 hover:bg-gray-100 cursor-pointer">
                Your reports
              </p>
              <p className="pb-2 px-3 hover:bg-gray-100 cursor-pointer">
                Billings and earnings
              </p>
              <p className="pb-2 px-3 hover:bg-gray-100 cursor-pointer">
                Transactions and invoices
              </p>
              <hr className="w-1vw pb-1 " />
              <p className="pb-2 px-2 text-neutral-400">Payments</p>
              <p className="pb-2 px-3 hover:bg-gray-100 cursor-pointer">
                Withdraw earnings
              </p>
            </div>
          </div>
          <div className="hover:text-orange-300 cursor-pointer">Messages</div>
        </div>
        <div className="flex items-center gap-4 mx-2">
          <div className="relative mt-1">
            <Search
              onClick={() => setSearch(!search)}
              className={`cursor-pointer ${
                search ? "absolute right-2 top-1" : "block"
              }`}
            />
            {search && (
              <Input
                placeholder="Search for jobs..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="w-60 h-9 md:w-40 lg:w-60 rounded-full pl-5 cursor-pointer"
              />
            )}
          </div>
          <CircleHelp className="hidden md:block cursor-pointer" />
          <Bell className="hidden md:block cursor-pointer" />
          <div className="group relative">
            <Button
              style={{ backgroundColor: profile.profileBg }}
              className="rounded-full mr-1 w-10 h-10 hidden md:block lg:hidden cursor-pointer"
            >
              <span className="text-black">
                {profile?.user?.name.charAt(0).toUpperCase()}
              </span>
            </Button>
            <div className="hidden group-hover:flex flex-col absolute right-0 top-8 bg-white mt-1 py-2 px-2 w-32 text-sm border shadow-md">
              <Link
                to={"/profile"}
                className="text-center p-2  w-fit cursor-pointer hover:text-orange-400"
              >
                My Profile
              </Link>
              <div
                onClick={logout}
                className="text-center p-2  w-fit cursor-pointer hover:text-orange-400"
              >
                Log out
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" relative lg:flex items-baseline justify-between h-screen overflow-y-auto scrollbar-hide">
        {/* SideBar */}
        <div className="hidden lg:block border-r-2 h-screen w-[14%] fixed top-15 left-0">
          <div className="m-5">
            <button
              onClick={() => setCurrentTab("jobBoard")}
              className="cursor-pointer hover:text-orange-400"
            >
              Browse Jobs
            </button>
          </div>
          <div className="m-5 text-nowrap">
            <button
              onClick={() => setCurrentTab("applications")}
              className="cursor-pointer hover:text-orange-400"
            >
              Your Applications
            </button>
          </div>
          <div className="m-5 text-nowrap">
            <button
              onClick={() => setCurrentTab("ongoingWork")}
              className="cursor-pointer hover:text-orange-400"
            >
              Ongoing Work
            </button>
          </div>
          <div className="m-5">
            <button
              onClick={() => setCurrentTab("earnings")}
              className="cursor-pointer hover:text-orange-400"
            >
              Earnings
            </button>
          </div>
          <div className="my-5 mx-3 flex flex-col gap-3">
            <Link
              to={"/profile"}
              className="hover:bg-orange-400 hover:text-white text-center p-2 rounded-3xl w-fit"
            >
              My Profile
            </Link>
            <div
              onClick={logout}
              className="hover:bg-orange-400 hover:text-white text-center p-2 rounded-3xl w-fit cursor-pointer"
            >
              Log out
            </div>
          </div>
        </div>
        {/* Job boards */}
        {renderTab()}
        {/* Filters */}
        <div className="hidden lg:block border-l-2 h-screen w-[18%] fixed top-15 right-0">
          <div className="m-5">Filters</div>
          <div className="flex items-center justify-center ">
            <p className="font-extralight font-mono text-gray-700 text-center my-5 text-xl">
              Feature still not available.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreelancerDashboard;
