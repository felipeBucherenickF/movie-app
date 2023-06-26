import { Key, useEffect } from "react";
import Movie from "components/movie/Movie";
import "./MovieList.css";
import useLocalStorage from "utils/useLocalStorage";

const MovieList = ({ movieList, setMovieList }) => {
  const { items: movies } = useLocalStorage("MOVIES");

  useEffect(() => {
    setMovieList(movies);
  }, []);

  return (
    <div className="MovieList">
      <>
        {movieList &&
          movieList.map((movie: { id: Key }) => {
            return (
              <Movie
                movie={movie}
                key={movie.id}
                movieList={movieList}
                setMovieList={setMovieList}
              ></Movie>
            );
          })}
      </>
    </div>
  );
};

export default MovieList;
