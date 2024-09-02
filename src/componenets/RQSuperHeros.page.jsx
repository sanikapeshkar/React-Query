import axios from "axios";
import { useQuery } from "react-query";

const fetchSuperHeros = () => {
  return axios.get("http://localhost:4000/superheros");
};
export const RQSuperHeros = () => {
  const { isLoading, data, isError, error, isFetching ,refetch} = useQuery(
    "super-heros",
    fetchSuperHeros,
    {
      staleTime: 30000, // helps u reduce the number OF NETWORK REQUEST
      //refetchOnMount: true, //this refetches on mount we can use it to manage number of requests :: this can also be 'always'

      enabled:false  // this does not fetch the data on mount
    }
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

      <button onClick={()=>{refetch()}}>Fetch Heros</button>
    </>
  );
};
