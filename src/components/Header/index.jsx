import "./style.css";
import { FaSearch } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";
import { useContext, useState } from "react";
import Modal from "../Modal";
import { Card } from "../Card";
import { DataContext } from "../../providers/Data";
import { Result } from "../Result";
export const Header = () => {
  const [input, setInput] = useState("");
  const { buscador, finder } = useContext(DataContext);
  const [openSearchResultModal, setOpenSearchResultModal] = useState(false);

  const handleClick = () => {
    setOpenSearchResultModal(!openSearchResultModal);
    buscador(input);
  };

  // const identificator = parseInt(finder[0]["url"].split("/")[6]);

  // const handleClick = () => {
  //   buscador(input);
  // };
  console.log(finder);
  // console.log(identificator);
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
            <input
              type="text"
              placeholder="Buscar"
              onChange={(e) => setInput(e.target.value)}
            />
            <div className="icon" as="button" onClick={() => handleClick()}>
              <FaSearch />
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={openSearchResultModal} setIsOpen={handleClick}>
        <Result listo={finder} />
      </Modal>
    </div>
  );
};
