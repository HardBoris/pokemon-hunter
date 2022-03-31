import { useState } from "react";
import { useHistory } from "react-router-dom";
import Modal from "../../components/Modal";
import { User } from "../../components/User";
import "./style.css";

export const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  const history = useHistory();

  const handlerModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <div className="letras">
      <button className="btnStart" type="button" onClick={() => handlerModal()}>
        Start
      </button>
      <Modal isOpen={openModal} setIsOpen={handlerModal}>
        <User
          closeFunction={() => handlerModal()}
          avanza={() => history.push("/pokemons")}
        />
      </Modal>
    </div>
  );
};
