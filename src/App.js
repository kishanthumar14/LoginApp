import React from 'react';
import './App.css';
import Demo from './module/demoProject/demo';
import User from './module/demoProject/users/user';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route exact path="/user" component={User} />
            <Route path="/" component={Demo} />
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
