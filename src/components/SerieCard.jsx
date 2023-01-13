import { Link } from "react-router-dom";

import { FaStar } from "react-icons/fa";

const imagesURL = import.meta.env.VITE_IMG;

const SerieCard = ({ serie, showLink = true }) => {
  return (
    <div className="movie-card">
      <img src={imagesURL + serie.poster_path} alt={serie.name} />
      <h2>{serie.name}</h2>
      <p>
        <FaStar /> {serie.vote_average}
      </p>
      {showLink && <Link to={`/serie/${serie.id}`}>Detalhes</Link>}
    </div>
  );
};

export default SerieCard;