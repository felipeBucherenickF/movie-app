import useLocalStorage from "utils/useLocalStorage";
import "./AddMovie.css";

const AddMovie = ({ setMovieList }) => {
  const { addItem: addMovie } = useLocalStorage("MOVIES");

  const getFormValues = (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const description = event.target.description.value;
    let newMovie = {
      id: new Date().getTime(),
      title,
      description,
    };

    setMovieList((movies: []) => {
      return [...movies, newMovie];
    });
    addMovie(newMovie);
  };

  return (
    <div className="AddMovie">
      <h3 className="AddMovieTitle">Añadir Pelicula</h3>
      <form className="AddMovieForm" onSubmit={getFormValues}>
        <input id="title" type="text" name="title" placeholder="Titulo" />
        <textarea
          id="description"
          name="description"
          placeholder="Descripción"
        ></textarea>
        <button id="save" className="AddMovieButton" type="submit">
          Guardar
        </button>
      </form>
    </div>
  );
};

export default AddMovie;
