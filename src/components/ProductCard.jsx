import React from 'react';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  render() {
    const {
      title,
      thumbnail,
      price,
    } = this.props;
    return (
      <div className="product" data-testid="product">
        <p className="product-title">{ title }</p>
        <img className="image" src={ thumbnail } alt={ title } />
        <p className="price">
          { price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
        </p>

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
