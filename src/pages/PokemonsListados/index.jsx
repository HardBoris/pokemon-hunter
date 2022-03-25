import { useContext, useEffect, useState } from "react";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { DataContext } from "../../providers/Data";
import "./style.css";

export const Pl = () => {
  const { previusPage, nextPage, pokemonsRequest } = useContext(DataContext);
  const [prima, setPrima] = useState(pokemonsRequest.previous);

  useEffect(() => {
    setPrima(pokemonsRequest.previous);
  }, [pokemonsRequest]);

  const myLista = pokemonsRequest.results;

  return (
    <div className="layout">
      <Header />
      <h1>Hola</h1>
      <div>
        <button
          type="button"
          onClick={() => previusPage()}
          disabled={prima !== null ? false : true}
        >
          retroceder
        </button>
        <button type="button" onClick={() => nextPage()}>
          avanzar
        </button>
      </div>
      {myLista &&
        myLista.map((item, index) => (
          <Card key={index} listo={item} i={index} />
        ))}
      ;
    </div>
  );
};
