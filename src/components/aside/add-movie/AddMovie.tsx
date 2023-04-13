import './AddMovie.css';

const AddMovie = () => {
  return (
    <div className="AddMovie">
      <h3 className="AddMovieTitle">Añadir Pelicula</h3>
      <input type="text" placeholder="Titulo" />
      <textarea name="Descripción" id="" cols="30" rows="10" placeholder="Descripción"></textarea>
      <button className="AddMovieButton">Guardar</button>
    </div>
  );
};

export default AddMovie;
