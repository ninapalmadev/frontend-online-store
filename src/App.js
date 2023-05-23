import React from 'react';
import { Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './components/Home';
import Cart from './components/Cart';
import ProductDetails from './components/ProductDetails';
import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route exact path="/cart" render={ (props) => <Cart { ...props } /> } />
      <Route
        exact
        path="/product-details/:id"
        render={ (props) => <ProductDetails { ...props } /> }
      />
    </Switch>
  );
}
export default App;
