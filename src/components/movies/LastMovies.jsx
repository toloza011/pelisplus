import React,{useEffect,useState} from "react";
import "../../assets/css/estilos.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {db} from '../../db/firebase';
const LastMovies = () => {
  
  const [movies, setmovies] = useState([]);
   
  useEffect(()=>{
    const unsubscribe = db.collection("peliculas").onSnapshot(snapshot => {
       setmovies(snapshot.docs.map(pelicula => ({
          id: pelicula.id,
          pelicula: pelicula.data()
       })))
    });
  },[]);



 
  return (
    <div className="main_movies">
      <div className="section_title">
        <h2>Ultimas peliculas agregadas</h2>
      </div>
      <div className="section_catalogo">
      {
         movies.map(({id,pelicula})=> {
            return(
              <div className="card" key={id}>
                <Link to={`Pelicula/${id}`}>
                  <img
                    src={pelicula.img}
                    alt={pelicula.titulo}
                  />
                </Link> 
                <h4>{pelicula.titulo}</h4>
            </div>
            );  
         })
       }
       </div>
    </div>
  );
};

export default LastMovies;
