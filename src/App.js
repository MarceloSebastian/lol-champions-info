import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AboutPage from "./components/AboutPage";
import ChampionInfoPage from "./components/ChampionInfoPage";
import ChampionsPage from "./components/ChampionsPage";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import RedirectPage from "./components/RedirectPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/home' component={HomePage} />
        <Route exact path='/champions' component={ChampionsPage} />
        <Route exact path='/champions/:id' component={ChampionInfoPage} />
        <Route exact path='/about' component={AboutPage} />
        <Route component={RedirectPage} />
      </Switch>
    </Router>
  );
};


export default App;
