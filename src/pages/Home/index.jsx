import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
// import { Card } from "../../components/Card";
import { DataContext } from "../../providers/Data";

export const Home = () => {
  const { previusPage, nextPage, getPokemons, next } = useContext(DataContext);
  const history = useHistory();

  return (
    <div>
      <h1>Hola</h1>
      {/* <Card /> */}
      <button type="button" onClick={() => history.push("/listas")}>
        lista
      </button>
      {/* <button type="button" onClick={() => nextPage()}>
        avanzar
      </button> */}
    </div>
  );
};
