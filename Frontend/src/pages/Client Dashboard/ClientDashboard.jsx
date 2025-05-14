import ExtraTabs from "@/Component/ExtraTabs";
import MyPostingsBoard from "./Components/Postings/MyPostingsBoard";
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

const ClientDashboard = () => {
  const [nav, setNav] = useState(false);
  const [search, setSearch] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [currentTab, setCurrentTab] = useState("myPostings");
  const navigate = useNavigate();

  const renderTab = () => {
    switch (currentTab) {
      case "myPostings":
        return <MyPostingsBoard searchText={searchText} />;
      case "ongoingProjects":
        return <ExtraTabs />;
      case "invoices":
        return <ExtraTabs />;
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
                  <button onClick={() => setCurrentTab("myPostings")}>
                    My Postings
                  </button>
                </div>
                <div className="m-5">
                  <button onClick={() => setCurrentTab("ongoingProjects")}>
                    Ongoing Projects
                  </button>
                </div>
                <div className="m-5">
                  <button onClick={() => setCurrentTab("invoices")}>
                    Invoices
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
              Find talent <ChevronDown className="translate-y-0.5" />
            </div>
            <div className="hidden group-hover:block absolute bg-white mt-1 py-2 w-64 text-sm border rounded-xl shadow-md">
              <p className="pb-1 px-3 hover:bg-gray-100">Find talent</p>
              <p className="pb-2 px-3 hover:bg-gray-100">
                Applications & offers
              </p>
              <hr className="w-1vw pb-1 " />
              <p className="pb-1 px-3 text-neutral-400">
                Reach more freelancers
              </p>
              <p className="pb-1 px-3 hover:bg-gray-100 flex gap-1">
                Promote with ads
                <ExternalLink className="w-4 h-6" />
              </p>
              <p className="pb-1 px-3 hover:bg-gray-100">Direct Contracts</p>
            </div>
          </div>
          <div className="group relative">
            <div className="flex hover:text-orange-300">
              Freelancers <ChevronDown className="translate-y-0.5" />
            </div>
            <div className="hidden group-hover:block absolute bg-white mt-1 py-2 w-64 text-sm border rounded-xl shadow-md">
              <p className="pb-2 px-3 hover:bg-gray-100">
                Your active contracts
              </p>
              <p className="pb-2 px-3 hover:bg-gray-100">Contract history</p>
              <p className="pb-2 px-3 hover:bg-gray-100">Review diary</p>
            </div>
          </div>
          <div className="group relative">
            <div className="flex hover:text-orange-300">
              Reports <ChevronDown className="translate-y-0.5" />
            </div>
            <div className="hidden group-hover:block absolute bg-white mt-1 py-2 w-64 text-sm border rounded-xl shadow-md">
              <p className="pb-2 px-3 hover:bg-gray-100">Financial overview</p>
              <p className="pb-2 px-3 hover:bg-gray-100">Your reports</p>
              <p className="pb-2 px-3 hover:bg-gray-100">
                Transactions and invoices
              </p>
              <hr className="w-1vw pb-1 " />
              <p className="pb-2 px-2 text-neutral-400">Payments</p>
              <p className="pb-2 px-3 hover:bg-gray-100">Purchase coins</p>
            </div>
          </div>
          <div className="hover:text-orange-300">Messages</div>
        </div>
        <div className="flex items-center gap-5 mx-2">
          <div className="relative mt-1">
            <Search
              values={search}
              onClick={() => setSearch(!search)}
              className={search ? "absolute right-2 top-1" : "block"}
            />
            {search && (
              <Input
                className="w-60 rounded-full pl-5"
                placeholder="Find your postings..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
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
          <div className="m-5">My Postings</div>
          <div className="m-5">Ongoing Projects</div>
          <div className="m-5">Invoices</div>
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
        {/* Client boards */}
        {renderTab()}
      </div>
    </div>
  );
};

export default ClientDashboard;
