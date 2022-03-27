import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [pokemonsRequest, setPokemonsRequest] = useState({});
  const [pokemonsList, setPokemonsList] = useState([]);
  const [next, setNext] = useState(0);
  const poketotal = pokemonsRequest.count - 6;

  const getPokemons = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/?offset=${next}&limit=20`)
      .then((response) => setPokemonsRequest(response.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getPokemons();
  }, [next]);

  const firstPage = () => {
    setNext(0);
  };

  const previusPage = () => {
    if (next >= 20) {
      setNext(next - 20);
    }
  };

  const nextPage = () => {
    if (next <= 1120) {
      setNext(next + 20);
    }
  };

  const lastPage = () => {
    setNext(poketotal);
  };

  const totalPage = () => {
    return poketotal / 20;
  };

  console.log(next);

  return (
    <DataContext.Provider
      value={{
        next,
        pokemonsList,
        pokemonsRequest,
        setPokemonsList,
        getPokemons,
        previusPage,
        nextPage,
        firstPage,
        lastPage,
        totalPage,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
