import { useReducer, useState } from "react";
import Input from "../Input";
import ProfilePic from "../ProfilePic";
import { User } from "../../types/Users";
import Button from "../Button";
import { Textarea } from "../Textarea";
import { useQuery } from "@tanstack/react-query";
import { apiRequestPutUser } from "../../service/apiRequestUserProfile";
import { useParams } from "react-router-dom";
import { AuthContext, useAuthContext } from "../../contexts/auth";


type ProfileEditFormProps = {
  onSubmit?: (user: Partial<User>) => void;
  user: User;
};

export const ProfileEditForm = ({ onSubmit, user }: ProfileEditFormProps) => {
  const [imageUrl, setImageUrl] = useState(user?.image_url);
  const [description, setDescription] = useState(user.description || "");
  const [name, setName] = useState(user.name);
 
  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const userData: Partial<User> = {
      description,
      image_url: imageUrl,
      name,
    };
   
    onSubmit?.(userData);
  };

  // const { data: editProfile } = useQuery({
  //   queryKey: ["profileEditData"],
  //   queryFn: async () =>
  //     await apiRequestPutUser({
  //       description,
  //       handle,
  //       image_url: imageUrl,
  //       name,
  //     }),
  // });


  
  

  return (
    <>
      <form
        onSubmit={handleOnSubmit}
        className="w-[min(500px,90vw)] p-8 select-none gap-4 items-center flex-col flex"
      >
        <ProfilePic
          variant="reallyBig"
          userName=""
          image={imageUrl || user?.image_url}
        />
        <Input
          placeholder="Link da imagem"
          value={imageUrl || user?.image_url}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <Input
          defaultValue={user.name}
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Textarea
          variant="styled"
          value={description || user?.description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Descrição"
        />
        <Button type="submit">Salvar</Button>
      </form>
    </>
  );
};
