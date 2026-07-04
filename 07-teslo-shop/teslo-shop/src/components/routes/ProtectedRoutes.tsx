import type {PropsWithChildren} from "react";
import {useAuthStore} from "@/auth/store/auth.store.ts";
import {Navigate} from "react-router";

export const AuthenticatedRoute = ({children}: PropsWithChildren) => {

  const {authStatus} = useAuthStore();

  if (authStatus === 'loading') return null;

  if (authStatus === 'unauthenticated') {
    return <Navigate to='/auth/login'/>
  }

  return children;
};

export const UnAuthenticatedRoute = ({children}: PropsWithChildren) => {

  const {authStatus} = useAuthStore();

  if (authStatus === 'loading') return null;

  if (authStatus === 'authenticated') {
    return <Navigate to='/'/>
  }

  return children;
};

export const AdminRoute = ({children}: PropsWithChildren) => {

  const {authStatus, isAdmin} = useAuthStore();

  if (authStatus === 'loading') return null;

  if (authStatus === 'unauthenticated') {
    return <Navigate to='/auth/login'/>
  }

  if (!isAdmin()) {
    return <Navigate to='/'/>
  }

  return children;
};