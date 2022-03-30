import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [pokemonsRequest, setPokemonsRequest] = useState({});
  const [allPoke, setAllPoke] = useState([]);
  const [next, setNext] = useState(0);
  const [finder, setFinder] = useState([]);

  const getPokemons = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/?offset=${next}&limit=20`)
      .then((response) => setPokemonsRequest(response.data))
      .catch((err) => console.log(err));
  };

  const allPokemons = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1127`)
      .then((response) => setAllPoke(response.data.results))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getPokemons();
  }, [next]);

  useEffect(() => {
    allPokemons();
  }, []);

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

  const miprova = allPoke.map((item) => (item = item["url"].split("/")[6]));

  const buscador = (data) => {
    const procTxt = allPoke.filter((item) => item["name"] === data);
    const procNum = miprova.includes(data);
    if (procTxt.length !== 0) {
      setFinder(procTxt);
      return procTxt;
    } else if (procNum) {
      let i = miprova.indexOf(data);
      setFinder([allPoke[i]]);
      return allPoke[i];
    } else {
      setFinder([]);
    }
  };

  return (
    <DataContext.Provider
      value={{
        next,
        qty,
        pokeList,
        statusNext,
        statusPrevious,
        finder,
        allPoke,
        previusPage,
        nextPage,
        firstPage,
        lastPage,
        buscador,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
