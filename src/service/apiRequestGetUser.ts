import { api } from "./api";

interface IPostsLikes {
  handle: string | undefined
  postsRoute: string
}

export const apiRequestGetUser = async ( handle : string | undefined ) => {
    const tokenUser = localStorage.getItem("token")
    try {
  
      const response = await api.get(`users/${handle}`, {
        headers: {
          Authorization: `Bearer ${tokenUser}`
        }
      });

      return response.data
  
    } catch (error) {
      console.error("Error ao buscar perfil ", error);
      throw error;
    }
  };
  
  export const apiRequestGetUserPostsLikes = async ( {handle, postsRoute} : IPostsLikes ) => {
    const tokenUser = localStorage.getItem("token")
    try {
  
      const response = await api.get(postsRoute === 'posts' ? `users/${handle}/posts` : `users/${handle}/likes`, {
        headers: {
          Authorization: `Bearer ${tokenUser}`
        }
      });

      return response.data
  
    } catch (error) {
      console.error("Error ao buscar perfil ", error);
      throw error;
    }
  };