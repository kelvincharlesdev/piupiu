import { backendRoutes } from "../routes";
import { api } from "./api";





export const apiRequestGetPosts = async ( message: string) => {
  const { posts } = backendRoutes;
  try {
    const tokenUser = localStorage.getItem("token");

    await api.post(posts, {message}, {
      headers: {
        Authorization: `Bearer ${tokenUser}`,
      } 
    });

  } catch (error) {
    console.error("Erro ao buscar pius", error);
  }
};
