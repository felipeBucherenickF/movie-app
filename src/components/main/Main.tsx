import { useState } from "react";
import Aside from "components/aside/Aside";
import MovieList from "components/movie-list/MovieList";
import "./Main.css";

const Main = () => {
  const [movieList, setMovieList] = useState([]);

  return (
    <main className="Main">
      <MovieList movieList={movieList} setMovieList={setMovieList}></MovieList>
      <Aside movieList={movieList} setMovieList={setMovieList}></Aside>
    </main>
  );
};

export default Main;
