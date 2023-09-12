import { User } from "./Users";

export interface IAuthLogin {
  isAuthenticated: boolean;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  user?: User;
  setUser: (user: User) => void;
}
