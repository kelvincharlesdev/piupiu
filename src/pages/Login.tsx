import { useState } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { AuthFormLayout } from "../components/AuthFormLayout";
import { Link, useNavigate } from "react-router-dom";
import { apiRequestLogin } from "../service/apiRequestLogin";
import { useAuthContext } from "../contexts/auth";

export const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  // const [isLoading, setIsLoading] = useState<boolean>(false);
  const { setIsAuthenticated, isLoading, setIsLoading } = useAuthContext();
  const navigate = useNavigate();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const responsePostLogin = await apiRequestLogin({
        handle: user,
        password,
      });

      console.log(responsePostLogin);

      if (responsePostLogin?.status === 200) {
        localStorage.setItem("userPiu", JSON.stringify(responsePostLogin?.data));
        setIsAuthenticated(true);
        navigate("/home");
      }
      
    } catch (error) {
      console.error("Erro ao fazer Login:", error);
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
          placeholder="Handle"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <Input
          placeholder="Senha"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button loading={isLoading} thickness="thick">
          Login
        </Button>
        <Link className="pt-4 hover:underline mx-auto " to="/signup">
          Cadastrar
        </Link>
      </form>
    </AuthFormLayout>
  );
};
