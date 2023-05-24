import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends Component {
  onCartButtonClick = () => {
    const {
      title,
      thumbnail,
      price,
      id,
    } = this.props;

    const product = {
      id,
      title,
      price,
      thumbnail,
      quantity: 1,
    };
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const inCart = cart.some((item) => item.id === id);
    if (!inCart) {
      localStorage.setItem('cart', JSON.stringify([...cart, product]));
    }
  };

  render() {
    const {
      title,
      thumbnail,
      price,
      id,
    } = this.props;

    return (
      <div className="product" data-testid="product">
        <p className="product-title">{ title }</p>
        <img className="image" src={ thumbnail } alt={ title } />
        <p className="price">
          { price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
        </p>
        <Link to={ `/product-details/${id}` } data-testid="product-detail-link">
          Ver detalhes do Produto
        </Link>

        <button
          data-testid="product-add-to-cart"
          onClick={ this.onCartButtonClick }
        >
          Enviar para o carrinho
        </button>
      </div>
    );
  }
}

ProductCard.propTypes = {
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  price: PropTypes.number,
}.isRequired;

export default ProductCard;
