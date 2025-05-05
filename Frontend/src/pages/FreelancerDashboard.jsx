import Jobs from "@/Component/Jobs";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
import { Link, Navigate } from "react-router-dom";

const FreelancerDashboard = () => {
  const [nav, setNav] = useState(false);

  const logout = () => {
    Navigate("/login");
    localStorage.removeItem("token");
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
                <div className="m-5">Browse Jobs</div>
                <div className="m-5">Your Applications</div>
                <div className="m-5">Ongoing Work</div>
                <div className="m-5">Earnings</div>
                <hr className="w-full bg-neutral-400 " />
                <div className="my-5 mx-3 flex flex-col gap-3">
                  <Link
                    to={"/login"}
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
          <Search />
          <CircleHelp className="hidden md:block" />
          <Bell className="hidden md:block" />
          <Button className="rounded-full h-8 hidden md:block" />
        </div>
      </div>
      <div className="lg:flex items-baseline justify-between h-screen relative overflow-y-auto scrollbar-hide">
        {/* SideBar */}
        <div className="hidden lg:block border-r-2 h-screen w-[15%] fixed top-15 left-0">
          <div className="m-5">Browse Jobs</div>
          <div className="m-5">Your Applications</div>
          <div className="m-5">Ongoing Work</div>
          <div className="m-5">Earnings</div>
          <div className="my-5 mx-3 flex flex-col gap-3">
            <Link
              to={"/login"}
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
        <div className="mx-2 flex-1 z-10 absolute top-10 left-56 right-71 scrollbar-hide">
          <p className="font-medium my-5 text-xl">Jobs you might like</p>
          <Tabs defaultValue="bestmatches">
            <TabsList className="bg-white">
              <TabsTrigger value="bestmatches">Best Matches</TabsTrigger>
              <TabsTrigger value="mostrecent">Most Recent</TabsTrigger>
              <TabsTrigger value="savedjobs">Saved Jobs</TabsTrigger>
            </TabsList>
            <TabsContent value="bestmatches">
              <p className="text-gray-600 my-3">
                Browse jobs that match your experience to a client's hiring
                preferences. Ordered by most relevant.
              </p>
              <hr className="w-vw mt-2" />
              <div>
                {/* Jobs */}
                <Jobs />
                <Jobs />
                <Jobs />
                <Jobs />
                <Jobs />
                <Jobs />
                <Jobs />
                <Jobs />
              </div>
            </TabsContent>
            <TabsContent value="mostrecent">
              <p className="text-gray-600 my-3">
                Browse the most recent jobs that match your skills and profile
                description to the skills clients are looking for.
              </p>
              <hr className="w-1vw mt-2" />
              <div>
                {/* Jobs */}
                <Jobs />
                <Jobs />
              </div>
            </TabsContent>
            <TabsContent value="savedjobs" className="text-gray-600 my-3">
              Feature still not available.
            </TabsContent>
          </Tabs>
        </div>
        {/* Filters */}
        <div className="hidden lg:block border-l-2 h-screen w-[20%] fixed top-15 right-0">
          <div className="m-5">Filters</div>
          <div className="m-5">...</div>
          <div className="m-5">...</div>
          <div className="m-5">...</div>
          <div className="my-5 mx-5 flex flex-col gap-3">
            <div>...</div>
            <div>...</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreelancerDashboard;
