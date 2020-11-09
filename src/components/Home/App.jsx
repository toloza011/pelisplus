import React,{useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import '../../assets/css/estilos.css'
import {Header} from './Header';
import LastMovies from '../movies/LastMovies';
import Trending from '../movies/trending';
import Movie from '../movies/Movie'
import MoviesCatalogo from '../movies/MoviesCatalogo';
import SeriesCatalogo from '../series/SeriesCatalogo';
import Estrenos from '../Home/Estrenos';
import { useHamburger } from '../../Hooks/useHamburger';
import Trailer from '../movies/Trailer'
import Home from './Home';

const App = () => {

    
    const [menuOpen, setmenuOpen] = useHamburger(false);
    
    const {hamburger,openMenu} = useHamburger;
    return (
        <div className="main">
            <Router>
           <div className="main_header">
               <Header open = {menuOpen}/>
           </div>
           <div className="main_content">
               <Switch>
                <Route path="/Peliculas">
                   <MoviesCatalogo />
                </Route>
                <Route path="/Series">
                    <SeriesCatalogo />
                </Route>
                <Route path="/Estrenos">
                   <Estrenos />
                </Route>
                <Route path = "/Pelicula/:id" component={Movie}  />
                <Route path="/trailer/:url" component={Trailer}  />
                   
                <Route path="/" >
                  <Home />
                </Route>
                <Route path="*">
                  <Home />
                </Route>
              
                   
               </Switch>
           </div>
           </Router>
        </div>
     );
}
 
export default App;