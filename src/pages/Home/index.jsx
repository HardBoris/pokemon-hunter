import { useContext } from "react";
import { Card } from "../../components/Card";
import { DataContext } from "../../providers/Data";

export const Home = () => {
  const { previusPage, nextPage } = useContext(DataContext);
  return (
    <div>
      <h1>Hola</h1>
      <Card />
      <button type="button" onClick={() => previusPage()}>
        retorceder
      </button>
      <button type="button" onClick={() => nextPage()}>
        avanzar
      </button>
    </div>
  );
};
