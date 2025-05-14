import ExtraFreelancerTabs from "@/Component/ExtraFreelancerTabs";
import JobBoard from "@/Component/JobBoard";
import YourApplications from "@/Component/YourApplications";
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
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const FreelancerDashboard = () => {
  const [nav, setNav] = useState(false);
  const [currentTab, setCurrentTab] = useState("jobBoard");
  const [search, setSearch] = useState(false);
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const renderTab = () => {
    switch (currentTab) {
      case "jobBoard":
        return <JobBoard searchText={searchText} />;
      case "applications":
        return <YourApplications searchText={searchText} />;
      case "ongoingWork":
        return <ExtraFreelancerTabs />;
      case "earnings":
        return <ExtraFreelancerTabs />;
      default:
        return <></>;
    }
  };

  const logout = () => {
    navigate("/");
    localStorage.removeItem("token");
    localStorage.removeItem("role");
  };

  return (
    <div className="p-3 relative h-screen overflow-hidden">
      {/* Header */}
      <div className="fixed top-0 h-14 z-50 w-[99%] flex items-center justify-between border-b-2 pb-1 bg-white">
        <div onClick={() => setNav(!nav)} className="md:hidden">
          {nav === true ? (
            <>
              <X className="sm:hidden m-2" />
              <div className="fixed top-14 left-0 bg-white w-[50%] border-2 shadow-md">
                <div className="m-5">
                  <button onClick={() => setCurrentTab("jobBoard")}>
                    Browse Jobs
                  </button>
                </div>
                <div className="m-5">
                  <button onClick={() => setCurrentTab("applications")}>
                    Your Applications
                  </button>
                </div>
                <div className="m-5">
                  <button onClick={() => setCurrentTab("ongoingWork")}>
                    Ongoing Work
                  </button>
                </div>
                <div className="m-5">
                  <button onClick={() => setCurrentTab("earnings")}>
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
                    className="hover:bg-orange-400 hover:text-white text-center p-2 rounded-3xl w-fit"
                  >
                    Log out
                  </div>
                </div>
              </div>
            </>
          ) : (
            <AlignJustify className="md:hidden m-2" />
          )}
        </div>
        <Link to={"/"}>Craftsy</Link>
        <div className="hidden md:flex gap-5 items-center">
          <div className="group relative">
            <div className="flex hover:text-orange-300">
              Find work <ChevronDown className="translate-y-0.5" />
            </div>
            <div className="hidden group-hover:block absolute bg-white mt-1 py-2 w-64 text-sm border rounded-xl shadow-md">
              <p className="pb-1 px-3 hover:bg-gray-100">Find work</p>
              <p className="pb-1 px-3 hover:bg-gray-100">Saved jobs</p>
              <p className="pb-2 px-3 hover:bg-gray-100">Proposals & offers</p>
              <hr className="w-1vw pb-1 " />
              <p className="pb-1 px-3 text-neutral-400">Reach more clients</p>
              <p className="pb-1 px-3 hover:bg-gray-100 flex gap-1">
                Promote with ads
                <ExternalLink className="w-4 h-6" />
              </p>
              <p className="pb-1 px-3 hover:bg-gray-100">Direct Contracts</p>
            </div>
          </div>
          <div className="group relative">
            <div className="flex hover:text-orange-300">
              Deliver work <ChevronDown className="translate-y-0.5" />
            </div>
            <div className="hidden group-hover:block absolute bg-white mt-1 py-2 w-64 text-sm border rounded-xl shadow-md">
              <p className="pb-2 px-3 hover:bg-gray-100">
                Your active contracts
              </p>
              <p className="pb-2 px-3 hover:bg-gray-100">Contract history</p>
              <p className="pb-2 px-3 hover:bg-gray-100">Hourly work diary</p>
            </div>
          </div>
          <div className="group relative">
            <div className="flex hover:text-orange-300">
              Manage finances <ChevronDown className="translate-y-0.5" />
            </div>
            <div className="hidden group-hover:block absolute bg-white mt-1 py-2 w-64 text-sm border rounded-xl shadow-md">
              <p className="pb-2 px-3 hover:bg-gray-100">Financial overview</p>
              <p className="pb-2 px-3 hover:bg-gray-100">Your reports</p>
              <p className="pb-2 px-3 hover:bg-gray-100">
                Billings and earnings
              </p>
              <p className="pb-2 px-3 hover:bg-gray-100">
                Transactions and invoices
              </p>
              <hr className="w-1vw pb-1 " />
              <p className="pb-2 px-2 text-neutral-400">Payments</p>
              <p className="pb-2 px-3 hover:bg-gray-100">Withdraw earnings</p>
            </div>
          </div>
          <div className="hover:text-orange-300">Messages</div>
        </div>
        <div className="flex items-center gap-5 mx-2">
          <div className="relative mt-1">
            <Search
              onClick={() => setSearch(!search)}
              className={search ? "absolute right-2 top-1" : "block"}
            />
            {search && (
              <Input
                placeholder="Search for jobs..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="w-60 h-9 rounded-full pl-5"
              />
            )}
          </div>
          <CircleHelp className="hidden md:block" />
          <Bell className="hidden md:block" />
          <div className="group relative">
            <Button className="rounded-full h-8 hidden md:block lg:hidden" />
            <div className="hidden group-hover:flex flex-col absolute right-0 top-8 bg-white mt-1 py-2 px-2 w-32 text-sm border shadow-md">
              <Link to={"/profile"} className="text-center p-2  w-fit">
                My Profile
              </Link>
              <div
                onClick={logout}
                className="text-center p-2  w-fit cursor-pointer"
              >
                Log out
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" relative lg:flex items-baseline justify-between h-screen overflow-y-auto scrollbar-hide">
        {/* SideBar */}
        <div className="hidden lg:block border-r-2 h-screen w-[20%] fixed top-15 left-0">
          <div className="m-5">
            <button onClick={() => setCurrentTab("jobBoard")}>
              Browse Jobs
            </button>
          </div>
          <div className="m-5">
            <button onClick={() => setCurrentTab("applications")}>
              Your Applications
            </button>
          </div>
          <div className="m-5">
            <button onClick={() => setCurrentTab("ongoingWork")}>
              Ongoing Work
            </button>
          </div>
          <div className="m-5">
            <button onClick={() => setCurrentTab("earnings")}>Earnings</button>
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
              className="hover:bg-orange-400 hover:text-white text-center p-2 rounded-3xl w-fit"
            >
              Log out
            </div>
          </div>
        </div>
        {/* Job boards */}
        {renderTab()}
        {/* Filters */}
        <div className="hidden lg:block border-l-2 h-screen w-[25%] fixed top-15 right-0">
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
