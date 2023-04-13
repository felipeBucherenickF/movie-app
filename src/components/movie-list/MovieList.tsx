import Movie from '../movie/Movie';
import './MovieList.css';

const MovieList = () => {
  return (
    <div className="MovieList">
      <>
        <Movie></Movie>
        <Movie></Movie>
        <Movie></Movie>
        <Movie></Movie>
      </>
    </div>
  );
};

export default MovieList;
