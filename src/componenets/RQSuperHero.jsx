import { useSuperHeroData } from "../hooks/useSuperHeroData";
import { useParams } from "react-router-dom";
export const RqSuperHero = () => {
  const {heroId}=useParams();
  const {data,isLoading}=useSuperHeroData(heroId);

  if(isLoading){
    return <h2>...isLoading</h2>
  }
  return <div>{data.data?.name} -{data.data?.alterEgo}</div>;
};
