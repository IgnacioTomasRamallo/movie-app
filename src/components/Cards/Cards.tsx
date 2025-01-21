import { usePopularMovie } from "../../api";
import Card from "./Card/Card";

export interface Movie {
  id: number;
  original_title: string;
  overview: string;
  poster_path: string;
  original_name: string;
  backdrop_path: string;
}



const Cards = () => {
  const { data } = usePopularMovie();
  return (
    <div>
      {
        data.results.map((dataMovie: Movie)=>{
          <Card {...dataMovie} key={dataMovie.id}/>
        })
      }
    </div>
  )
}

export default Cards
