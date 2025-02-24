import { IGamesResult } from "./IGamesResult";

export interface IGamesRepository {
  getGames: (accessToken: string) => Promise<IGamesResult>;
}
