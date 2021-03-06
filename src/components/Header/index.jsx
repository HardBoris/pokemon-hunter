import "./style.css";
import { FaSearch } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";
import { useContext, useState } from "react";
import Modal from "../Modal";
import { DataContext } from "../../providers/Data";
import { Result } from "../Result";
import { Errado } from "../Error";
import { CapturaContext } from "../../providers/Capturas";
import { PokeFrame } from "../Frame";
import { Empty } from "../Empty";
import { useHistory } from "react-router-dom";

export const Header = () => {
  const history = useHistory();
  const [input, setInput] = useState("");
  const { buscador, finder, user } = useContext(DataContext);
  const [openSearchResultModal, setOpenSearchResultModal] = useState(false);
  const [openShowModal, setOpenShowModal] = useState(false);
  const { freedom, releasePokemon, allRelease, captured } =
    useContext(CapturaContext);

  const handlerModal = () => {
    setOpenSearchResultModal(!openSearchResultModal);
  };

  const handlerShowModal = () => {
    setOpenShowModal(!openShowModal);
  };

  const openModal = () => {
    handlerModal();
    let encontrado = buscador(input);
    freedom(encontrado["name"]);
  };

  return (
    <div className="hi-header">
      <div className="greet">
        <p>Olá, {user}</p>
        <div className="dropdown">
          <TiArrowSortedDown />
          <div className="ddcontent">
            <div className="mc">
              <p onClick={() => handlerShowModal()}>Minhas Capturas</p>
            </div>
            <div className="mc">
              <p onClick={() => history.push("/")}>Sair</p>
            </div>
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
      <Modal isOpen={openShowModal} setIsOpen={handlerShowModal}>
        {captured.length > 0 ? (
          <PokeFrame
            soltura={releasePokemon}
            closeFunction={handlerShowModal}
            allRelease={allRelease}
          />
        ) : (
          <Empty closeFunction={handlerShowModal} />
        )}
      </Modal>
    </div>
  );
};
