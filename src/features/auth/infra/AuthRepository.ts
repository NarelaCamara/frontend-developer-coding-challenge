import axios from "axios";
import { IAuthRepository } from "../domain/IAuthRepository";
import { IAuthResult } from "../domain/IAuthResult";

export function AuthRepository(): IAuthRepository {
  const loginTwitchInstance = axios.create({
    baseURL: process.env.NEXT_APP_LOGIN_URL,
    timeout: 1000,
  });

  const login = async (): Promise<IAuthResult> => {
    const resp: IAuthResult = await loginTwitchInstance.post(
      `/token?client_id=${process.env.NEXT_APP_CLIENTE_ID}&client_secret=${process.env.NEXT_APP_SECRET_KEY}&grant_type=client_credentials`
    );
    return resp;
  };

  return { login };
}
