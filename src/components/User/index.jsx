import { useContext, useState } from "react";
import { DataContext } from "../../providers/Data";
import "./style.css";

export const User = ({ closeFunction, avanza }) => {
  const { meuNome } = useContext(DataContext);
  const [usuario, setUsuario] = useState("");
  const [mensaje, setmensaje] = useState(false);

  const sender = () => {
    if (usuario === "") {
      setmensaje(true);
    } else {
      meuNome(usuario);
      closeFunction();
      avanza();
      setmensaje(false);
    }
  };

  return (
    <div className="pregunta">
      <div className="holder">
        <input
          type="text"
          className="txtName"
          placeholder="Insira o seu Nome"
          onChange={(event) => setUsuario(event.target.value)}
        />
      </div>
      <div className="holder">
        <h1>{mensaje && "Por Favor insira o seu Nome"}</h1>
      </div>
      <div className="holder">
        <button className="btnName" type="button" onClick={() => sender()}>
          OK
        </button>
      </div>
    </div>
  );
};
