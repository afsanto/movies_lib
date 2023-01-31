import { useEffect, useState } from "react";
import SerieCard from "../components/SerieCard";

import "./MoviesGrid.css";

const seriesURL = import.meta.env.VITE_APISERIE;
const apiKey = import.meta.env.VITE_API_KEY;

const InTvSeries = () => {
  const [topSeries, setTopSeries] = useState([]);

  const getTopRatedSeries = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setTopSeries(data.results);
  };

  useEffect(() => {
    const topRatedUrl = `${seriesURL}top_rated?${apiKey}&language=pt-BR`;
    console.log(topRatedUrl);
    getTopRatedSeries(topRatedUrl);
  }, []);

  console.log(topSeries);

  return (
    <div className="container">
      <h2 className="title">Melhores séries:</h2>
      <div className="movies-container">
        {topSeries.length > 0 &&
          topSeries.map((serie) => <SerieCard key={serie.id} serie={serie} />)}
      </div>
    </div>
  );
};

export default InTvSeries;
