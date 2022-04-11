import React, { Component } from 'react';


import Movies from "./movies";
import { search } from './utils' 

class App extends Component {
  state = {
    movies: null,
    loading: false,
    value: ''
  };



  /* Função que pega os dados na api */
  search = async val => {
    this.setState({ loading: true });

    const results = await search(
      `https://newsapi.org/v2/everything?q=${val}&apiKey=c6595ed7516847f4a77b8fc01f2f9e6f`
    );
    const movies = results;

    this.setState({ movies, loading: false });
  };


  /* Função que lida com as mudanças na caixa de pesquisa */
  onChangeHandler = async e => {
    this.search(e.target.value);
    this.setState({ value: e.target.value });
  };


  get renderMovies() {
    let movies = <h1>Sem reultados</h1>;
    if (this.state.movies) {
      movies = <Movies list={this.state.movies} />;
    }

    return movies;
  }

  render() {
    return (
      <div>
        <input
          value={this.state.value}
          onChange={e => this.onChangeHandler(e)}
          placeholder="Type something to search"
        />
        {this.renderMovies}
      </div>
    );
  }
}

export default App;