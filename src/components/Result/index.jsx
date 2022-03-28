import { useContext } from "react";
import { ImagoContext } from "../../providers/Imago";
import "./style.css";

export const Result = ({ listo }) => {
  const { pokeNum, imagoId, endereco } = useContext(ImagoContext);
  const identificator =
    listo !== [] ? parseInt(listo[0]["url"].split("/")[6]) : 0;
  const imago = identificator !== 0 && endereco(identificator);
  console.log(identificator);
  return (
    <div className="card">
      <div className="imago">
        <figure>
          <img src={imago} alt={listo["name"]} />
        </figure>
      </div>
      <div className="littera">
        <div className="rotulo">
          <h4>
            {listo[0]["name"]} #{identificator}
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
