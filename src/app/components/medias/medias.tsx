import Image from "next/image";
import React from "react";

const Medias = ({ element }: { element: string }) => {
  return (
    <div className="">
      <Image
        className="dark:invert rounded-xl"
        src={element}
        alt="Vercel logomark"
        width={132}
        height={132}
      />{" "}
    </div>
  );
};

export default Medias;
