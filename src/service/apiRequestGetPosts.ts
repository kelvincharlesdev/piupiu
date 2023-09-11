import { backendRoutes } from "../routes";
import { api } from "./api";





export const apiRequestPostPosts = async ( message: string) => {
  const { posts } = backendRoutes;
  try {
    const tokenUser = localStorage.getItem("token");

   const response = await api.post(posts, {message}, {
      headers: {
        Authorization: `Bearer ${tokenUser}`,
      } 
    });

    return response.data
  } catch (error) {
    console.error("Erro ao buscar pius", error);
  }
};
