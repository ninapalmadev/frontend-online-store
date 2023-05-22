import React from 'react';
import { Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './components/Home';
import Cart from './components/Cart';
import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route exact path="/cart" render={ (props) => <Cart { ...props } /> } />
    </Switch>
  );
}
export default App;
