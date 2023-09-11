import { useParams } from "react-router-dom";
import { PiupiuList } from "../components/PiupiuList";
import { useQuery } from "@tanstack/react-query";
import { apiRequestGetUserPostsLikes } from "../service/apiRequestUserProfile";
import { useAuthContext } from "../contexts/auth";

type ProfileProps = {
  postsRoute: "posts" | "likes";
};
export const Profile = ({ postsRoute }: ProfileProps) => {
  const { handle } = useParams();
  const {user} = useAuthContext()
  const { data, isLoading} = useQuery({
    queryKey: ["posts", postsRoute , user, handle],
    queryFn: async () => await apiRequestGetUserPostsLikes({handle, postsRoute}),

  });
  
  return (
    <>
      <main>
        <PiupiuList initialLoading={isLoading} piupius={data || []} />
      </main>
    </>
  );
};
