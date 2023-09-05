import { useState } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { AuthFormLayout } from "../components/AuthFormLayout";
import { apiRequestSignUp } from "../service/apiRequestSignUp";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts/auth";

export const SignUp = () => {
  const [name, setName] = useState("");
  const [handle, setHandle] = useState("");
  const [password, setPassword] = useState("");
  const [signingUp, setSigningUp] = useState(false);
  const { isLoading, setIsLoading } = useAuthContext();
  const navigate = useNavigate();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setIsLoading(true);

      const statusApiRequestSignUp = await apiRequestSignUp({
        name,
        handle,
        password,
      });

      if (statusApiRequestSignUp === 201) {
        navigate("/");
      }
    } catch (error) {
      //TODO      vALIDAR SE O USUARIO JA TEM CADASTRO
      console.log(error, "Usúario não cadastrado");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthFormLayout>
      <form
        onSubmit={onSubmit}
        className="flex justify-center w-[min(384px,100%)] md:w-[min(566px,100%)] gap-4 flex-col"
      >
        <h1 className="text-5xl font-bold mb-8">Rolando agora</h1>
        <h2 className="text-2xl font-bold mb-8">Junte-se aos bons</h2>
        <Input
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="Handle"
          value={handle}
          onChange={(e) => setHandle(e.target.value)}
        />
        <Input
          placeholder="Senha"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button loading={isLoading} thickness="thick">
          Cadastrar
        </Button>
      </form>
    </AuthFormLayout>
  );
};
