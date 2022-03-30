import { useContext } from "react";
import { CapturaContext } from "../../providers/Capturas";
import { ImagoContext } from "../../providers/Imago";
import "./style.css";

export const Capturado = ({ capturado, soltura }) => {
  const { endereco } = useContext(ImagoContext);
  const { addPokemon, captured, releasePokemon } = useContext(CapturaContext);

  // const handlerSoltura = () => {
  //   releasePokemon();
  // };

  const identificator = parseInt(capturado["url"].split("/")[6]);

  const imago = identificator !== 0 && endereco(identificator);

  return (
    <div className="rcard">
      <div className="rimago">
        <figure className="rfigure">
          <img className="rimg" src={imago} alt={capturado["name"]} />
        </figure>
      </div>
      <div className="rlittera">
        <div className="rrotulo">
          <h4>
            {capturado["name"]} #{identificator}
          </h4>
        </div>
      </div>
      <div className="btn">
        <button
          className="libera"
          onClick={() => releasePokemon(capturado["name"])}
        >
          liberar
        </button>
      </div>
    </div>
  );
};
