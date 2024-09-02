import axios from "axios";
import { useQuery } from "react-query";
const fetchSuperHeros = () => {
  return axios.get("http://localhost:4000/superheros");
};
export const useSuperHeros = ({ onSuccess, onError }) => {
  return useQuery("super-heros", fetchSuperHeros, {
    staleTime: 30000, // helps u reduce the number OF NETWORK REQUEST
    //refetchOnMount: true, //this refetches on mount we can use it to manage number of requests :: this can also be 'always'

    enabled: false, // this does not fetch the data on mount
    onSuccess: onSuccess,
    onError: onError,
    // select: (data) => {
    //   const heroNames = data.data?.map((hero) => hero.name);
    //   return heroNames;
    // },
  });
};
