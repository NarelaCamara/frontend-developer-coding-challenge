import { IAuthRepository } from "../domain/IAuthRepository";
import { IAuthResult } from "../domain/IAuthResult";

export function login(AuthRepository: IAuthRepository) {
  return async (): Promise<IAuthResult> => {
    return await AuthRepository.login();
  };
}
