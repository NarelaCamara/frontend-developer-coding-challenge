import { IconButton } from "@radix-ui/themes";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import React from "react";

const Item = ({ element }: { element: string }) => {
  return (
    <div className="m-2">
      <div className="w-52 bg-pink-400 relative rounded-xl  ">
        <Image
          className="dark:invert rounded-xl"
          src={element}
          alt="Vercel logomark"
          width={250}
          height={250}
        />
        <div className="absolute bottom-0 right-0 pb-3 pr-3">
          <IconButton radius="full" size="4" color="gray">
            <Trash2 size={20} />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Item;
