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
      className="w-52 relative rounded-xl m-8"
      onClick={() => router.push("/description", { scroll: false })}
    >
      <Image
        className="dark:invert rounded-xl"
        src={element}
        alt="Vercel logomark"
        width={170}
        height={226}
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
