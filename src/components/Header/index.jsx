import "./style.css";
import { FaSearch } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";
export const Header = () => {
  return (
    <div className="hi-header">
      <div className="greet">
        <p>Olá, Fulano de Tal</p>
        <TiArrowSortedDown />
      </div>
      <div className="lo-header">
        <div className="title">
          <h1>Fase teste prático Front_end</h1>
          <p>Pokebusca</p>
        </div>
        <div className="searcher">
          <div className="in">
            <input type="text" placeholder="Buscar" />
            <FaSearch />
          </div>
        </div>
      </div>
    </div>
  );
};
