import { createContext, useContext } from "react";
import { DataContext } from "../Data";

export const ImagoContext = createContext();

export const ImagoProvider = ({ children }) => {
  const { pokemonsRequest } = useContext(DataContext);
  const pokeList = pokemonsRequest.results;

  const pokeNumStr = pokeList
    ? pokeList.map((item) => (item = item["url"].split("/")[6]))
    : [];
  const pokeNum = pokeNumStr
    ? pokeNumStr.map((item) => (item = parseInt(item)))
    : [];
  console.log(pokeNum);

  const endereco = (x) => {
    let url =
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
    return `${url}${x}.png`;
  };

  const imagoId = pokeNum && pokeNum.map((item) => (item = endereco(item)));

  return (
    <ImagoContext.Provider value={{ pokeNum, imagoId }}>
      {children}
    </ImagoContext.Provider>
  );
};
