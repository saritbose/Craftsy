import { Card, CardContent } from "@/components/ui/card";
import React from "react";

const Cards = ({ title, content, icon: Icon }) => {
  return (
    <Card className="w-[40%] h-[10%] rounded-3xl text-center items-center justify-center hover:bg-orange-500 hover:text-white group">
      <CardContent>{<Icon className="" />}</CardContent>
      <CardContent className="font-bold text-1vh">{title}</CardContent>
      <CardContent className="text-[10px] text-neutral-500 group-hover:text-white">
        {content}
      </CardContent>
    </Card>
  );
};

export default Cards;
