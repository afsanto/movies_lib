import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill,
  BsCalendarDateFill,
} from "react-icons/bs";





import MovieCard from "../components/MovieCard";

import "./Movie.css";


const moviesURL = import.meta.env.VITE_INTHEATERS;
const apiKey = import.meta.env.VITE_API_KEY;

const InTheaters = () => {
    const [inTheatersMovies, setInTheatersMovies] = useState([]);
  
    const getInTheatersMovies = async (url) => {
      const res = await fetch(url);
      const data = await res.json();
      setInTheatersMovies(data.results);
    };
  
    useEffect(() => {
      const inTheatersUrl = `${moviesURL}?${apiKey}&language=pt-BR&region=US&with_release_type=3|2`;
      console.log(inTheatersUrl);
      getInTheatersMovies(inTheatersUrl);
    }, []);
  
    console.log(inTheatersMovies);
  
    return (
      <div className="container">
        <h2 className="title">Melhores filmes:</h2>
        <div className="movies-container">
          {inTheatersMovies.length > 0 &&
            inTheatersMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
        </div>
      </div>
    );
  };
  
  export default InTheaters;