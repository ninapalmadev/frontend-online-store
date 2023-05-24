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

  onIncreaseButtonClick = (id) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItem = cart.find((item) => item.id === id);

    cartItem.quantity += 1;

    localStorage.setItem('cart', JSON.stringify(cart));
    this.setState({
      cart,
    });
  };

  onDecreaseButtonClick = (id) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItem = cart.find((item) => item.id === id);
    const newQuantity = (cartItem.quantity === 1) ? 1 : cartItem.quantity - 1;

    cartItem.quantity = newQuantity;

    localStorage.setItem('cart', JSON.stringify(cart));
    this.setState({
      cart,
    });
  };

  onRemoveButtonClick = (id) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItem = cart.filter((item) => item.id !== id);

    localStorage.setItem('cart', JSON.stringify(cartItem));
    this.setState({
      cart: cartItem,
    });
  };

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
          cart.map(({ title, thumbnail, price, id, quantity }) => (
            <div key={ id }>
              <h2 data-testid="shopping-cart-product-name">{ title }</h2>
              <img
                src={ thumbnail }
                alt={ title }
                data-testid="product-detail-image"
              />
              <p data-testid="product-detail-price">{ price }</p>
              <p data-testid="shopping-cart-product-quantity">{ quantity }</p>
              <button
                data-testid="product-increase-quantity"
                onClick={ () => this.onIncreaseButtonClick(id) }
              >
                +
              </button>
              <button
                data-testid="product-decrease-quantity"
                onClick={ () => this.onDecreaseButtonClick(id) }
              >
                -
              </button>
              <button
                data-testid="remove-product"
                onClick={ () => this.onRemoveButtonClick(id) }
              >
                Remover
              </button>
            </div>
          ))
        }
      </div>
    );
  }
}

export default Cart;
