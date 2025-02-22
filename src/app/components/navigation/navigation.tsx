"use client";
import { Heading } from "@radix-ui/themes";
import { ArrowLeft, SwordsIcon } from "lucide-react";
import React from "react";
import Search from "../search/search";
import { usePathname, useRouter } from "next/navigation";

const Navigation = () => {
  const router = useRouter();
  const {} =  usePathname()

  console.log(router);
  return (
    <div>
      <div className="grid grid-rows-1 items-center justify-items-center">
        <div className="flex flex-row items-center justify-items-center m-2">
          <div className=" rounded-xl border-2 border-pink-400 p-2">
            <SwordsIcon size={23} color="#3C1661" />
          </div>

          {
            <Heading className="m-2 Heading -2xl text-purple-800">
              Gaming Haven Z
            </Heading>
          }
        </div>
      </div>
      <div>
        <h2
          onClick={() => router.back()}
          className="text-base p-4 font-bold text-purple-800 flex flex-row items-center"
        >
          <ArrowLeft height="20" width="20" /> Back
        </h2>
        <Search />
      </div>
    </div>
  );
};

export default Navigation;
