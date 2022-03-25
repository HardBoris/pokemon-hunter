import { useContext, useEffect } from "react";
import { DataContext } from "../../providers/Data";
import { ImagoContext } from "../../providers/Imago";
import "./style.css";

export const Card = ({ listo, i }) => {
  const { imagoId } = useContext(ImagoContext);

  return (
    <div className="card">
      <div className="imago">
        <figure>
          <img src={imagoId[i]} alt="hola" />
        </figure>
      </div>
      <div className="littera">
        <h4>{listo["name"]}</h4>
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
