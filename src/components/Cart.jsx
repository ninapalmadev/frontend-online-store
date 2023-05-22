import React, { Component } from 'react';

class Cart extends Component {
  state = {
    cart: []
  };

  render () {
    const { cart } = this.state;

    return (
      (cart.length === 0)
      && (
        <p
          data-testid="shopping-cart-empty-message"
        >
          Seu carrinho está vazio
        </p>)
    );
  }
}

export default Cart;
