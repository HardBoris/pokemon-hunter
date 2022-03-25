import { Route, Switch } from "react-router-dom";
import { Home } from "../pages/Home";
import { Pl } from "../pages/PokemonsListados";

export const Routes = () => {
  return (
    <Switch>
      {/* <Route exact path="/">
        <Home />
      </Route> */}
      <Route path="/">
        <Pl />
      </Route>
    </Switch>
  );
};
