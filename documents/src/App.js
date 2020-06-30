import React from 'react';

import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import GlobalMenu from './components/GlobalMenu.js';

import PageHome from './pages/PageHome';
import PageA from './pages/PageA';
import PageB from './pages/PageB';
import PageC from './pages/PageC';

function App() {
    return (
        <div className="App">
          <Router>
              <Switch>
                <Route exact path='/' component={PageHome} />
                <Route exact path='/a' component={PageA} />
                <Route exact path='/b' component={PageB} />
                <Route exact path='/c' component={PageC} />
              </Switch>

            <Route component={GlobalMenu} />
          </Router>
        </div>
  );
}

export default App;
