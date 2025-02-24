import axios from "axios";
import { IGamesRepository } from "../domain/IGamesRepository";
import { IGamesResult } from "../domain/IGamesResult";

export function GamesRepository(): IGamesRepository {
  const gamesInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    timeout: 1000,
  });

  const getGames = async (accessToken: string): Promise<IGamesResult> => {
    const { data } = await gamesInstance.post(
      `/games`,
      { query: "fields *;" },
      {
        headers: {
          "Client-ID": process.env.NEXT_PUBLIC_CLIENTE_ID,
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return data;
  };

  return { getGames };
}
