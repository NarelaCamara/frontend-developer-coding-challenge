import { IAuthRepository } from "../domain/IAuthRepository";
import { IAuthResult } from "../domain/IAuthResult";
import { AuthRepository } from "../infra/AuthRepository";

export function loginRepository(
  AuthRepository: IAuthRepository
): Promise<IAuthResult> {
  return AuthRepository.login();
}

export function login() {
  return loginRepository(AuthRepository());
}
