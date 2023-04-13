import './Movie.css';

const Movie = () => {
  return (
    <div className="Movie">
      <h2 className="MovieTitle">Titulo de la pelicula</h2>
      <h3 className="MovieDescription">Descripción</h3>
      <div className="MovieButtons">
        <button className="EditButton">Editar</button>
        <button className="DeleteButton">Borrar</button>
      </div>
    </div>
  );
};

export default Movie;
