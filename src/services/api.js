import axios from "axios";

export const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon",
});

// export const apiImages = axios.create({
//   baseURL:
//     "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon",
// });
