import axios from "axios";
import { useQuery } from "react-query";
import { useSuperHeros } from "../hooks/useSuperHeros";
import { Link } from "react-router-dom";

export const RQSuperHeros = () => {
  const onSuccess = () => {
    console.log("on sucess side effects ");
  };

  const onError = () => {
    console.log("on error  side effects ");
  };
  const { isLoading, data, isError, error, isFetching, refetch } =
    useSuperHeros(onSuccess, onError);

  if (isLoading || isFetching) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      {data?.data?.map((hero) => {
        return <div key={hero.id} ><Link to={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link></div>;
      })}

      <button
        onClick={() => {
          refetch();
        }}
      >
        Fetch Heros
      </button>
    </>
  );
};
