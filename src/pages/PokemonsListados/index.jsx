import "./style.css";
import { useContext, useEffect, useState } from "react";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { DataContext } from "../../providers/Data";
import { Footer } from "../../components/Footer";

export const Pl = () => {
  const {
    firstPage,
    previusPage,
    nextPage,
    lastPage,
    totalPage,
    next,
    qty,
    pokemonsRequest,
  } = useContext(DataContext);
  const [prima, setPrima] = useState(pokemonsRequest.previous);
  const [ultima, setUltima] = useState(pokemonsRequest.next);

  useEffect(() => {
    setPrima(pokemonsRequest.previous);
    setUltima(pokemonsRequest.next);
  }, [pokemonsRequest]);

  const myLista = pokemonsRequest.results;
  const pages = totalPage() + 1;
  const numerate = next / 20 + 1;
  const long = myLista && myLista.length;

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
          {myLista &&
            myLista.map((item, index) => (
              <Card key={index} listo={item} i={index} />
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
    </div>
  );
};
