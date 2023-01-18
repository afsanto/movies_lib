import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2, BiFilm } from "react-icons/bi";

import "../components/Navbar.css";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return;

    navigate(`/search?q=${search}`, { replace: true });
    setSearch("");
  };

  const [searchSerie, setSearchSerie] = useState("");
  const navigateSerie = useNavigate();

  const handleSubmitSerie = (e) => {
    e.preventDefault();

    if (!searchSerie) return;

    navigateSerie(`/searchserie?q=${searchSerie}`, { replace: true });
    setSearchSerie("");
  };

 

  return (
    <nav id="navbar">
      <h2>
        <Link to="/">
          <BiCameraMovie /> MoviesLib
        </Link>
      </h2>
      <h2>
        <Link to="/movie/now-playing">
          <BiFilm /> In Theaters
        </Link>
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Busque um filme"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button className="button" type="submit">
          <BiSearchAlt2 className="lupa" />
        </button>
        </form>
        <form onSubmit={handleSubmitSerie}>
        <input
          type="text"
          placeholder="Busque uma série"
          onChange={(e) => setSearchSerie(e.target.value)}
          value={searchSerie}
        />
        <button className="button" type="submit">
          <BiSearchAlt2 className="lupa" />
        </button>

      </form>
    </nav>
  );
};

export default Navbar;
