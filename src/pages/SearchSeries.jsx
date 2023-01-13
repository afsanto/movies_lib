import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import SerieCard from "../components/SerieCard";

const searchURL = import.meta.env.VITE_SEARCHSERIES;
const apiKey = import.meta.env.VITE_API_KEY;

import "./MoviesGrid.css";

const SearchSeries = () => {
  const [searchParams] = useSearchParams();

  const [series, setSeries] = useState([]);
  const query = searchParams.get("q");

  const getSearchedSeries = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setSeries(data.results);
  };

  useEffect(() => {
    const searchWithQueryURL = `${searchURL}?${apiKey}&language=pt-BR&query=${query}`;
    getSearchedSeries(searchWithQueryURL);
  }, [query]);

  return (
    <div className="container">
      <h2 className="title">
        Resultados para: <span className="query-text">{query}</span>
      </h2>
      <div className="movies-container">
        {series.length > 0 &&
          series.map((serie) => <SerieCard key={serie.id} serie={serie} />)}
      </div>
    </div>
  );
};

export default SearchSeries;