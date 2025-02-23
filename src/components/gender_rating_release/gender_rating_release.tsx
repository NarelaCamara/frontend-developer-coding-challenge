import { Button } from "@radix-ui/themes";
import { Calendar, Puzzle, Star } from "lucide-react";
import React from "react";

interface Gender_rating_releaseProps {
  rating: string;
  release: string;
  gender: string;
}

const Gender_rating_release = ({
  rating,
  release,
  gender,
}: Gender_rating_releaseProps) => {
  return (
    <div className="flex flex-row justify-center content-center items-center pb-8">
      <div className="m-1">
        <Button variant="outline" radius="full" color="violet">
          <Star size={20} />
          Rating
          <span>{rating}</span>
        </Button>
      </div>
      <div className="m-1">
        <Button variant="outline" radius="full" color="violet">
          <Calendar size={20} />
          Release:
          <span>{release}</span>
        </Button>
      </div>
      <div className="m-1">
        <Button variant="outline" radius="full" color="violet">
          <Puzzle size={20} />
          Genre:
          <span>{gender}</span>
        </Button>
      </div>
    </div>
  );
};

export default Gender_rating_release;
