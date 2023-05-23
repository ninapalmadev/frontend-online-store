import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
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
