import { useContext } from "react";
import { CapturaContext } from "../../providers/Capturas";
import { ImagoContext } from "../../providers/Imago";
import "./style.css";

export const Capturado = ({ capturado, soltura }) => {
  const { endereco } = useContext(ImagoContext);
  const { releasePokemon } = useContext(CapturaContext);

  const identificator = parseInt(capturado["url"].split("/")[6]);

  const imago = identificator !== 0 && endereco(identificator);

  return (
    <div className="ccard">
      <div className="cimago">
        <figure className="cfigure">
          <img className="cimg" src={imago} alt={capturado["name"]} />
        </figure>
      </div>
      <div className="clittera">
        <div className="crotulo">
          <h4>
            {capturado["name"]} #{identificator}
          </h4>
        </div>
        <button
          className="clibera"
          onClick={() => releasePokemon(capturado["name"])}
        >
          liberar
        </button>
      </div>
    </div>
  );
};
