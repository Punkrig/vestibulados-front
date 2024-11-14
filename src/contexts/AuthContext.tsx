import { createContext, ReactNode, useState, useEffect, useContext } from "react";
import { api } from "../services/apiClient";
import { destroyCookie, setCookie, parseCookies } from "nookies";
import { toast } from "react-toastify";

// Define types
type AuthContextData = {
  user: UserProps | null;
  isAuthenticated: boolean;
  signIn: (credentials: SignInProps) => Promise<boolean>;
  signOut: () => boolean;
  signUp: (credentials: SignUpProps) => Promise<boolean>;
};

type UserProps = {
  id: string;
  name: string;
  email: string;
  plan: string;
  points: number;
};

type SignInProps = {
  email: string;
  password: string;
};

type SignUpProps = {
  name: string;
  email: string;
  password: string;
};

type AuthProviderProps = {
  children: ReactNode;
};

// Create context
export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserProps | null>(null);
  const isAuthenticated = !!user;

  // Load user from token on initial render
  useEffect(() => {
    const cookies = parseCookies();
    const token = cookies['@auth.token'];

    if (token) {
      api.defaults.headers['Authorization'] = `Bearer ${token}`;
      api.get('/me')
        .then(response => {
          const { id, name, email, plan, points } = response.data;
          setUser({ id, name, email, plan, points });
        })
        .catch(() => {
          signOut(); // Automatically sign out on error
        });
    }
  }, []);

  // Sign out function with window.location.href for full reload
  function signOut(): boolean {
    try {
      destroyCookie(undefined, '@auth.token');
      setUser(null);
      window.location.href = '/'; // Full reload to clear session
      return true;
    } catch {
      return false;
    }
  }

  // Sign in function with status return
  async function signIn({ email, password }: SignInProps): Promise<boolean> {
    try {
      const response = await api.post('/api/login', { email, password });
      const { id, name, plan, points, token } = response.data;

      // Set token in cookies
      setCookie(undefined, '@auth.token', token, {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: '/'
      });

      // Set user state and update authorization header
      setUser({ id, name, email, plan, points });
      api.defaults.headers['Authorization'] = `Bearer ${token}`;
      toast.success("Successfully logged in!");
      return true; // Sign in success
    } catch {
      toast.error("Error logging in!");
      return false; // Sign in failure
    }
  }

  // Sign up function with status return
  async function signUp({ name, email, password }: SignUpProps): Promise<boolean> {
    try {
      await api.post('/api/register', { name, email, password });
      toast.success("Account created successfully!");
      return true; // Sign up success
    } catch {
      toast.error("Error signing up!");
      return false; // Sign up failure
    }
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn, signOut, signUp }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to use auth context
export const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
