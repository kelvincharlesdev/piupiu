import { PiupiuList } from "../components/PiupiuList";

type ProfileProps = {
  postsRoute: "posts" | "likes";
};
export const Profile = ({ postsRoute }: ProfileProps) => {
  console.log(postsRoute);

  return (
    <>
      <main>
        <PiupiuList initialLoading={true} piupius={[]} />
      </main>
    </>
  );
};
