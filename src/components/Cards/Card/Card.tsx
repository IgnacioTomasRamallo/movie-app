import { Movie } from "../Cards"

type CardProps = Pick<Movie, "backdrop_path" | "original_name" |"original_title">

//omit parshel


const Card: React.FC<CardProps> = ({backdrop_path, original_title,original_name}) => {
  return (
    <div>

      <div>
        <img src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} alt="" />
      </div>

      <div>
        <h2>{original_title}</h2>
        <h2>{original_name}</h2>
      </div>
    </div>
  )
}

export default Card
