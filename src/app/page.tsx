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

  console.log("status_game", status_game);

  useEffect(() => {
    const respLogin = async () => {
      const resp = await login();
      const resp_games = await getGames(resp.access_token);
      console.log("resp_games", resp_games);
      setGames(resp_games.game);
      setStatus_game(resp_games.status);
    };

    respLogin();
  }, []);

  return (
    <>
      <Categories />
      {status_game === Status.Sucess && (
        <Grid columns="4" gap="4" width="auto">
          {games.map((e) => (
            <Item element={e.image} key={e.id} viewTrash={true} />
          ))}
        </Grid>
      )}
      {status_game === Status.Error && <div>Error</div>}
      {status_game === Status.Loading && <div>...cargando</div>}
    </>
  );
}
