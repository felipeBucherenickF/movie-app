import AddMovie from "./add-movie/AddMovie";
import Searcher from "./searcher/Searcher";
import "./Aside.css";

const Aside = ({ movieList, setMovieList }) => {
  return (
    <aside className="Aside">
      <Searcher setMovieList={setMovieList}></Searcher>
      <AddMovie setMovieList={setMovieList}></AddMovie>
    </aside>
  );
};

export default Aside;
