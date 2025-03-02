/* eslint-disable @typescript-eslint/no-explicit-any */
import { IGame } from "../domain/IGame";

export const Game = (json: any): IGame => {
  const size = "720p";
  const image = json.screenshots[0].image_id || "sin información";
  return {
    id: json.id || "sin información",
    image: `https://images.igdb.com/igdb/image/upload/t_${size}/${image}.jpg`,
  };
};
