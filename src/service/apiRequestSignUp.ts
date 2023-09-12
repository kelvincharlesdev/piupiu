import { IApiRequestSignUp } from "../types/IApiRequestSignUp";
import { api } from "./api";

export const apiRequestSignUp = async ({
  handle,
  name,
  password,
}: IApiRequestSignUp) => {
  try {
    const response = await api.post("/signup", {
      handle,
      name,
      password,
    });

    const { status } = response;

    return status;
  } catch (error) {
    console.log(error, "Usuario não cadastrado");
  }
};
