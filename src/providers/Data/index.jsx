import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [pokemonsRequest, setPokemonsRequest] = useState({});
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

  const qty = pokemonsRequest.count;
  const poketotal = qty - 6;
  const pokeList = pokemonsRequest.results;
  const statusNext = pokemonsRequest.next;
  const statusPrevious = pokemonsRequest.previous;

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

  console.log(pokemonsRequest);

  return (
    <DataContext.Provider
      value={{
        next,
        qty,
        pokeList,
        statusNext,
        statusPrevious,
        previusPage,
        nextPage,
        firstPage,
        lastPage,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
