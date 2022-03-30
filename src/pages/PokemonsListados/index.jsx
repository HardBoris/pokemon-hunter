import "./style.css";
import { useContext, useEffect, useState } from "react";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { DataContext } from "../../providers/Data";
import { Footer } from "../../components/Footer";
import Modal from "../../components/Modal";
import { Result } from "../../components/Result";
import { CapturaContext } from "../../providers/Capturas";

export const Pl = () => {
  const {
    firstPage,
    previusPage,
    nextPage,
    lastPage,
    pokeList,
    statusNext,
    statusPrevious,
    next,
    qty,
    finder,
    buscador,
  } = useContext(DataContext);
  const { freedom } = useContext(CapturaContext);
  const [prima, setPrima] = useState(statusPrevious);
  const [ultima, setUltima] = useState(statusNext);
  const [openResultModal, setOpenResultModal] = useState(false);

  const handlerModal = (data) => {
    setOpenResultModal(!openResultModal);
    buscador(data);
    freedom(data);
  };

  useEffect(() => {
    setPrima(statusPrevious);
    setUltima(statusNext);
  }, [pokeList]);

  const pages = Math.floor(qty / 20) + 1;
  const numerate = next / 20 + 1;
  const long = pokeList && pokeList.length;

  return (
    <div className="layout">
      <Header />
      <main>
        <div className="content">
          <div className="counter">
            <p>
              Exhibindo itens do {next + 1} a {next + long} de um total de {qty}
            </p>
          </div>
          {pokeList &&
            pokeList.map((item, index) => (
              <Card key={index} listo={item} i={index} mostra={handlerModal} />
            ))}
        </div>
      </main>
      <Footer
        onFirst={() => firstPage()}
        onBack={() => previusPage()}
        onForward={() => nextPage()}
        onLast={() => lastPage()}
        first={prima !== null ? false : true}
        last={ultima !== null ? false : true}
        numPage={numerate}
        pages={pages}
      />
      <Modal isOpen={openResultModal} setIsOpen={handlerModal}>
        {finder.length > 0 && (
          <Result listo={finder} closeFunction={handlerModal} />
        )}
      </Modal>
    </div>
  );
};
