
import { User, UserCredential } from "firebase/auth";

export interface SignUpCredentials {
  name: string;
  email: string;
  password: string;
}

export interface SignInCredentials {
  email: string;
  password: string;
}

export interface AuthContextType {
  user: User | null;
  loading: boolean;
  signUp: (credentials: SignUpCredentials) => Promise<UserCredential>;
  signIn: (credentials: SignInCredentials) => Promise<UserCredential>;
  signOut: () => Promise<void>;
}
