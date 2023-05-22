import React from 'react';
import propTypes from 'prop-types';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';

class Home extends React.Component {
  state = {
    search: '',
    searching: false,
    list: [],
    categories: [],
  };

  componentDidMount() {
    this.getCategoryData();
  }

  getCategoryData = async () => {
    const categories = await getCategories();

    this.setState({
      categories,
    });
  };

  onInputChange = ({ target }) => {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  };

  onQueryButtonClick = async () => {
    const { search } = this.state;
    const { results } = await getProductsFromCategoryAndQuery('', search);

    this.setState({
      list: results,
      searching: true,
    });
  };

  onCartButtonClick = () => {
    const { history } = this.props;

    history.push('/cart');
  };

  render() {
    const { search, list, categories, searching } = this.state;

    return (
      <div>
        <div>
          <label htmlFor="search-input">Caixa de pesquisa</label>
          <input
            data-testid="query-input"
            id="search-input"
            name="search"
            type="text"
            value={ search }
            onInput={ this.onInputChange }
          />

          <button
            data-testid="query-button"
            onClick={ this.onQueryButtonClick }
          >
            Procurar
          </button>

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
                  value={ name }
                  data-testid="category"
                  onChange={ this.onInputChange }
                />
              </>))
          }
        </div>

        {
          list.length === 0
          && (
            <p
              data-testid="home-initial-message"
            >
              Digite algum termo de pesquisa ou escolha uma categoria.
            </p>)
        }

        {
          (list.length === 0 && searching)
          && <p>Nenhum produto foi encontrado</p>
        }

        {
          (list.length > 0 && searching)
          && list.map((product) => {
            const {
              title,
              thumbnail,
              price,
            } = product;

            return (
              <div
                data-testid="product"
                key={ product.catalog_product_id }
              >
                <h1>{ title }</h1>
                <img
                  src={ thumbnail }
                  alt="Product thumbnail"
                />
                <p>{ price }</p>
              </div>
            );
          })
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
