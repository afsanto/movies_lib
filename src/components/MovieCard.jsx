import { Link } from "react-router-dom";

import { FaStar } from "react-icons/fa";

import "../pages/Movie.css"

const imagesURL = import.meta.env.VITE_IMG;

const MovieCard = ({ movie, showLink = true }) => {
  return (
    <div className="movie-card">
      <img className="imgcard"  src={imagesURL + movie.poster_path} alt={movie.title} />
      <h2 className="cardtitle"  >{movie.title}</h2>
      <p>
        <FaStar /> {movie.vote_average}
      </p>
      {showLink && <Link className="details" to={`/movie/${movie.id}`}>Detalhes</Link>}
    </div>
  );
};

export default MovieCard;
