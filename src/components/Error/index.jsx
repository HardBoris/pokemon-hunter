import "./style.css";
import { VscBracketError } from "react-icons/vsc";

export const Errado = ({ closeFunction }) => {
  return (
    <div className="errorframe">
      <h1 className="eh1">Nenhum Pokémon corresponde à sua pesquisa!</h1>
      <div className="eicon" onClick={closeFunction}>
        <VscBracketError />
      </div>
      <h4 className="eh4">Por favor, Tente novamente!</h4>
    </div>
  );
};
