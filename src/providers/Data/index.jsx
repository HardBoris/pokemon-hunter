import { createContext, useCallback, useEffect, useState } from "react";
import axios from "axios";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [pokemonsList, setPokemonsList] = useState();
  const [next, setNext] = useState(0);

  const getPokemons = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/?offset=${next}&limit=20`)
      .then((response) => setPokemonsList(response.data))
      .catch((err) => console.log(err));
  };

  const previusPage = () => {
    if (next >= 1) {
      setNext(next - 1);
    }
  };

  const nextPage = () => {
    if (next < 1126) {
      setNext(next + 1);
    }
  };

  useEffect(() => {
    getPokemons();
  }, [next]);

  console.log(pokemonsList);

  return (
    <DataContext.Provider
      value={{
        pokemonsList,
        setPokemonsList,
        getPokemons,
        previusPage,
        nextPage,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
