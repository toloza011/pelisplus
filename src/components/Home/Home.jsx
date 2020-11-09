import React,{useState} from "react";
import { useHamburger } from '../../Hooks/useHamburger';
import LastMovies from '../movies/LastMovies';
import Trending from '../movies/trending';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
const Home = () => {

    const [menuOpen, setmenuOpen] = useHamburger(false);
    const {hamburger,openMenu} = useHamburger;


  return (
    <>
      <div className="main_content_left"></div>
      <div className="main_content_center">
        {openMenu ? (
          <div className="menu_responsive">
            <ul>
          <li>
            <Link to="/">
              <i className="fas fa-home"></i> Home
            </Link>
          </li>
          <li>
            <Link to="/Series">
              <i className="fas fa-tv"></i> Series
            </Link>
          </li>
          <li>
            <Link to="/Peliculas">
              <i className="fas fa-film"></i> Peliculas
            </Link>
          </li>
          <li>
            <Link to="/Estrenos">
              <i className="fas fa-film"></i> Estrenos
            </Link>
          </li>
        </ul>
          </div>
        ) : (
          ""
        )}

        <Trending />
        <LastMovies />
      </div>
      <div className="main_content_right"></div>
    </>
  );
};

export default Home;
