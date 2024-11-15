import axios, { AxiosError } from "axios";
import { parseCookies, destroyCookie } from "nookies";
import { AuthTokenError } from "./errors/AuthTokenError";

export function setupAPIClient(ctx = undefined, signOut?: () => void) {
  // Parse cookies to retrieve the token
  const cookies = parseCookies(ctx);

  const api = axios.create({
    baseURL: "https://kahoot-clone-rouge.vercel.app",
    headers: {
      Authorization: cookies['@auth.token'] ? `Bearer ${cookies['@auth.token']}` : ""
    },
    withCredentials: true, // Include credentials for cross-origin requests
  });

  // Add an interceptor to handle responses
  api.interceptors.response.use(
    (response) => {
      return response; // Return the response if successful
    },
    (error: AxiosError) => {
      if (error.response?.status === 401) {
        // Handle 401 Unauthorized errors
        if (typeof window !== "undefined") {
          // Client-side logic
          if (signOut) {
            signOut();
          }
        } else {
          // Server-side logic
          destroyCookie(ctx, "@auth.token"); // Destroy the token cookie
          return Promise.reject(new AuthTokenError());
        }
      }
      return Promise.reject(error);
    }
  );

  return api;
}
