import { IGamesRepository } from "../domain/IGamesRepository";
import { IGamesResult } from "../domain/IGamesResult";
import { GamesRepository } from "../infra/GamesRepository";

export function getGamesRepository(
  gamesRepository: IGamesRepository,
  accessToken: string
): Promise<IGamesResult> {
  return gamesRepository.getGames(accessToken);
}

export function getGames(accessToken: string) {
  return getGamesRepository(GamesRepository(), accessToken);
}
