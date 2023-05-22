import React from 'react';
import propTypes from 'prop-types';

class Home extends React.Component {
  state = {
    search: '',
    list: [],
  };

  handleSearch = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  onCartButtonClick = () => {
    const { history } = this.props;

    history.push('/cart');
  };

  render() {
    const { search, list } = this.state;
    return (
      <div>
        <div>
          <label htmlFor="">
            <input
              type="text"
              name={ search }
              value={ search }
              onChange={ this.handleSearch }
            />
          </label>

          <button
            data-testid="shopping-cart-button"
            onClick={ this.onCartButtonClick }
          >
            Carrinho
          </button>
        </div>
        {
          list.length === 0
          && (
            <p data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </p>)
        }
      </div>
    );
  }
}

Home.propTypes = {
  history: propTypes.shape({
    push: propTypes.func.isRequired,
  }).isRequired,
};

export default Home;
