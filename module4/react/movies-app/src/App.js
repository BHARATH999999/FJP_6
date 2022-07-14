import NavBar from './components/NavBar.js';
import './App.css';
import Banner from './components/Banner.js';
import MovieList from './components/MovieList.js';
import Fav from './components/Fav.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path ='/' element = {<> <Banner/> <MovieList/></>}/>
          <Route path = '/favourites' element = {<Fav/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
