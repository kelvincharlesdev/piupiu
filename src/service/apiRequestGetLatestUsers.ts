import { backendRoutes } from "../routes"
import { api } from "./api"



export const apiRequestGetLatestUsers =  async() =>{
    const { latestUsers } = backendRoutes

  try {
    const tokenUser = localStorage.getItem("token");

    const response = await api.get(latestUsers, {
      headers: {
        Authorization: `Bearer ${tokenUser}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Erro ao buscar pius", error);
  }

}