import { createContext, useCallback, useEffect, useState } from "react";
import axios from "axios";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [pokemonsList, setPokemonsList] = useState();
  const [next, setNext] = useState(0);

  const getPokemons = useCallback(async () => {
    await axios
      .get(`https://pokeapi.co/api/v2/pokemon/?offset=${next}&limit=20`)
      .then((response) => setPokemonsList(response.data))
      .catch((err) => console.log(err));
  }, [next]);

  const previusPage = () => {
    if (next >= 20) {
      setNext(next - 20);
    }
  };

  const nextPage = () => {
    if (next <= 1100) {
      setNext(next + 20);
    }
  };

  // useEffect(() => {
  //   getPokemons();
  // }, []);

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
