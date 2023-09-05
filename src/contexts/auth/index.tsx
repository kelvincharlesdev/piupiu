import { createContext, useContext, useEffect, useState } from "react";

 interface IAuthLogin {
 
  isAuthenticated: boolean;
  setIsAuthenticated: (isAuthenticated : boolean) => void
  isLoading: boolean
  setIsLoading: (isLoading : boolean) => void;

}

export const AuthContext = createContext({} as IAuthLogin);

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false)
   

  useEffect(() => {
    const tokenUser = localStorage.getItem("userPiu");

    if (tokenUser) {
      setIsAuthenticated(true);
    } else {
        setIsAuthenticated(false);
    }

  },  []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated , isLoading, setIsLoading }}>
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
