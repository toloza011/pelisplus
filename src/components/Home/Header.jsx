import React,{useState} from "react";
import logo from "../../assets/img/logo-movie.png";
import {useHamburger} from '../../Hooks/useHamburger';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
export const Header = ({open}) => {
  
   const [menuOpen, setmenuOpen] = useHamburger(open);
   const {hamburger,openMenu} = useHamburger;

   const Menu = () => {
      setmenuOpen(!menuOpen)
      console.log("Menu: "+menuOpen);
   }
   
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
        <h2>Pelisplus+</h2>
      </div>
      <div className="links_movile">
          <a onClick={Menu}><i className="fas fa-bars"></i></a>
      </div>
      <div className="links">
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
      <div className="login">
        <ul>
          <li className="icon-search">
            <a >
              <i className="fas fa-search"></i>
            </a>
          </li>
          <li>
            <Link to="/Login">Login</Link>
          </li>
          <li>
            <Link to="/Registro">Registro</Link>
          </li>
         
        </ul>
      </div>
      <div className="login_movile">
        <div className="icon_user">
          <a >
            <i className="fas fa-user"></i>
          </a>
        </div>
      </div>
    </nav>
  );
};
