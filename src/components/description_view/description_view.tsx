import { Button, Grid, Heading } from "@radix-ui/themes";
import Image from "next/image";
import React from "react";
import Item from "../item/item";
import Notification from "../notification/notification";
import Genre_rating_release from "../gender_rating_release/gender_rating_release";
import Medias from "../medias/medias";

const DescriptionView = () => {
  return (
    <>
      {false && <Notification />}

      <div>
        <Image
          className="dark:invert rounded-xl"
          src={"/image.png"}
          alt="Vercel logomark"
          width={150}
          height={150}
        />
      </div>
      <Heading className="m-2 Heading -2xl text-purple-800">
        Call of Duty
      </Heading>

      <Button variant="solid" radius="full" color="violet">
        Collect game
      </Button>

      <div>
        <Genre_rating_release
          rating={"9.9"}
          release={"12/01/20"}
          gender={"Card & Board Game"}
        />
        <Heading className="m-2 Heading -2xl text-purple-800">Summary</Heading>
        <div>
          Grand Theft Auto V is a vast open world game set in Los Santos, a
          sprawling sun-soaked metropolis struggling to stay afloat in an era of
          economic uncertainty and cheap reality TV. The game blends
          storytelling and gameplay in new ways as players repeatedly jump in
          and out of the lives of the game’s three lead characters, playing all
          sides of the game’s interwoven story.
        </div>
      </div>

      <div>
        <Heading className="m-2 Heading -2xl text-purple-800">
          Platforms
        </Heading>
        <div>PC (Microsoft Windows)</div>
      </div>

      <div>
        <Heading className="m-2 Heading -2xl text-purple-800">Media</Heading>
        <Grid columns="6" gap="6" width="auto">
          {[1, 2, 3, 4, 5].map((e) => (
            <Medias element={"/image.png"} key={e} />
          ))}
        </Grid>
      </div>

      <div>
        <Heading className="m-2 Heading -2xl text-purple-800">
          Similar games
        </Heading>
        <Grid columns="4" gap="4" width="auto">
          {[1, 2, 3, 4, 5, 6].map((e) => (
            <Item element={"/image.png"} key={e} viewTrash={false} />
          ))}
        </Grid>
      </div>
    </>
  );
};

export default DescriptionView;
