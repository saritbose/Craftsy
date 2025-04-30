import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlignJustify, Search } from "lucide-react";
import React from "react";

const Home = () => {
  return (
    <div>
      {/* business name, sign up, navigation */}
      <header className="flex justify-between">
        <div className="flex">
          <AlignJustify />
          Craftsy
        </div>
        <div className="flex">
          Sign up
          <Search />
        </div>
      </header>

      {/* Search bar */}
      <div
        className="font-medium font-serif text-white "
        style={{
          backgroundImage: "url('/ApartmentCoderSm.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "60vh",
        }}
      >
        <p>Connecting clients in need to freelancers who deliver</p>
        <div>
          <Tabs defaultValue="findtalent" className="w-[400px]">
            <TabsList>
              <TabsTrigger value="findtalent">Find talent</TabsTrigger>
              <TabsTrigger value="browsejobs">Browse jobs</TabsTrigger>
            </TabsList>
            <TabsContent value="findtalent">
              <div className="flex relative">
                <Input placeholder="Search by roles, skills, or keywords" />
                <Search className="absolute right-20" />
                <Button className="absolute right-1">Search</Button>
              </div>
              <div>Companies</div>
            </TabsContent>
            <TabsContent value="browsejobs">
              <p>
                Build your freelancing career on Upwork, with thousands of jobs
                posted every week.
              </p>
              <Button>Explore recently posted jobs</Button>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Advantages of using craftsy */}
      <div>
        <div></div>
        <div></div>
      </div>

      {/* Browse talent by category */}
      <div></div>

      {/* More advantages with pic, forcing to signup/signin */}
      <div></div>
      <div></div>
      <div></div>
      <div></div>

      {/* reviews */}
      <div></div>

      {/* category search selection */}
      <div></div>

      {/* footers */}
      <div></div>
    </div>
  );
};

export default Home;
