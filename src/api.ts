import { useQuery } from "react-query";
import { AXIOS_INSTANCE } from "./api/Client.ts";

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
