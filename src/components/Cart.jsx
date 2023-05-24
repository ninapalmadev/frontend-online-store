import React, { Component } from 'react';

class Cart extends Component {
  state = {
    cart: [],
  };

  componentDidMount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    this.setState({
      cart,
    });
  }

  render() {
    const { cart } = this.state;

    return (
      <div>
        {
          (cart.length === 0)
          && (
            <p
              data-testid="shopping-cart-empty-message"
            >
              Seu carrinho está vazio
            </p>)
        }

        {
          cart.map(({ title, thumbnail, price, id }) => (
            <div key={ id }>
              <h2 data-testid="shopping-cart-product-name">{ title }</h2>
              <img
                src={ thumbnail }
                alt={ title }
                data-testid="product-detail-image"
              />
              <p data-testid="product-detail-price">{ price }</p>
              <p data-testid="shopping-cart-product-quantity">1</p>
            </div>
          ))
        }
      </div>
    );
  }
}

export default Cart;
