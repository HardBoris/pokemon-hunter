import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [pokemonsRequest, setPokemonsRequest] = useState({});
  const [pokemonsList, setPokemonsList] = useState([]);
  const [next, setNext] = useState(0);

  const getPokemons = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/?offset=${next}&limit=20`)
      .then((response) => setPokemonsRequest(response.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getPokemons();
  }, [next]);

  const previusPage = () => {
    if (next >= 20) {
      setNext(next - 20);
    }
  };

  const nextPage = () => {
    if (next < 1126) {
      setNext(next + 20);
    }
  };

  console.log(pokemonsRequest);

  return (
    <DataContext.Provider
      value={{
        pokemonsList,
        pokemonsRequest,
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
