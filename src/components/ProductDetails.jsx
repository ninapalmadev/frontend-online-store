import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductById } from '../services/api';

class ProductDetails extends React.Component {
  state = {
    products: {},
  };

  componentDidMount() {
    this.getInfoProducts();
  }

  getInfoProducts = async () => {
    const { match: { params: { id } } } = this.props;
    const response = await getProductById(id);
    this.setState({ products: response });
  };

  onCartButtonClick = () => {
    const { products } = this.state;
    const { id, title, price, thumbnail } = products;
    const product = { id, title, price, thumbnail };
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const inCart = cart.some((item) => item.id === id);
    if (!inCart) {
      localStorage.setItem('cart', JSON.stringify([...cart, product]));
    }
  };

  render() {
    const { products } = this.state;
    return (
      <div>
        <h2 data-testid="product-detail-name">{ products.title }</h2>
        <img
          src={ products.thumbnail }
          alt={ products.title }
          data-testid="product-detail-image"
        />
        <p data-testid="product-detail-price">{ products.price }</p>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ this.onCartButtonClick }
        >
          Enviar para o carrinho
        </button>

        <Link to="/cart" data-testid="shopping-cart-button">Carrinho</Link>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape().isRequired,
};

export default ProductDetails;
