"use client";
import { IconButton } from "@radix-ui/themes";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Item = ({
  element,
  viewTrash,
}: {
  element: string;
  viewTrash?: boolean;
}) => {
  const router = useRouter();
  return (
    <div
      className=" relative rounded-xl m-2"
      onClick={() => router.push("/description", { scroll: false })}
    >
      <Image
        className=" rounded-xl  inset-0 w-full h-full object-cover"
        src={element}
        alt="Vercel logomark"
        width={850}
        height={800}
      />
      {viewTrash && (
        <div className="absolute bottom-0 right-0 pb-3 pr-3">
          <IconButton radius="full" size="3" color="gray">
            <Trash2 size={15} />
          </IconButton>
        </div>
      )}
    </div>
  );
};

export default Item;
