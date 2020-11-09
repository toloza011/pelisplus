import React, { useState, useEffect } from "react";
import "../../assets/css/estilos.css";
import { db } from "../../db/firebase";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
const Trailer = ({ match }) => {
  const id = match.params.url;
  console.log(id);
  console.log(match);
 const [movie, setmovie] = useState([]);

   useEffect(()=>{
      const data = db.collection("peliculas").doc(id).get().then((pelicula)=>{
         setmovie({
           id: pelicula.id,
           titulo: pelicula.data().titulo,
           created_at: pelicula.data().created_at.seconds,
           img: pelicula.data().img,
           descripcion: pelicula.data().descripcion,
           trailer: pelicula.data().trailer
         })
      });
   },[id]);
    const fecha = new Date().toLocaleDateString("CL");
    
   
  return (
    <div className="trailer">
      <div className="trailer_title">
        <Link push to={`/Pelicula/${movie.id}`}>{movie.titulo}</Link>  
      </div>
        <iframe
        className="trailer_video"
        width="1000"
        height="500"
        src={`https://www.youtube.com/embed/${movie.trailer}`}
      ></iframe> 
    </div>
  );
};

export default Trailer;
