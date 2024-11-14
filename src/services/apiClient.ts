// api.ts
import { setupAPIClient } from "./api";
import { useAuth } from "../contexts/AuthContext";

// Export a default `api` instance without `signOut` handling for non-component usage
export const api = setupAPIClient(); // Default instance without signOut handling

// Custom hook to provide `signOut` from the context within components
export function useAPIClient() {
  const { signOut } = useAuth();
  return setupAPIClient(undefined, signOut); // Pass `signOut` for components
}
