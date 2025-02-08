import { useQuery } from "react-query";
import { AXIOS_INSTANCE } from "./api/Client.ts";

// https://api.themoviedb.org/3/search/movie search movies buscador uwu peticiones get
// https://api.themoviedb.org/3/discover/movie Filtros, se utilizan con id cada filtro (Action = 10770) peticiones get
export const getPopularMovie = async () => {
  try {
    const { data } = await AXIOS_INSTANCE.get("/movie/popular");
    return data;
  } catch (error) {
    console.log("error trayendo peliculas", error);
  }
};
export const getPopularActor = async () => {
  const { data } = await AXIOS_INSTANCE.get("/person/popular");
  return data;
};

export const usePopularMovie = () => {
  return useQuery(["Movies"], getPopularMovie);
};
export const usePopularActor = () => {
  return useQuery(["Actor"], getPopularActor);
};
