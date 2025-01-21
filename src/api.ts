import { useQuery } from 'react-query';
import { AXIOS_INSTANCE } from './api/Client.ts';

  export const getPopularMovie = async() => {
    const { data } = await AXIOS_INSTANCE.get('movie/popular')
    console.log(data)
    return data; 
  }
  export const getPopularActor = async() => {
    const { data } = await AXIOS_INSTANCE.get('person/popular')
    console.log(data)
    return data; 
  }

  export const  usePopularMovie = () => {
    return useQuery(['Movies'], getPopularMovie)
  }
  export const usePopularActor = () =>{
    return useQuery(['Actor'], getPopularActor)
  }