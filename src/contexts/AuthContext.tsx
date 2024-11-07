import { createContext, ReactNode, useState, useEffect } from "react";
import { api } from "../services/apiClient";
import { destroyCookie, setCookie, parseCookies } from "nookies";
import { toast } from "react-toastify";

type AuthContextData = {
  user: UserProps | null;
  isAuthenticated: boolean;
  signIn: (credentials: SignInProps) => Promise<void>;
  signOut: () => void;
  signUp: (credentials: SignUpProps) => Promise<void>;
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

export const AuthContext = createContext({} as AuthContextData);

export function signOut() {
  try {
    destroyCookie(undefined, '@auth.token');
    window.location.href = '/';
  } catch {
    console.log('Error logging out');
  }
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserProps | null>(null);
  const isAuthenticated = !!user;

  useEffect(() => {
    const { '@auth.token': token } = parseCookies();

    if (token) {
      api.defaults.headers['Authorization'] = `Bearer ${token}`;
      
      api.get('/me').then(response => {
        const { id, name, email, plan, points } = response.data;
        setUser({ id, name, email, plan, points });
      }).catch(() => {
        // Log out the user if an error occurs
        signOut();
      });
    }
  }, []);

  async function signIn({ email, password }: SignInProps) {
    try {
      const response = await api.post('/api/login', { email, password });
      const { id, name, plan, points, token } = response.data;

      setCookie(undefined, '@auth.token', token, {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: '/'
      });

      setUser({ id, name, email, plan, points });
      api.defaults.headers['Authorization'] = `Bearer ${token}`;

      toast.success("Successfully logged in!");

      // Redirect to the home page
      window.location.href = '/home';
    } catch (err) {
      toast.error("Error logging in!");
      console.log("Error logging in", err);
    }
  }

  async function signUp({ name, email, password }: SignUpProps) {
    try {
      await api.post('/api/register', { name, email, password });
      toast.success("Account created successfully!");

      // Redirect to the login page
      window.location.href = '/';
    } catch (err) {
      toast.error("Error signing up!");
      console.log("Error signing up", err);
    }
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn, signOut, signUp }}>
      {children}
    </AuthContext.Provider>
  );
}
