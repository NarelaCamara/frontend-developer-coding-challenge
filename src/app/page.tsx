"use client";
import Categories from "@/components/categories/categories";
import Item from "@/components/item/item";
import { getGames, IGame, login } from "@/features";
import { Status } from "@/utils/utils";
import { Grid } from "@radix-ui/themes";
import { useEffect, useState } from "react";

export default function Home() {
  const [games, setGames] = useState<Array<IGame>>([]);
  const [status_game, setStatus_game] = useState<Status>(Status.Loading);

  useEffect(() => {
    const respLogin = async () => {
      const resp = await login();
      const resp_games = await getGames(resp.access_token);
      console.log("resp_games", resp_games);
      setGames(resp_games.games);
      setStatus_game(resp_games.status);
    };

    respLogin();
  }, []);

  return (
    <>
      <div className="flex flex-col justify-center content-center items-center">
        <h2 className="text-base p-4 font-bold text-purple-800 ">
          Saved games
        </h2>
      </div>
      <div className="sticky top-10 z-40 bg-white">
        <Categories />
      </div>
      <div className="">
        {status_game === Status.Sucess && (
          <Grid columns="4" gap="4" width="auto">
            {games.map((e) => (
              <Item element={e.image} key={e.id} viewTrash={true} />
            ))}
          </Grid>
        )}
        {status_game === Status.Error && <div>Error</div>}
        {status_game === Status.Loading && <div>...cargando</div>}
      </div>
    </>
  );
}
