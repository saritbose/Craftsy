import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

const Cards = ({ title, content, icon: Icon }) => {
  return (
    <Card className="w-[20%] min-h-[5%] rounded-3xl text-center justify-around hover:bg-orange-500 hover:text-white">
      <CardHeader>
        {<Icon />}
        <CardTitle className="font-bold text-[15px]">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-[10px] text-neutral-500">
        {content}
      </CardContent>
    </Card>
  );
};

export default Cards;
