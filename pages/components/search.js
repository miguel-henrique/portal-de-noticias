import React, { Component } from "react";
import axios from "axios";

import { search } from "./utils";
import Movies from "./Movies";

class App extends Component {
  state = {
    movies: null,
    loading: false,
    value: ""
  };

  search = async val => {
    this.setState({ loading: true });
    const articles = await search(
      `https://newsapi.org/v2/everything?q=${val}&apiKey=c6595ed7516847f4a77b8fc01f2f9e6f`
    );
    const movies = articles;

    this.setState({ movies, loading: false });
  };

  onChangeHandler = async e => {
    this.search(e.target.value);
    this.setState({ value: e.target.value });
  };

  get renderMovies() {
    let movies = <h1>There's no movies</h1>;
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
