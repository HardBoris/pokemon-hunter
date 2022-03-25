import "./style.css";
export const Header = () => {
  return (
    <div className="hi-header">
      <div className="greet">
        <p>Olá, Fulano de Tal</p>
      </div>
      <div className="lo-header">
        <div className="title">
          <h1>Fase teste prático Front_end</h1>
          <p>Pokebusca</p>
        </div>
        <div className="searcher">
          <div className="in">
            <input type="text" placeholder="Buscar" />
            <p>p</p>
          </div>
        </div>
      </div>
    </div>
  );
};
