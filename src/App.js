import React from 'react';

import './App.css';
// import NavBar from './components/NavBar';
import MainContainer from './components/MainContainer';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <Router>
	  <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <MainContainer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
