import React from "react";
import LandingPage from "./pages/LandingPage";
import { Switch, Route } from "react-router-dom";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Details from "./pages/Details";
import Submit from "./pages/Submit";
import Job from "./pages/Job";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
        <LandingPage />
        </Route>
        <Route path="/submit" exact>
        <Submit />
        </Route>
        <Route path="/details" exact>
        <Details />
        </Route>
        <Route path="/job" exact>
        <Job />
        </Route>
        <Route path="/submit" exact>
        <Submit />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
