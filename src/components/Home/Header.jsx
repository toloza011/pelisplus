import React, { useState, useEffect } from "react";
import logo from "../../assets/img/logo-movie.png";
import { useHamburger } from "../../Hooks/useHamburger";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { FaBars, FaTimes } from 'react-icons/fa'
import useUser from "../../Hooks/useUser";

export const Header = ({ open }) => {
  const [click, setclick] = useState(false);
  const [button,setButton] = useState(true);
  const [user,setUser] = useUser()
  const [clickUser,setClickUser] = useState(false);
  const {authUser} = useUser(user);

  
  const showButton = () => {
    if(window.innerWidth<=960){
      setButton(false)
    }else{
      setButton(true)
    }
  }
  window.addEventListener('resize',showButton);

  //Cambiar barras por la x
  const HandleClick = () => {
    if(clickUser){
      setClickUser(false);
      setclick(!click);
    }else{
      setclick(!click);
    }
  }
  const HandleUser = () => {
     if(click){
       setclick(false);
       setClickUser(!clickUser)
     }else{
      setClickUser(!clickUser)
     }
     console.log("El usuario esta: "+clickUser);
  }

  useEffect(()=>{
    console.log("Usuario en header: "+user);
    return[
      useUser
    ]
  },[authUser]);
 
  

  return (
    <nav className="navbar ">
      <div className="logo">
        <img src={logo} alt="Logo" />
        <h2>Pelisplus+</h2>
      </div>
      <div className="links_movile">
        <div className="menu-icon" onClick={HandleClick}>
            {
              click ? <FaTimes /> : <FaBars />
            }
          </div>
      </div>
      <div className="links">
        <ul className={click ? 'nav-menu active' : 'nav-menu'} onClick={HandleClick} >
          <li>
            <Link to="/" className="nav-link">
              <i className="fas fa-home"></i> Home
            </Link>
          </li>
          <li>
            <Link to="/Series" className="nav-link">
              <i className="fas fa-tv"></i> Series
            </Link>
          </li>
          <li>
            <Link to="/Peliculas" className="nav-link">
              <i className="fas fa-film"></i> Peliculas
            </Link>
          </li>
          <li>
            <Link to="/Estrenos" className="nav-link">
              <i className="fas fa-film"></i> Estrenos
            </Link>
          </li>
        </ul>
      </div>
      <div className="login">
        <ul className={clickUser ? 'nav-user active': 'nav-user'}  onClick={HandleUser} >
          <li className="icon-search" >
            <a >
              <i className="fas fa-search"></i>
            </a>
          </li>
         {
           authUser || user ? 
           <li><a>Esteban</a></li>
           :
           <>
            <li>
            <Link to="/Login">Login</Link>
          </li>
          <li>
            <Link to="/Registro">Registro</Link>
          </li>
           </>
         }
          
        </ul>
      </div>
      <div className="login_movile">
        <div className="icon_user" onClick={HandleUser}>
          <a>
            <i className="fas fa-user"></i>
          </a>
        </div>
      </div>
    </nav>
  );
};
