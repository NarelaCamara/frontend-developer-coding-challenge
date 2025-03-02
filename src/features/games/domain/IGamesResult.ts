import { Status } from "@/utils/utils";
import { IGame } from "./IGame";

export interface IGamesResult {
  game: Array<IGame>;
  status: Status;
}
