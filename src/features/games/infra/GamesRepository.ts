/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { IGamesRepository } from "../domain/IGamesRepository";
import { IGamesResult } from "../domain/IGamesResult";
import { Game } from "./Game";
import { Status } from "@/utils/utils";

export function GamesRepository(): IGamesRepository {
  const gamesInstance = axios.create({
    baseURL: "/api/igdb",
    timeout: 1000,
  });

  const getGames = async (accessToken: string): Promise<IGamesResult> => {
    try {
      const { data } = await gamesInstance.post(
        `/games`,
        "fields cover.*; fields platforms.*;  fields genres.*;fields name;",
        {
          headers: {
            "Client-ID": process.env.NEXT_PUBLIC_CLIENTE_ID,
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      return {
        games: data.map((e: any) => Game(e)),
        status: Status.Sucess,
      };
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error: any) {
      return {
        games: [],
        status: Status.Error,
      };
    }
  };

  return { getGames };
}
