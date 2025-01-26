import Card from "./Card/Card";
import { usePopularMovie } from "../../api";

export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  original_language: string;
  backdrop_path: string;
}

const Cards = () => {
  const { data, isSuccess } = usePopularMovie();

  return (
    <div className="flex flex-col items-center gap-10">
      {isSuccess &&
        data.results.map(
          ({ backdrop_path, original_language, id, title }: Movie) => {
            return (
              <Card
                backdrop_path={backdrop_path}
                original_language={original_language}
                title={title}
                key={id}
              />
            );
          }
        )}
    </div>
  );
};

export default Cards;
