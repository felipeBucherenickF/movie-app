import useLocalStorage from "@/utils/useLocalStorage";
import "./Searcher.css";
import { useState } from "react";

const Searcher = ({ setMovieList }) => {
  const { items: movies } = useLocalStorage("MOVIES");
  const [searchValue, setSearchValue] = useState("");
  const [notFound, setNotFound] = useState(false);
  let searchedMovies = [];
  const onSearch = (event) => {
    setSearchValue(event.target.value);

    if (searchValue.length <= 1) {
      searchedMovies = movies;
    } else {
      searchedMovies = movies.filter((movie) =>
        movie.title.toLowerCase().includes(searchValue.toLowerCase())
      );
    }
    setMovieList(searchedMovies);
    if (searchedMovies.length <= 0) {
      setNotFound(true);
    } else {
      setNotFound(false);
    }
  };
  return (
    <div className="Searcher">
      <h3 className="SearcherTitle">Buscador</h3>
      {notFound && <p className="SearcherNotFound">No existe el titulo</p>}
      <input type="text" onChange={onSearch} />
      <button className="SearcherButton">Buscar</button>
    </div>
  );
};

export default Searcher;
