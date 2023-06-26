import useLocalStorage from "utils/useLocalStorage";
import cancelImage from "/assets/cancel.png";
import "./EditMovie.css";
import { useState } from "react";

const EditMovie = ({ movie, setEdit, setMovieList, setCancel }) => {
  const { updateItem: updateMovie, items: movies } = useLocalStorage("MOVIES");

  const onSave = (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const description = event.target.description.value;
    const updatedMovie = {
      id: movie.id,
      title,
      description,
    };
    setMovieList(movies);
    updateMovie(updatedMovie);
    setEdit(0);
  };

  const onCancel = () => {
    setCancel(true);
  };

  return (
    <div className="Modal">
      <div className="EditMovie">
        <button className="EditMovieCancel" onClick={onCancel}>
          <img src={cancelImage} alt="Cancelar la edición" />
        </button>

        <form className="EditMovieForm" onSubmit={onSave}>
          <label htmlFor="">Titulo</label>
          <input
            id="title"
            type="text"
            defaultValue={movie.title}
            name="title"
          />
          <label htmlFor="">Descripción</label>
          <input
            id="description"
            type="text"
            defaultValue={movie.description}
            name="description"
          />
          <button id="save" className="EditMovieSave" type="submit">
            Guardar
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditMovie;
