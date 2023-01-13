import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "./pages/Home" ;
import Movie from "./pages/Movie" ;
import Serie from './pages/Serie';
import Search from "./pages/Search" ;
import InTheaters from './pages/InTheaters';
import SearchSeries from './pages/SearchSeries';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
     <Routes>
       <Route element= {<App />}>
        <Route path="/"  element={<Home/>}/>
        <Route path="movie/:id"  element={<Movie/>}/>
        <Route path="search"  element={<Search/>}/>
        <Route path="/movie/now-playing" element={<InTheaters/>}/>
        <Route path="searchserie"  element={<SearchSeries/>}/>
        <Route path="serie/:id"  element={<Serie/>}/>
       </Route>
     </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
