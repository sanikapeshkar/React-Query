import axios from "axios";
import { useQuery } from "react-query";

const fetchSuperHeros = () => {
  return axios.get("http://localhost:4000/superheros");
};
export const RQSuperHeros = () => {
  const { isLoading, data, isError, error, isFetching } = useQuery(
    "super-heros",
    fetchSuperHeros
  );

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      {data?.data.map((hero) => {
        return <div>{hero.name}</div>;
      })}
    </>
  );
};
