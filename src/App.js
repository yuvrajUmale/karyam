import React, {useState} from "react";
import LandingPage from "./pages/LandingPage";
import { Switch, Route } from "react-router-dom";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
//login
import Login from '../src/pages/auth/Login';
import Logout from "./pages/auth/Logout";

import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Details from "./pages/Details";
import Submit from "./pages/Submit";
import Job from "./pages/Job";
import Admin from "./pages/Admin";
import Home from "./pages/Home";

function App() {

  return (
    <div>
      <Switch>
        <Route path="/" exact>
        <Login />
        </Route>
        <Route path="/home">
        <Home />
        </Route>
        <Route path="/logout" exact>
        <Logout />
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
        <Route path="/Admin" exact>
        <Admin />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
