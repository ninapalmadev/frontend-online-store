import React from 'react';
import PropTypes from 'prop-types';
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
          data-testid="shopping-cart-button"
        >
          Enviar para o carrinho
        </button>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape().isRequired,
};

export default ProductDetails;
