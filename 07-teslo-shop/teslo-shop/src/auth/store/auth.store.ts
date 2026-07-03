import {create} from "zustand";
import type {User} from "@/interfaces/user.interface.ts";
import {loginAction} from "@/auth/actions/login.action.ts";

type AuthStatus = 'authenticated' | 'unauthenticated' | 'loading';

type AuthState = {
  user: User | null;
  token: string | null;
  authStatus: AuthStatus;

  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((setState) => ({
  user: null,
  token: null,
  authStatus: 'loading',

  login: async (email: string, password: string) => {

    console.log({email, password});

    try {
      const data = await loginAction(email, password);
      localStorage.setItem('token', data.token);
      setState({user: data.user, token: data.token});
      return true;
    } catch (error) {
      setState({user: null, token: null});
      localStorage.removeItem('token');
      return false;
    }
  },
  logout: () => {
    setState({user: null, token: null});
    localStorage.removeItem('token');
  },
}));