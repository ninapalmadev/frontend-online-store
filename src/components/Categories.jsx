import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Categories extends Component {
  render() {
    const {
      id,
      name,
      onClick,
    } = this.props;

    return (
      <div>
        <label htmlFor={ `${id}-${name}` }>{ name }</label>
        <input
          key={ `${id}-${name}` }
          id={ `${id}-${name}` }
          name="category"
          type="radio"
          value={ name }
          data-testid="category"
          onClick={ onClick }
        />
      </div>
    );
  }
}
Categories.propTypes = {
  name: PropTypes.string,
}.isRequired;

export default Categories;
