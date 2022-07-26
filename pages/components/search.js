import React, { Component } from "react";
import axios from "axios";

import { Button, CardText, CardSubtitle, CardGroup, Card, CardImg, CardBody, CardTitle, Container, Row, Col, UncontrolledCarousel } from 'reactstrap';



//import { search } from "./utils";
import Movies from "./movies";

class Search extends Component {
  state = {
    movies: null,
    loading: false,
    value: ""
  };


  //Make the
  search = async val => {
    this.setState({ loading: true });
    const articles = await axios.get(
      `https://newsapi.org/v2/top-headlines?q=${val}&country=br&sortBy=popularity&apiKey=c6595ed7516847f4a77b8fc01f2f9e6f`
    );
    const news = articles;
    const movies = news.data.articles;
    console.log(movies);

    this.setState({ movies, loading: false });
  };



 //Handle with input
  onChangeHandler = async e => {
    this.search(e.target.value);
    this.setState({ value: e.target.value });
  };


  get renderMovies() {
    let movies = <h1>Erro</h1>;
    if (this.state.movies) {
      movies = <Movies list={this.state.movies} />;
    }

    return movies;
  }

  render() {
    return (
      <div>

        <Container>
        <input
          value={this.state.value}
          onChange={e => this.onChangeHandler(e)}
          placeholder="Type something to search"
        />
        {this.renderMovies}
        </Container>
      </div>
    );
  }
}

export default Search;
