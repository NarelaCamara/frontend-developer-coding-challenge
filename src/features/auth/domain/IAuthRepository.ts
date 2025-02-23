import { IAuthResult } from "./IAuthResult";

export interface IAuthRepository {
  login: () => Promise<IAuthResult>;
}
