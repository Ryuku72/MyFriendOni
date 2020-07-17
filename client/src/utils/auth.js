import { createContext, useContext } from 'react';

export const AuthContext = createContext();

export function useAuth(props) {
  return useContext(AuthContext);
}