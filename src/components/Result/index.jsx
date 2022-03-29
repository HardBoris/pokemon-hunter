import { useContext } from "react";
import { CapturaContext } from "../../providers/Capturas";
import { ImagoContext } from "../../providers/Imago";
import "./style.css";

export const Result = ({ listo, closeFunction }) => {
  const { endereco } = useContext(ImagoContext);
  const { addPokemon } = useContext(CapturaContext);

  const handleCaptura = () => {
    addPokemon(listo);
    closeFunction();
  };

  const identificator =
    listo.length > 0 && parseInt(listo[0]["url"].split("/")[6]);

  const imago = identificator !== 0 && endereco(identificator);

  return (
    <div className="rcard">
      <div className="top">
        <div className="closebtn" as="button" onClick={closeFunction}>
          <p>X</p>
        </div>
      </div>
      <div className="rimago">
        <figure className="rfigure">
          <img className="rimg" src={imago} alt={listo["name"]} />
        </figure>
      </div>
      <div className="rlittera">
        <div className="rrotulo">
          {listo.length > 0 && (
            <h4>
              {listo[0]["name"]} #{identificator}
            </h4>
          )}
        </div>

        <p className="rtxt">
          Caracteristicas do Pokemon: Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Debitis adipisci nostrum maxime voluptate fuga,
          exercitationem, sunt error in reiciendis deserunt nulla eaque nihil
          quos consequatur hic amet, iusto repellat dolorem!
        </p>
      </div>
      <div className="btn">
        <button className="captura" onClick={() => handleCaptura()}>
          Capturar
        </button>
      </div>
    </div>
  );
};
