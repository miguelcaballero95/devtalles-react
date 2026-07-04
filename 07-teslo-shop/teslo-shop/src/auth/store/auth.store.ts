import {create} from "zustand";
import type {User} from "@/interfaces/user.interface.ts";
import {loginAction} from "@/auth/actions/login.action.ts";
import {checkAuthAction} from "@/auth/actions/check-auth.action.ts";

type AuthStatus = 'authenticated' | 'unauthenticated' | 'loading';

type AuthState = {
  user: User | null;
  token: string | null;
  authStatus: AuthStatus;

  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  checkAuthStatus: () => Promise<boolean>;
}

export const useAuthStore = create<AuthState>((setState) => ({
  user: null,
  token: null,
  authStatus: 'loading',

  login: async (email: string, password: string) => {
    try {
      const data = await loginAction(email, password);
      localStorage.setItem('token', data.token);
      setState({user: data.user, token: data.token, authStatus: 'authenticated'});
      return true;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setState({user: null, token: null, authStatus: 'unauthenticated'});
      localStorage.removeItem('token');
      return false;
    }
  },
  logout: () => {
    setState({user: null, token: null, authStatus: 'unauthenticated'});
    localStorage.removeItem('token');
  },
  checkAuthStatus: async () => {
    try {
      const {user, token} = await checkAuthAction();
      setState({user, token, authStatus: 'authenticated'});
      return true;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setState({user: null, token: null, authStatus: 'unauthenticated'});
      return false;
    }
  }
}));