import { createContext, useContext, useEffect, useState } from "react";
import { DataContext } from "../Data";

export const CapturaContext = createContext();

export const CapturaProvider = ({ children }) => {
  const { allPoke } = useContext(DataContext);
  const [captured, setCaptured] = useState([]);

  const addPokemon = (data) => {
    console.log(data[0]);
    let capturado = allPoke.filter((item) => item["name"] === data[0]["name"]);
    setCaptured([...captured, capturado[0]]);
  };

  useEffect(() => {}, []);

  console.log(captured);

  return (
    <CapturaContext.Provider value={{ addPokemon }}>
      {children}
    </CapturaContext.Provider>
  );
};
