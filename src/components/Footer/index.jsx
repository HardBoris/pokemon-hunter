import "./style.css";
import { RiSkipBackFill, RiSkipForwardFill } from "react-icons/ri";
import { TiMediaPlay, TiMediaPlayReverse } from "react-icons/ti";

export const Footer = ({
  onFirst,
  onBack,
  onForward,
  onLast,
  first,
  last,
  numPage,
  pages,
}) => {
  return (
    <footer>
      <div className="botonera">
        <p>
          {numPage} de {pages} páginas
        </p>
        <button type="button" onClick={onFirst} disabled={first}>
          <RiSkipBackFill />
        </button>
        <button type="button" onClick={onBack} disabled={first}>
          <TiMediaPlayReverse />
        </button>
        <button type="button" onClick={onForward} disabled={last}>
          <TiMediaPlay />
        </button>
        <button type="button" onClick={onLast} disabled={last}>
          <RiSkipForwardFill />
        </button>
      </div>
    </footer>
  );
};
