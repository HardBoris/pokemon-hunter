import { createContext, useState } from "react";

export const CapturaContext = createContext();

export const CapturaProvider = ({ children }) => {
  const [captured, setCaptured] = useState([]);
  const [isFree, setIsFree] = useState(true);

  const addPokemon = (data) => {
    setCaptured([...captured, data[0]]);
  };

  const releasePokemon = (data) => {
    console.log(data);
    setCaptured(captured.filter((item) => item["name"] !== data));
    setIsFree(true);
  };

  const allRelease = () => {
    setCaptured([]);
  };

  const freedom = (data) => {
    console.log(data);
    let nombres = captured.length > 0 && captured.map((item) => item["name"]);
    if (nombres.length > 0) {
      if (nombres.includes(data)) {
        setIsFree(false);
      } else {
        setIsFree(true);
      }
    }
  };

  console.log(captured);
  console.log(isFree);

  return (
    <CapturaContext.Provider
      value={{
        addPokemon,
        releasePokemon,
        allRelease,
        freedom,
        isFree,
        captured,
      }}
    >
      {children}
    </CapturaContext.Provider>
  );
};
