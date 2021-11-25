import { Route, Switch } from "react-router-dom";

import AllMeetUpsPage from "./pages/AllMeetUps";
import FavoritesPage from "./pages/Favorites";
import NewMeetUpPage from "./pages/NewMeetUp";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      {/* By Switch component, we tell a react Router that only one route should be active */}
      <Switch>
        {/* By Switch component, checks the url path and first one render it but not checks others. 
        Then use exact prop for the first */}
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
    </Layout>
  );
}

export default App;
