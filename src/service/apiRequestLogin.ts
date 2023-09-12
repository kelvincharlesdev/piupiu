import { IPostLoginTypes } from "../types/IPostLoginTypes";
import { api } from "./api";

export const apiRequestLogin = async ({
  handle,
  password,
}: IPostLoginTypes) => {
  try {
    const response = await api.post("/login", {
      handle,
      password,
    });

    return response;
  } catch (error) {
    console.error("Erro ao fazer Login:", error);
  }
};
