import React from "react";
import { Movie } from "../Cards";

type CardProps = Pick<Movie, "backdrop_path" | "original_language" | "title">;

//omit parshel

const Card: React.FC<CardProps> = ({
  backdrop_path,
  title,
  original_language,
}) => {
  return (
    <div className="border-2 flex flex-col p-5 ">
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
          alt=""
          className=""
        />
      </div>

      <div>
        <h2>{`Titulo: ${title}`}</h2>
        <h2>{`Lenguaje: ${original_language}`}</h2>
      </div>
    </div>
  );
};

export default Card;
