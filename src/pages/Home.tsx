import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { NewPiupiu } from "../components/NewPiupiu";
import { Piu } from "../types/Pius";
import NavTitle from "../components/NavTitle";
import { PiupiuList } from "../components/PiupiuList";
import { usePagination } from "../hooks/useScroll";
import { piuComponentHeight } from "../consts";
import { User } from "../types/Users";
import { routes } from "../routes";
import { apiRequestGetList } from "../service/apiRequestList";
import { useAuthContext } from "../contexts/auth";
import {
  apiRequestGetPosts,
  apiRequestPostPosts,
} from "../service/apiRequestGetPosts";
import { useInfiniteQuery } from "@tanstack/react-query";

export const Home = () => {
  const [textValue, setTextValue] = useState("");
  const [piupius, setPiupius] = useState<Piu[]>([]);
  const [newData, setNewData] = useState<Piu[] | undefined>();
  const [addingPiupiu, setAddingPiupiu] = useState(false);

  const topRef = useRef<HTMLDivElement | null>(null);
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const itemsPerPage = Math.ceil(window.screen.height / piuComponentHeight);

  const { user } = useAuthContext();

  const { scrollTop } = usePagination({
    onBottomEnter: () => {
      hasNextPage && fetchNextPage();
    },
    onTopEnter: () => {
      setNewData([]);
    },
    onTopLeave: () => {},
    bottomRef,
    topRef,
    refreshVariable: piupius,
  });

  const { fetchNextPage, hasNextPage, isLoading, isFetching } =
    useInfiniteQuery(
      ["piu"],
      (params) => {
        return apiRequestGetList({
          page: params.pageParam ? params.pageParam : 1,
          per_page: itemsPerPage,
        });
      },
      {
        getNextPageParam: (lastPage, allPages) => {
          const totalPages = allPages[0].totalPages;
          return lastPage.currentPage < totalPages
            ? lastPage.currentPage + 1
            : undefined;
        },
        onSuccess: (response) =>
          setPiupius(response?.pages.flatMap((page) => page.data)),
        refetchInterval: 20000,
        structuralSharing(oldData, newData) {
          if (oldData?.pages) {
            if (oldData.pages[0] !== newData.pages[0]) {
              const diferença =
                newData.pages[0].totalPius - oldData?.pages[0].totalPius;
              setNewData(newData.pages[0].data.slice(0, diferença));
            }
          }
          return newData;
        },
      }
    );

  const handleSubmit = async (e: React.FormEvent, formValue: string) => {
    e.preventDefault();
    await newPiuPiu(formValue);
  };

  const newPiuPiu = async (formValue: string) => {
    try {
      setAddingPiupiu(true);
      const response = await apiRequestPostPosts(formValue);
      setPiupius([response, ...piupius]);
      setTextValue("");
    } catch (error) {
      console.log("Error dentro do newPiupiu");
      setAddingPiupiu(false);
    } finally {
      setAddingPiupiu(false);
    }
  };

  return (
    <div ref={topRef} className="relative">
      <NavTitle
        position="sticky"
        navOptions={[
          { title: "Para você", path: routes.home },
          { title: "Perseguindo", path: routes.following },
        ]}
        refreshButton={{
          newPosts: newData,
          onClick: () => {
            scrollTop();
          },
        }}
      >
        <h2 className="text-xl font-bold px-4 py-3 ">Casa</h2>
      </NavTitle>
      <NewPiupiu
        loading={addingPiupiu}
        value={textValue}
        onChange={(e) => setTextValue(e.target.value)}
        onSubmit={handleSubmit}
        user={user as User}
      />
      <PiupiuList
        initialLoading={isLoading}
        topRef={topRef}
        bottomRef={bottomRef}
        loading={isFetching}
        piupius={piupius}
        onChange={() => {}}
      />
    </div>
  );
};
