import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { Home } from "../pages/Home";
import { SignUp } from "../pages/SignUp";
import { MainLayout } from "../pages/MainLayout";
import { routes } from ".";
import { AuthContextProvider, useAuthContext } from "../contexts/auth";
import { SinglePiupiu } from "../pages/SinglePiupiu";

// const Private = ({item}) => {
//   const signed = false;

//   return signed = 0 ? <Item /> : <Signin/>
// }

export const PiupiuRoutes = () => {
  const { following, home, signup, login } = routes;

  const { isAuthenticated } = useAuthContext();

  return (
    <BrowserRouter>
      <Routes>
        {isAuthenticated ? (
          
          <Route element={<MainLayout />}>
            <Route path={home} element={<Home />} />
            <Route path={following} element={<Home />} />
            <Route path="/*" element={<Navigate replace to={home} />} />
          </Route>
        ) : (
          <>
            <Route path="/*" element={<Navigate replace to="/" />} />
            <Route path={login} element={<Login />} />
            <Route path={signup} element={<SignUp />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};


