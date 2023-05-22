import React from 'react';

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
export default Home;
