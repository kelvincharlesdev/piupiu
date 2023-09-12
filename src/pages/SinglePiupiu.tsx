import { useCallback, useEffect, useRef, useState } from "react";
import { CompletePiupiu } from "../components/CompletePiupiu";
import { NavHeader } from "../components/NavHeader";
import { Piu } from "../types/Pius";
import NewPiupiu from "../components/NewPiupiu";
import { PiupiuList } from "../components/PiupiuList";
import { User } from "../types/Users";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import {
  apiRequestPostId,
  apiRequestPostReplies,
  apiRequestPostReply,
} from "../service/apiRequestList";
import { useAuthContext } from "../contexts/auth";

export const SinglePiupiu = () => {
  const [replies, setReplies] = useState<Piu[]>();
  const [liked, setLiked] = useState(false);
  const [post, setPost] = useState<Piu>();
  const [userReply, setuserReply] = useState("");
  const [replying, setReplying] = useState(false);
  const { id } = useParams();
  const { user } = useAuthContext();

  const { data } = useQuery({
    queryKey: ["SinglePiu"],
    queryFn: async () => await apiRequestPostId(id as string),
  });

  useEffect(() => {
    getReplies();
    setPost(data);
  }, [userReply]);

  const getReplies = useCallback(async () => {
    try {
      const response = await apiRequestPostReplies(id as string);
      setReplies(response.replies);
      return response;
    } catch (error) {}
  }, []);

  const handleSubmit = async (e: React.FormEvent, replyText?: string) => {
    console.log(e, replyText);

    try {
      setReplying(true);
      await apiRequestPostReply(id as string, replyText as string);
      setuserReply("");
    } catch (error) {
      console.log("Erro dentro de handleLike -  apiRequestPostReply", error);
    } finally {
      setReplying(false);
    }
  };

  const handleLike = useCallback(async () => {}, []);

  return (
    <>
      <NavHeader title="Post" />
      <CompletePiupiu
        author={data?.author}
        body={data?.message || ""}
        reactions={{
          reactions: {
            comment: {
              active: false,
              total: data?.replies?.total,
            },
            repiu: {
              active: false,
              total: 0,
            },
            like: {
              total: data?.likes?.total,
              active: liked,
              onClick: handleLike,
            },
          },
        }}
      />
      <NewPiupiu
        onChange={(e) => setuserReply(e.target.value)}
        onSubmit={handleSubmit}
        user={user as User}
        variant="reply"
        value={userReply}
        loading={replying}
      />
      <PiupiuList piupius={replies} onChange={getReplies} />
    </>
  );
};
