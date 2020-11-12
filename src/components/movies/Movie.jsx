import React,{useState,useEffect} from "react";
import "../../assets/css/estilos.css";
import {db} from '../../db/firebase';
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Link
 } from "react-router-dom";
const Movie = ({match}) => {
   const id = match.params.id;
  
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
    
   
    const clasificar = (e) => {
     
      const valor = e.target.value;
      console.log(valor);
    }
    return ( 
       <div className="main_movie">
          <div className="portada">
              <div className="imagen">
                  <img src={movie.img} alt={movie.titulo}/>
              </div>
              <div className="titulo">
                 <h3>{movie.titulo}</h3>
              </div>
          </div>
          <div className="info">
             <div className="descripcion">
               <p>{movie.descripcion}
                </p>
             </div>
             <div className="estreno">
              <b>Estreno: {fecha}</b>
             </div>
             <div className="calificacion">
                <b>Calificacion: 4.6</b>
                <div className="stars">
                   <ul>
                      <li><input type="radio" className="radio-star" onClick={clasificar} name="" value="2"  id=""/><a type="button" onClick={clasificar} value="1" ><i className="fas fa-star"></i></a></li>
                      <li><input type="radio" className="radio-star" onClick={clasificar} name="" value="2"  id=""/><i className="fas fa-star"></i></li>
                      <li><input type="radio" className="radio-star" onClick={clasificar} name="" value="3" id=""/><i className="fas fa-star"></i></li>
                      <li><input type="radio" className="radio-star" onClick={clasificar} name="" value="4" id=""/><i className="fas fa-star"></i></li>
                      <li><input type="radio" className="radio-star" onClick={clasificar} name="" value="5" id=""/><i className="fas fa-star"></i></li>
                   </ul>
                </div>
             </div>
             <div className="acciones">
               <Link to={`/trailer/${movie.id}`} 
                className="btn-trailer" >
                 <i className="fa fa-play"></i> Ver Trailer
               </Link>
               <Link to={`/Ver/${movie.id}`} className="btn-play">
               <i className="fa fa-play"></i> Ver Pelicula
               </Link>
               <Link to={`/Ver/${movie.id}`} className="btn-fav">
               <i className="fa fa-heart"></i> Agregar a favoritos
               </Link>
             </div>
          </div>
       </div>
     );
}
 
export default Movie;