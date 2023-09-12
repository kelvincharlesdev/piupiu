import { backendRoutes } from "../routes";
import { api } from "./api";



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


export const apiRequestPostId = async (postId: string) => {

  try {
    const tokenUser = localStorage.getItem("token");

    const response = await api.get(`/posts/${postId} `, {
      headers: {
        Authorization: `Bearer ${tokenUser}`,
      },
    })

    return response.data
  } catch (error) {
    console.log('Erro dentro de apiRequestPostId', error);
    
  }

}

export const apiRequestPostReplies = async (postId: string) => {

  try {
    const tokenUser = localStorage.getItem("token");

    const response = await api.get(`/posts/${postId}/replies`, {
      headers: {
        Authorization: `Bearer ${tokenUser}`,
      },
    })

    return response.data
  } catch (error) {
    console.log('Erro dentro de apiRequestPostId', error);
    
  }

}
