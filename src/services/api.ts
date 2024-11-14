// setupAPIClient.ts
import axios, { AxiosError } from "axios";
import { parseCookies } from "nookies";
import { AuthTokenError } from "./errors/AuthTokenError";

export function setupAPIClient(ctx = undefined, signOut?: () => void) {
  let cookies = parseCookies(ctx);

  const api = axios.create({
    baseURL: "http://localhost:3000",
    headers: {
      Authorization: `Bearer ${cookies['@auth.token']}`
    }
  });

  api.interceptors.response.use(
    response => {
      return response;
    },
    (error: AxiosError) => {
      if (error.response?.status === 401) {
        // Only sign out if this code is running on the client side
        if (typeof window !== "undefined" && signOut) {
          signOut();
        } else {
          return Promise.reject(new AuthTokenError());
        }
      }
      return Promise.reject(error);
    }
  );

  return api;
}
