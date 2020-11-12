import React, { useState, useEffect } from "react";
import "../../assets/css/estilos.css";
import { db, storage } from "../../db/firebase";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Video = ({ match }) => {
  const id = match.params.id;

  const [movie, setmovie] = useState([]);

  useEffect(() => {
    const data = db
      .collection("peliculas")
      .doc(id)
      .get()
      .then((pelicula) => {
        setmovie({
          id: pelicula.id,
          titulo: pelicula.data().titulo,
          created_at: pelicula.data().created_at.seconds,
          img: pelicula.data().img,
          descripcion: pelicula.data().descripcion,
          trailer: pelicula.data().trailer,
          video_url: pelicula.data().video_url,
          vidlox_url: pelicula.data().vidlox_url
        });
      });
  }, [id]);

  return (
    <div className="trailer">
      <div className="trailer_title">
        <Link push to={`/Pelicula/${movie.id}`}>
          {movie.titulo}
        </Link>
      </div>
 
      <iframe
        src={movie.vidlox_url}
        className="trailer_video"
        frameborder={0}
        marginwidth={0}
        marginheight={0}
        scrolling={"no"}
        width="1000"
        height="500"
        allowfullscreen="allowfullscreen"
        mozallowfullscreen="mozallowfullscreen"
        msallowfullscreen="msallowfullscreen"
        oallowfullscreen="oallowfullscreen"
        webkitallowfullscreen="webkitallowfullscreen"
      ></iframe>
    </div>
  );
};

export default Video;
