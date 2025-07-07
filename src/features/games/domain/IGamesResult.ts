import { Status } from "@/utils/utils";
import { IGame } from "./IGame";

export interface IGamesResult {
  games: Array<IGame>;
  status: Status;
}
