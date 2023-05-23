import React from 'react';
import propTypes from 'prop-types';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import Categories from './Categories';
import ProductCard from './ProductCard';

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

  handleRadioCLick = async (event) => {
    const { value } = event.target;
    const { results } = await getProductsFromCategoryAndQuery('', value);

    this.setState({
      list: results,
      searching: true,
    });
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
            categories.map(({ name }, index) => (
              <Categories
                onClick={ this.handleRadioCLick }
                key={ index }
                name={ name }
              />
            ))
          }
        </div>
        <div>
          {
            list.length === 0
          && (
            <p
              data-testid="home-initial-message"
            >
              Digite algum termo de pesquisa ou escolha uma categoria.
            </p>)
          }
        </div>
        {
          (list.length === 0 && searching)
          && <p>Nenhum produto foi encontrado</p>
        }
        {
          (list.length > 0 && searching)
          && list.map((product) => (
            <div key={ product.catalog_product_id }>
              <ProductCard
                id={ product.id }
                title={ product.title }
                price={ product.price }
                thumbnail={ product.thumbnail }
                product={ product }
              />
            </div>
          ))
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
