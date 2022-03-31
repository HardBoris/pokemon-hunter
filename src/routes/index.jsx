import { Route, Switch } from "react-router-dom";
import { Home } from "../pages/Home";
import { Pokemons } from "../pages/Pokemons";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/pokemons">
        <Pokemons />
      </Route>
    </Switch>
  );
};
