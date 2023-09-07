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
import { apiRequestGetList } from "../service/apiRequestGetList";
import { useAuthContext } from "../contexts/auth";
import { apiRequestGetPosts } from "../service/apiRequestGetPosts";

export const Home = () => {
  const [textValue, setTextValue] = useState("");
  const [piupius, setPiupius] = useState<Piu[]>([]);
  const [newData, setNewData] = useState<Piu[] | undefined>();
  const [addingPiupiu, setAddingPiupiu] = useState(false);

  const topRef = useRef<HTMLDivElement | null>(null);
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const itemsPerPage = Math.ceil(window.screen.height / piuComponentHeight);

  const [isloading , setIsLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)

  const {user} = useAuthContext()

  const { scrollTop } = usePagination({
    onBottomEnter: () => setCurrentPage(currentPage + 1 ),
    onTopEnter: () => {},
    onTopLeave: () => {},
    bottomRef,
    topRef,
    refreshVariable: piupius,
  });

  const handleSubmit = async (e: React.FormEvent, formValue: string) => {
    e.preventDefault();
    setAddingPiupiu(true);
    // axios
    //   .post("/posts", {
    //     message: formValue,
    //   })
    //   .then(() => {
    //     setTextValue("");
    //   })
    //   .finally(() => {
    //     setAddingPiupiu(false);
    //   });

   

    await newPiuPiu(formValue)



  };


  const newPiuPiu = async (formValue : string) => {

    try {
      setAddingPiupiu(true)
      await apiRequestGetPosts(formValue)
      setTextValue("")

      // TODO Fazer logica para passar o novo piu para lista com REACT QUERY

      
      // console.log('Dentro de newPiupiu',response );
      
    } catch (error) {
      console.log('Error dentro do newPIUPIU');
      setAddingPiupiu(false)
      
    } finally{
      setAddingPiupiu(false);
    }

    

  }


  const piusData = async () => {
    try {
      setIsLoading(true)
      const response = await apiRequestGetList({page: currentPage, per_page:10});

      const dataPius = response.data;

      setPiupius([...piupius, ...dataPius]);



    } catch (error) {
      //TODO   Validar algum erro
      console.log(error, "Erro dentro do piupiulist");
    } finally{
      setIsLoading(false)
    }
  };

  useEffect(() => {
    piusData();
  }, [currentPage]);

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
        initialLoading={false}
        topRef={topRef}
        bottomRef={bottomRef}
        loading={isloading}
        piupius={piupius}
        onChange={() => {}}
      />
    </div>
  );
};
