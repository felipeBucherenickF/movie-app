import { useState } from "react";
import useLocalStorage from "utils/useLocalStorage";
import "./Movie.css";
import EditMovie from "./edit-movie/EditMovie";

const Movie = ({ movie, movieList, setMovieList }) => {
  const [edit, setEdit] = useState(0);
  const [cancel, setCancel] = useState(false);
  const { deleteItem: deleteMovie } = useLocalStorage("MOVIES");

  const onEditMovie = () => {
    setEdit(movie.id);
    setCancel(false);
  };

  const onDeleteMovie = () => {
    const remainingMovies = movieList.filter((item) => item.id != movie.id);
    setMovieList(remainingMovies);
    deleteMovie(movie);
  };

  return (
    <div className="Movie">
      <h2 className="MovieTitle">{movie.title}</h2>
      <h3 className="MovieDescription">{movie.description}</h3>
      <div className="MovieButtons">
        <button className="EditButton" onClick={onEditMovie}>
          Editar
        </button>
        <button className="DeleteButton" onClick={onDeleteMovie}>
          Borrar
        </button>
      </div>
      {edit === movie.id && !cancel && (
        <EditMovie
          movie={movie}
          setMovieList={setMovieList}
          setEdit={setEdit}
          setCancel={setCancel}
        ></EditMovie>
      )}
    </div>
  );
};

export default Movie;
