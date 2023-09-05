import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { Home } from "../pages/Home";
import { SignUp } from "../pages/SignUp";
import { MainLayout } from "../pages/MainLayout";
import { routes } from ".";
import { AuthContextProvider, useAuthContext } from "../contexts/auth";

// const Private = ({item}) => {
//   const signed = false;

//   return signed = 0 ? <Item /> : <Signin/>
// }

export const PiupiuRoutes = () => {
  const { following, home, signup } = routes;

  const { isAuthenticated } = useAuthContext();

  
  return (
    <BrowserRouter>
      
        <Routes>
          <Route
            path="/"
            element={!isAuthenticated ? <Login /> : <Navigate to={home} />}
          />

          <Route path={home} element={ isAuthenticated ? <MainLayout /> : <Navigate to='/' /> }>
            <Route path={home} element={<Home />} />
          </Route>

          <Route path={signup} element={<SignUp />} />
        </Routes>
    
    </BrowserRouter>
  );
};
