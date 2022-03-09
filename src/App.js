import logo from './logo.svg';
import React from 'react';

import {
  Route,
  Router,
  BrowserRouter
} from "react-router-dom";

import { createBrowserHistory } from 'history';

import './App.css';

//Pages
import Home from './Pages/Home'
import Casters from './Pages/Casters'
import Matchup from './Pages/Matchup'
import LeagueOverlay from './Pages/LeagueSpectatorOverlay'
import DynamicOverlay from './Pages/DynamicOverlay'
import Background from './Pages/Background';

function App() {

  const history = createBrowserHistory();

  return (
    <Router history={history}>
      <React.Fragment>
        <main role='main' className="content flex-shrink-0">
          <Route exact path="/" component={Home} />
          <Route path="/Casters" component={Casters} />
          <Route path="/Matchup" component={Matchup} />
          <Route path="/LeagueOverlay" component={LeagueOverlay} />
          <Route path="/DynamicOverlay" component={DynamicOverlay} />
          <Route path="/Background" component={Background} />
        </main>
      </React.Fragment>
    </Router>
  );
}

export default App;
