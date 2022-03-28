import { createContext, useContext } from "react";
import { DataContext } from "../Data";

export const ImagoContext = createContext();

export const ImagoProvider = ({ children }) => {
  const { pokeList, allPoke } = useContext(DataContext);

  const pokeNumStr = pokeList
    ? pokeList.map((item) => (item = item["url"].split("/")[6]))
    : [];
  const pokeNum = pokeNumStr
    ? pokeNumStr.map((item) => (item = parseInt(item)))
    : [];

  const endereco = (x) => {
    let url =
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
    return `${url}${x}.png`;
  };

  const imagoId = pokeNum && pokeNum.map((item) => (item = endereco(item)));

  // const meuPokeList = allPoke
  //   ? allPoke.map((item) => (item = item["url"].split("/")[6]))
  //   : [];
  // console.log(allPoke);
  // console.log(meuPokeList);

  return (
    <ImagoContext.Provider value={{ pokeNum, imagoId, endereco }}>
      {children}
    </ImagoContext.Provider>
  );
};
