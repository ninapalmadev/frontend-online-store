import React from 'react';
import { Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './components/Home';
import './App.css';
function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Home } />
    </Switch>
  );
}
export default App;
