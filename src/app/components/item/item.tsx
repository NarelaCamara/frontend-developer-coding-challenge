import { IconButton } from "@radix-ui/themes";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import React from "react";

const Item = ({
  element,
  viewTrash,
}: {
  element: string;
  viewTrash?: boolean;
}) => {
  return (
    <div className="w-52 bg-pink-400 relative rounded-xl  m-2 ">
      <Image
        className="dark:invert rounded-xl"
        src={element}
        alt="Vercel logomark"
        width={250}
        height={250}
      />
      {viewTrash && (
        <div className="absolute bottom-0 right-0 pb-3 pr-3">
          <IconButton radius="full" size="4" color="gray">
            <Trash2 size={20} />
          </IconButton>
        </div>
      )}
    </div>
  );
};

export default Item;
