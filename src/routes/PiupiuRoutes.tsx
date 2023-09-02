import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { Home } from "../pages/Home";
import { SignUp } from "../pages/SignUp";
import { MainLayout } from "../pages/MainLayout";

export const PiupiuRoutes = () => {
  
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/home" element={<MainLayout />} >
          <Route path="/home" element={<Home />} />
        </Route>
        
        <Route path="/signup" element={<SignUp />} />

      </Routes>
    </BrowserRouter>
  );
};
