import "./style.css";
import { VscBracketError } from "react-icons/vsc";

export const Empty = ({ closeFunction }) => {
  return (
    <div className="emptyframe">
      <h1 className="vh1">Nenhum Pokémon capturado!</h1>
      <div className="vicon" onClick={closeFunction}>
        <VscBracketError />
      </div>
      <h4 className="vh4">Está na hora de capturar!</h4>
    </div>
  );
};
