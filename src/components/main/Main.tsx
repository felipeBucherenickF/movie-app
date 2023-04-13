import Aside from '../aside/Aside';
import MovieList from '../movie-list/MovieList';
import './Main.css';

const Main = () => {
  return (
    <main className="Main">
      <MovieList></MovieList>
      <Aside></Aside>
    </main>
  );
};

export default Main;
