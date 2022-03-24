import { useContext } from "react";
import { DataContext } from "../../providers/Data";
import "./style.css";

export const Card = () => {
  const { pokemonsList } = useContext(DataContext);

  return (
    <div className="card">
      <div className="imago">
        <figure></figure>
      </div>
      <div className="littera">
        <h4>{pokemonsList.results[0]["name"]}</h4>
        <p>
          Caracteristicas do Pokemon: Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Debitis adipisci nostrum maxime voluptate fuga,
          exercitationem, sunt error in reiciendis deserunt nulla eaque nihil
          quos consequatur hic amet, iusto repellat dolorem!
        </p>
      </div>
    </div>
  );
};
