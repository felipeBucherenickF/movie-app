import AddMovie from './add-movie/AddMovie';
import Searcher from './searcher/Searcher';
import './Aside.css';

const Aside = () => {
  return (
    <aside className="Aside">
      <Searcher></Searcher>
      <AddMovie></AddMovie>
    </aside>
  );
};

export default Aside;
