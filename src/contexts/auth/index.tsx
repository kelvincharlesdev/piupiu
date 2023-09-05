import { createContext, useContext, useEffect, useState } from "react";
import { User } from "../../types/Users";

import '../../types/Users'


interface IAuthLogin {
  isAuthenticated: boolean;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  user?: User
  setUser: (user: User) => void
}




export const AuthContext = createContext({} as IAuthLogin);

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const tokenUser = localStorage.getItem("token");
    const userData = localStorage.getItem('user')
   
    if (tokenUser) {
      setIsAuthenticated(true);
      
    } else {
      setIsAuthenticated(false);
    }

    if(userData) {
      setUser(JSON.parse(userData))
    }
    
  }, []);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, isLoading, setIsLoading , user, setUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("Fora do AuhtProvider");
  }

  return context;
};
