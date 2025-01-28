import { Heading } from "@radix-ui/themes";
import { SwordsIcon } from "lucide-react";
import React from "react";

const Navigation = () => {
  return (
    <div className="grid grid-rows-1 items-center justify-items-center">
      <div className="flex flex-row items-center justify-items-center m-2">
        <div className=" rounded-xl border-2 border-pink-400 p-2">
          <SwordsIcon size={23} color="#3C1661" />
        </div>

        <Heading className="m-2 Heading -2xl text-purple-800">
          Gaming Haven Z
        </Heading>
      </div>
    </div>
  );
};

export default Navigation;
