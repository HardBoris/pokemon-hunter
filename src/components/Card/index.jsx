import { useContext } from "react";
import { ImagoContext } from "../../providers/Imago";
import "./style.css";

export const Card = ({ listo, i, mostra }) => {
  const { pokeNum, imagoId } = useContext(ImagoContext);

  return (
    <div className="card" onClick={() => mostra(listo["name"])}>
      <div className="imago">
        <figure>
          <img src={imagoId[i]} alt={listo["name"]} />
        </figure>
      </div>
      <div className="littera">
        <div className="rotulo">
          <h4>
            {listo["name"]} #{pokeNum[i]}
          </h4>
        </div>

        <p className="txt">
          Caracteristicas do Pokemon: Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Debitis adipisci nostrum maxime voluptate fuga,
          exercitationem, sunt error in reiciendis deserunt nulla eaque nihil
          quos consequatur hic amet, iusto repellat dolorem!
        </p>
      </div>
    </div>
  );
};
