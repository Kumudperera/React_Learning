import { Route, Switch } from "react-router-dom";

import AllMeetUpsPage from "./pages/AllMeetUps";
import FavoritesPage from "./pages/Favorites";
import NewMeetUpPage from "./pages/NewMeetUp";
import MainNavigation from "./components/layout/MainNavigation";

function App() {
  return (
    <div>
      <MainNavigation />
      <Switch>
      <Route path="/" exact>
        <AllMeetUpsPage />
      </Route>

      <Route path="/new-meetup">
        <NewMeetUpPage />
      </Route>

      <Route path="/favorites">
        <FavoritesPage />
      </Route>
      </Switch>
    </div>
  );
}

export default App;
