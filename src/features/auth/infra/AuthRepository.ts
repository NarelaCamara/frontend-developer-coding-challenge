import axios from "axios";
import { IAuthRepository } from "../domain/IAuthRepository";
import { IAuthResult } from "../domain/IAuthResult";

export function AuthRepository(): IAuthRepository {
  const loginTwitchInstance = axios.create({
    baseURL: process.env.NEXT_APP_LOGIN_URL,
    timeout: 1000,
  });

  const login = async (): Promise<IAuthResult> => {
    await loginTwitchInstance.post(
      `/token?client_id=${process.env.NEXT_APP_CLIENTE_ID}&client_secret=${process.env.NEXT_APP_SECRET_KEY}&grant_type=client_credentials`
    );
    return Promise.resolve({
      access_token: "string",
      expires_in: 55656,
      token_type: "string",
    });
  };

  return { login };
}
