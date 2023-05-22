import React from 'react';
import propTypes from 'prop-types';
import { getCategories } from '../services/api';

class Home extends React.Component {
  state = {
    search: '',
    list: [],
    categories: [],
  };

  componentDidMount() {
    this.getCategoryData();
  }

  getCategoryData = async () => {
    const categories = await getCategories();
    console.log(categories);
    this.setState({
      categories,
    });
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
    const { search, list, categories } = this.state;
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

        <div>
          {
            categories.map(({ id, name }) => (
              <>
                <label htmlFor={ `${id}-${name}` }>{ name }</label>
                <input
                  key={ `${id}-${name}` }
                  id={ `${id}-${name}` }
                  name="category"
                  type="radio"
                  data-testid="category"
                />
              </>))
          }
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
