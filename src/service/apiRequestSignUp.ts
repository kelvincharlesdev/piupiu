import { api } from "./api";

export interface IApiRequestSignUp {
  name: string;
  handle: string;
  password: string;
}

export const apiRequestSignUp = async ({
  handle,
  name,
  password,
}: IApiRequestSignUp) => {
  try {
    const response = await api.post("/signup", {
        handle,
        name,
        password
    });

    const {status} = response
    

   return status
    
  } catch (error) {
    console.log(error, "Usuario não cadastrado");
      }
};
