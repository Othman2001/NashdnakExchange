import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import HomePage from './presantion/pages/HomePage';
import Trade from './presantion/pages/Trade';

document.body.style = 'background: #202442;';
const App = () => (
  <Router>

    <Switch>
      <Route
        path="/"
        component={HomePage}
        exact
      />
      <Route path="/stock" component={Trade} />
    </Switch>

  </Router>

);
export default App;
