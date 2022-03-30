import { useContext } from "react";
import { CapturaContext } from "../../providers/Capturas";
import { Capturado } from "../Capturado";
import "./style.css";

export const PokeFrame = ({ soltura, closeFunction, allRelease }) => {
  const { captured, releasePokemon } = useContext(CapturaContext);
  return (
    <div className="marco">
      <div className="ftop">
        <div className="titulo">
          <p>Minhas Capturas</p>
        </div>

        <div className="fclosebtn" as="button" onClick={() => closeFunction()}>
          <p>X</p>
        </div>
      </div>
      <div className="show">
        {captured.length > 0 &&
          captured.map((item, i) => (
            <Capturado key={i} capturado={item} soltura={soltura} />
          ))}
      </div>

      <div className="btnFrame">
        <button className="flibera" onClick={() => allRelease()}>
          Liberar todos
        </button>
      </div>
    </div>
  );
};
