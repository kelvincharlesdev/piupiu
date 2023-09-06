import { backendRoutes } from "../routes";
import { api } from "./api";

interface IPostsPros {
  id?: string;
  author: {
    id: string;
    handle: string;
    image_url: string;
    verified: boolean;
    description: string;
  };
}


interface IPagesProsps{
    page: number;
    per_page: number;

}

export const apiRequestGetList = async ({page, per_page} : IPagesProsps) => {
  const { pius } = backendRoutes;
  try {
    const tokenUser = localStorage.getItem("token");

    const response = await api.get(pius, {
      headers: {
        Authorization: `Bearer ${tokenUser}`,
      },
      params: {
        page,
        per_page,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Erro ao buscar pius", error);
  }
};
