import { useContext } from "react";
import { CapturaContext } from "../../providers/Capturas";
import { Capturado } from "../Capturado";

export const PokeFrame = ({ soltura }) => {
  const { captured, releasePokemon } = useContext(CapturaContext);
  return (
    <div>
      <h1>hola</h1>
      {captured.length > 0 &&
        captured.map((item, i) => (
          <Capturado key={i} capturado={item} soltura={soltura} />
        ))}
    </div>
  );
};
