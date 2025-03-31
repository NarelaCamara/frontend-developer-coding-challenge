"use client";
import { Button } from "@radix-ui/themes";
import React, { useState } from "react";

const OPCIONES = {
  last: "Last added",
  new: "Newest",
  oldest: "Oldest",
};

type Variant_Button =
  | "classic"
  | "solid"
  | "soft"
  | "surface"
  | "outline"
  | "ghost"
  | undefined;

const Categories = () => {
  const [change, setChange] = useState<string>(OPCIONES.last);

  const handleStyles = (OPCIONES: string): Variant_Button => {
    return OPCIONES === change ? "solid" : "outline";
  };

  return (
    <div className="flex flex-row justify-center content-center items-center pb-8 ">
      <div className="m-1">
        <Button
          variant={handleStyles(OPCIONES.last)}
          radius="full"
          color="violet"
          onClick={() => setChange(OPCIONES.last)}
        >
          {OPCIONES.last}
        </Button>
      </div>
      <div className="m-1">
        <Button
          variant={handleStyles(OPCIONES.new)}
          radius="full"
          color="violet"
          onClick={() => setChange(OPCIONES.new)}
        >
          {OPCIONES.new}
        </Button>
      </div>
      <div className="m-1">
        <Button
          variant={handleStyles(OPCIONES.oldest)}
          radius="full"
          color="violet"
          onClick={() => setChange(OPCIONES.oldest)}
        >
          {OPCIONES.oldest}
        </Button>
      </div>
    </div>
  );
};

export default Categories;
