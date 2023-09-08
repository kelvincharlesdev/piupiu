import { useParams } from "react-router-dom";
import { PiupiuList } from "../components/PiupiuList";
import { useQuery } from "@tanstack/react-query";
import { apiRequestGetUserPosts } from "../service/apiRequestGetUser";

type ProfileProps = {
  postsRoute: "posts" | "likes";
};
export const Profile = ({ postsRoute }: ProfileProps) => {
  console.log(postsRoute);
  const { handle } = useParams();

  const { data, isLoading} = useQuery({
    queryKey: ["posts", postsRoute],
    queryFn: async () => await apiRequestGetUserPosts({handle, postsRoute}),
  });
  
  return (
    <>
      <main>
        <PiupiuList initialLoading={isLoading} piupius={data || []} />
      </main>
    </>
  );
};
