import "./style.css";
import { FaSearch } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";
import { useContext, useState } from "react";
import Modal from "../Modal";
import { DataContext } from "../../providers/Data";
import { Result } from "../Result";
import { Errado } from "../Error";
import { CapturaContext } from "../../providers/Capturas";
export const Header = () => {
  const [input, setInput] = useState("");
  const { buscador, finder } = useContext(DataContext);
  const [openSearchResultModal, setOpenSearchResultModal] = useState(false);
  const { freedom } = useContext(CapturaContext);

  const handlerModal = () => {
    setOpenSearchResultModal(!openSearchResultModal);
  };

  const openModal = () => {
    handlerModal();
    let encontrado = buscador(input);
    freedom(encontrado["name"]);
  };

  return (
    <div className="hi-header">
      <div className="greet">
        <p>Olá, Fulano de Tal</p>
        <div className="dropdown">
          <TiArrowSortedDown />
          <div className="ddcontent">
            <p>Minhas Capturas</p>
          </div>
        </div>
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
            <div className="icon" as="button" onClick={() => openModal()}>
              <FaSearch />
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={openSearchResultModal} setIsOpen={handlerModal}>
        {finder.length > 0 ? (
          <Result listo={finder} closeFunction={handlerModal} />
        ) : (
          <Errado closeFunction={handlerModal} />
        )}
      </Modal>
    </div>
  );
};
