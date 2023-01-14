import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  BsFillCameraReelsFill,
  BsFillPeopleFill,
  BsFlower3,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill,
  BsCalendarDateFill,
} from "react-icons/bs";


import SerieCard from "../components/SerieCard";

import "./Movie.css";


const seriesURL = import.meta.env.VITE_APISERIE;
const apiKey = import.meta.env.VITE_API_KEY;

const Serie = () => {
  const { id } = useParams();
  const [serie, setSerie] = useState(null);

  const getSerie = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setSerie(data);
  };

  const formatCurrency = (number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  const formatDate = (number) => {
    console.log(number);
    return number.split('-').reverse().join('/');
  };

  useEffect(() => {
    const serieUrl = `${seriesURL}${id}?${apiKey}&language=pt-BR`;
    getSerie(serieUrl);
  }, []);

  return (
    <div className="movie-page">
      {serie && (
        <>
          <SerieCard serie={serie} showLink={false} />
          <p className="tagline">{serie.tagline}</p>
          <div className="info">
            <h3>
              <BsFillPeopleFill /> Série criada por:
            </h3>
            <p>{serie.created_by[0].name}</p>
          </div>
          <div className="info">
            <h3>
              <BsHourglassSplit /> Duração:
            </h3>
            <p>{serie.episode_run_time[0]} minutos</p>
          </div>
          <div className="info">
            <h3>
              <BsCalendarDateFill /> Data do primeiro episódio:
            </h3>
            <p>{formatDate(serie.first_air_date)}</p>
          </div>
          <div className="info">
            <h3>
              <BsCalendarDateFill /> Data do último episódio:
            </h3>
            <p>{formatDate(serie.last_air_date)}</p>
          </div>
          <div className="info">
            <h3>
              <BsFillCameraReelsFill /> Número de episódios:
            </h3>
            <p>{serie.number_of_episodes}</p>
          </div>
          <div className="info">
            <h3>
              <BsFlower3 /> Número de temporadas:
            </h3>
            <p>{serie.number_of_seasons}</p>
          </div>
          <div className="info description">
            <h3>
              <BsFillFileEarmarkTextFill /> Descrição:
            </h3>
            <p>{serie.overview}</p>
          </div>
          
        </>
      )}
    </div>
  );
};

export default Serie;