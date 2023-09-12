import { backendRoutes } from "../routes";
import { IPagesProsps } from "../types/IPagesProsps";
import { api } from "./api";

export const apiRequestGetList = async ({ page, per_page }: IPagesProsps) => {
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
    });

    return response.data;
  } catch (error) {
    console.log("Erro dentro de apiRequestPostId", error);
  }
};

export const apiRequestPostReplies = async (postId: string) => {
  try {
    const tokenUser = localStorage.getItem("token");

    const response = await api.get(`/posts/${postId}/replies`, {
      headers: {
        Authorization: `Bearer ${tokenUser}`,
      },
    });

    return response.data;
  } catch (error) {
    console.log("Erro dentro de apiRequestPostReplies", error);
  }
};

export const apiRequestPostReply = async (postId: string, message: string) => {
  try {
    const tokenUser = localStorage.getItem("token");

    const response = await api.post(
      `/posts/${postId}/reply`,
      { message },
      {
        headers: {
          Authorization: `Bearer ${tokenUser}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.log("Erro dentro de apiRequestPostReply", error);
  }
};
